from flask import Flask, render_template, request,send_file
from flask_sqlalchemy import SQLAlchemy
from send_email import send_email
from sqlalchemy.sql import func
from werkzeug.utils import secure_filename
from flask import render_template,redirect,request,jsonify,make_response
import os
import json
from difflib import get_close_matches
import folium
import pandas
from pytube import YouTube


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:postgres1234@localhost/form_data'
# app.config['SQLALCHEMY_DATABASE_URI']='postgres://zlntogdljjylwe:fa7320e2299db1afaaf8c99fd787f34e6d0f1417273badc63be84696af8d87c5@ec2-34-193-117-204.compute-1.amazonaws.com:5432/dbtpucslfrgle3?sslmode=require'
db=SQLAlchemy(app)

class Data(db.Model):
    __tablename__="data"
    id=db.Column(db.Integer, primary_key=True)
    fullname_=db.Column(db.String(20))
    email_=db.Column(db.String(120), unique=True)
    password_=db.Column(db.String(120))
    number_=db.Column(db.String(50))
    Age_=db.Column(db.Integer)
    
    

    def __init__(self,fullname_,email_,password_,number_,Age_):
        self.email_=email_
        self.fullname_=fullname_
        self.number_=number_
        self.Age_=Age_
        self.password_=password_

class Data1(db.Model):
    __tablename__="data1"
    id=db.Column(db.Integer, primary_key=True)
    Name_=db.Column(db.String(20))
    Email_=db.Column(db.String(120))
    Service_=db.Column(db.String(120))
    Message_=db.Column(db.String(300))
    

    def __init__(self,Name_,Email_,Service_,Message_):
        self.Email_=Email_
        self.Name_=Name_
        self.Service_=Service_
        self.Message_=Message_



class Data2(db.Model):
    __tablename__="data2"
    id=db.Column(db.Integer, primary_key=True)
    Name_=db.Column(db.String(20))
    Email_=db.Column(db.String(120))
    Component_=db.Column(db.String(120))
    Rating_=db.Column(db.Integer)
    Feedback_=db.Column(db.String(300))
    

    def __init__(self,Name_,Email_,Component_,Rating_,Feedback_):
        self.Email_=Email_
        self.Name_=Name_
        self.Component_=Component_
        self.Rating_=Rating_
        self.Feedback_=Feedback_
        

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/contact-us/')
def contactus():
    return render_template("contactus.html")

@app.route('/signup/')
def signup():
    return render_template("signup.html")



@app.route('/home-page/')
def homepage():
    return render_template("front.html")


@app.route('/video-download/')
def videodown():
    return render_template("youtubeDown.html")


@app.route('/upload-file/')
def uploadfile():
    return render_template("uploadfile.html")


@app.route('/download-file/')
def downloadfile():
    return render_template("downloadfiles.html")

@app.route('/Dictionary/')
def dictionary():
    return render_template("dictionary.html")

@app.route('/quizes/')
def quizes():
    return render_template("quiz.html")

@app.route("/quiz1")
def q1():
    return render_template("quiz1.html")

@app.route("/quiz-NumericalAbility")
def q2():
    return render_template("quizNa.html")

@app.route("/quiz-VerbalAbility")
def q3():
    return render_template("quizVerbal.html")

@app.route("/quiz-LogicalAbility")
def q4():
    return render_template("quizlogic.html")

@app.route("/quiz-Java")
def q5():
    return render_template("quizjava.html")

@app.route("/quiz-DBMS")
def q6():
    return render_template("quizdb.html")

@app.route("/quiz-OperatingSystem")
def q7():
    return render_template("quizos.html")

@app.route("/quiz-SofwareEngg")
def q8():
    return render_template("quizse.html")

@app.route("/projects")
def proj():
    return render_template("project.html")



@app.route('/corona-update/')
def mapcorona():
    data = pandas.read_csv("long_lat.txt")
    lat = list(data["LAT"])
    lon = list(data["LON"])
    elev = list(data["ELEV"])
    name = list(data["NAME"])
 
    html = """
    Volcano name:<br>
    <a href="https://www.google.com/search?q=%%22%s%%22" target="_blank">%s</a><br>
    Height: %s m
     """
    def color_producer(elevation):
        if elevation<50:
            return 'green'
        elif 50<=elevation<10000:
            return 'orange'
        else:
            return 'red'
    map = folium.Map(location=[20.5937, 78.9629], zoom_start=5, tiles="Stamen Terrain")

    fg=folium.FeatureGroup(name = "Corona Areas")
    for lt, ln, el, name in zip(lat, lon, elev, name):
        fg.add_child(folium.Marker(location=[lt, ln] ,radius=0,popup=(name,el),icon=folium.Icon(color=color_producer(el)),color='grey',fill_opacity=0.7))

    map.add_child(fg)
    map.add_child(folium.LayerControl())
    # map.save("Map1.html")
    return render_template("Map1.html")

@app.route("/register", methods=['POST'])
def register():
    if request.method=='POST':
        fullname=request.form["full_name"]
        email=request.form["email_name"]
        password=request.form["pass"]
        Phone=request.form["phone_no"]
        Age=request.form["age"]
        
        if db.session.query(Data).filter(Data.email_ == email).count()== 0:
            data=Data(fullname,email,password,Phone,Age)
            db.session.add(data)
            db.session.commit()
            send_email(fullname,email,password)
            return render_template("index.html")
    return render_template('signup.html', text="Seems like we got something from that email once!")

@app.route("/home", methods=['POST'])
def login():
    if request.method=='POST':
        email_id=request.form["email_id"]
        pass_word=request.form["pswd"]
        
        if db.session.query(Data).filter(Data.email_ == email_id ).count()== 1:
            if db.session.query(Data).filter(Data.password_ == pass_word ).count()== 1:
                return render_template("front.html")
    return render_template('index.html', text="Seems like you don't have an account for this email ! <br>or check your Email id or Password")

@app.route("/success", methods=['POST'])
def success():
    if request.method=='POST':
        url_name=request.form["url_video"]
        path=request.form["path_name"]

        user_input =url_name
        yt=YouTube(user_input)
        try:
            dw= yt.streams.filter(progressive=True,file_extension='mp4').order_by('resolution').desc().first()
            dw.download(path)
            return render_template("success.html")
        except:
            return render_template("youtubeDown.html",text1="Video can't be downloaded!Please see if the url or path entered is correct and try again.")


app.config["IMAGE_UPLOADS"]= "DemoStyle//static//img//Uploads"
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["JPEG", "JPG", "PNG", "PDF", "DOC", "DOCX", "MP4", "MP3","ZIP"]

def allowed_image(filename):

    # We only want files with a . in the filename
    if not "." in filename:
        return False

    # Split the extension from the filename
    ext = filename.rsplit(".", 1)[1]

    # Check if the extension is in ALLOWED_IMAGE_EXTENSIONS
    if ext.upper() in app.config["ALLOWED_IMAGE_EXTENSIONS"]:
        return True
    else:
        return False

@app.route("/uploadFiles", methods=['POST'])
def upload_image():
    global file
    if request.method=='POST':
        file=request.files["filename"]
        file.save(secure_filename("uploaded"+file.filename))
        with open("uploaded"+file.filename,"a") as f:
            f.write("This was added later!")
        print(file)
        print(type(file))
        return render_template("uploadfile.html")



@app.route("/projects", methods=["GET", "POST"])
def project():

    global file
    if request.method=='POST':
        file=request.files["filename"]
        file.save(secure_filename("uploaded"+file.filename))
        with open("uploaded"+file.filename,"a") as f:
            f.write("This was added later!")
        print(file)
        print(type(file))
        return render_template("project.html")

from flask import send_file, send_from_directory, safe_join, abort

app.config["CLIENT_IMAGES"] ="/app/static/client/pdf"
app.config["CLIENT_CSV"] = "/app/static/client/pdf"
app.config["CLIENT_PDF"] = "/app/static/client/pdf"

@app.route("/get-image/<image_name>")
def get_image(image_name):
    try:
        return send_from_directory(app.config["CLIENT_IMAGES"], filename=image_name, as_attachment=True)
    except FileNotFoundError:
        abort(404)

@app.route("/get-csv/<filename>")
def get_csv(filename):

    #filename = f"{csv_id}.csv"

    try:
        return send_from_directory(app.config["CLIENT_CSV"], filename=filename, as_attachment=True)
    except FileNotFoundError:
        abort(404) 

@app.route("/get-pdf/<filename>")
def get_pdf(filename):

    #filename = f"{pdf_id}.csv"

    try:
        return send_from_directory(app.config["CLIENT_PDF"], filename=filename, as_attachment=True)
    except FileNotFoundError:
        abort(404)          


@app.route("/search-word", methods=['POST'])
def searchword():
    data=json.load(open("data.json"))
    def translate(word):
        word=word.lower()
        if word in data:
            return data[word]
        else:
            return "The word does'nt exist.Please double check it"
    
    if request.method=='POST':
        word=request.form["search_word"]
        results=[]
        output=translate(word)
        if type(output)==list:
            for item in output:
                results.append(item)
                return render_template("dictionary.html",items=results,line="The word ",userword=word,line2=" has following meaning/meanings below:")

        else:
            return render_template("dictionary.html",result=output,userword=word,line="The word ",line2=" has meaning below:")  


@app.route("/feedback", methods=['POST'])
def fdback():
    if request.method=='POST':
        Name=request.form["Name_fd"]
        Email=request.form["Email_fd"]
        Component=request.form["Component_fd"]
        rating=request.form["opt"]
        feedback=request.form["txt_fdb"]
        
        data2=Data2(Name,Email,Component,rating,feedback)
        db.session.add(data2)
        db.session.commit()
        
        return render_template("front.html")

@app.route("/contact", methods=['POST'])
def msg():
    if request.method=='POST':
        Name=request.form["Name"]
        Email=request.form["Email"]
        Service=request.form["Service"]
        Message=request.form["Message"]
        

        data1=Data1(Name,Email,Service,Message)
        db.session.add(data1)
        db.session.commit()
        
        return render_template("contactus.html")

if __name__ == '__main__':
    app.debug=True
    app.run(port=5005)
