const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const quizHomeBox = document.querySelector(".quiz-home-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
//const startQuizBtn = document.querySelector(".start-quiz-btn");
const categoryBox = document.querySelector(".category-box");
const categoryText = document.querySelector(".category-text");

let attempt=0;
let questionIndex=0;
let number=0;
let score=0;
let myArray=[];
let interval;
let categoryIndex;

myApp=[
{
     category:"Introduction to Database",
    quizWrap:[
        {
        question:"The DBMS acts as an interface between what two components of an enterprise-class database system?",
        options:["Database application and the database","Data and the database","The user and the database application","Database application and SQL"],
        answer:0,
        },
        {
        question:"Which of the following products was an early implementation of the relational model developed by E.F. Codd of IBM?",
        options:["IDMS","DB2","dBase-II","R:base"],
         answer:1,
        },
        {
         question:"The following are components of a database except ________ .",
         options:["user data","metadata","reports","indexes"],
         answer:2,
        },
        {
         question:"An application where only one user accesses the database at a given time is an example of a(n) ________ .",
         options:["single-user database application","multiuser database application", "e-commerce database application", "data mining database application"],
         answer:0,
        },
        {
         question:"An on-line commercial site such as Amazon.com is an example of a(n) ________ .",
         options:["single-user database application","multiuser database application", "e-commerce database application", "data mining database application"],
         answer:2,
        },
        {
            question:"Which of the following products was the first to implement true relational algebra in a PC DBMS?",
            options:["IDMS","DB2","dBase-II","R:base"],
            answer:3,
           },
           {
            question:"SQL stands for ________ .",
            options:["Structured Query Language","Sequential Query Language","Structured Question Language","Sequential Question Language"],
            answer:0,
           },
           {
            question:"Because it contains a description of its own structure, a database is considered to be ________ .",
            options:["described","metadata compatible","self-describing","an application program"],
            answer:2,
           },
           {
            question:"The following are functions of a DBMS except ________ .",
            options:["creating and processing forms","creating databases","processing data","administrating databases"],
            answer:0,
           },
           {
            question:"Helping people keep track of things is the purpose of a(n) ________ .",
            options:["database","table","instance","relationship"],
            answer:0,
           },
           
    ]
},
{
    category:"Introduction to SQL",
   quizWrap:[
       {
       question:"You can add a row using SQL in a database with which of the following?",
       options:["ADD","CREATE","INSERT","MAKE"],
       answer:2,
       },
       {
       question:"The command to remove rows from a table 'CUSTOMER' is:",
       options:["REMOVE FROM CUSTOMER ...","DROP FROM CUSTOMER ...","DELETE FROM CUSTOMER ...","UPDATE FROM CUSTOMER ..."],
        answer:2,
       },
       {
        question:"The SQL WHERE clause:",
        options:["limits the column data that are returned.","limits the row data are returned.","Both A and B are correct.","Neither A nor B are correct."],
        answer:1,
       },
       {
        question:"Which of the following is the original purpose of SQL?",
        options:["To specify the syntax and semantics of SQL data definition language","To specify the syntax and semantics of SQL manipulation language","To define the data structures","All of the above."],
        answer:3,
       },
       {
        question:"The wildcard in a WHERE clause is useful when?",
        options:["An exact match is necessary in a SELECT statement.","An exact match is not possible in a SELECT statement.","An exact match is necessary in a CREATE statement.","An exact match is not possible in a CREATE statement."],
        answer:1,
       },
       {
        question:" A view is which of the following?",
        options:["A virtual table that can be accessed via SQL commands","A virtual table that cannot be accessed via SQL commands","A base table that can be accessed via SQL commands","A base table that cannot be accessed via SQL commands"],
        answer:0,
       },
       {
        question:"The command to eliminate a table from a database is:",
        options:["REMOVE TABLE CUSTOMER;","DROP TABLE CUSTOMER;","DELETE TABLE CUSTOMER;","UPDATE TABLE CUSTOMER;"],
        answer:1,
       },
       {
        question:"ON UPDATE CASCADE ensures which of the following?",
        options:["Normalization","Data Integrity","Materialized Views","All of the above."],
        answer:1,
       },
       {
        question:"SQL data definition commands make up a(n) ________ .",
        options:["DDL","DML","HTML","XML"],
        answer:0,
       },
       {
        question:"Which of the following is valid SQL for an Index?",
        options:["CREATE INDEX ID;","CHANGE INDEX ID;","ADD INDEX ID;","REMOVE INDEX ID;"],
        answer:0,
       },
   ]
},
{
    category:"The Relational Model and Normalization ",
   quizWrap:[
       {
       question:"Every time attribute A appears, it is matched with the same value of attribute B, but not the same value of attribute C. Therefore, it is true that:",
       options:["A → B.","A → C.","A → (B,C).","(B,C) → A."],
       answer:0,
       },
       {
       question:"The different classes of relations created by the technique for preventing modification anomalies are called:",
       options:["normal forms.","referential integrity constraints.","functional dependencies.","None."],
        answer:0,
       },
       {
        question:"A relation is in this form if it is in BCNF and has no multivalued dependencies:",
        options:["second normal form.","third normal form.","fourth normal form.","domain/key normal form"],
        answer:2,
       },
       {
        question:"Row is synonymous with the term:",
        options:["record","relation","column","field"],
        answer:0,
       },
       {
        question:"The primary key is selected from the:",
        options:["composite keys.","determinants.","candidate keys.","foreign keys."],
        answer:2,
       },
       {
        question:"Which of the following is a group of one or more attributes that uniquely identifies a row?",
        options:["key","determinant","tupple","relation"],
        answer:0,
       },
       {
        question:"When the values in one or more attributes being used as a foreign key must exist in another set of one or more attributes in another table, we have created a(n)",
        options:["transitive dependency","insertion anomaly.","referential integrity constraint.","normal form."],
        answer:2,
       },
       {
        question:"A relation is considered a:",
        options:["column","one-dimensional table.","two-dimensional table.","three-dimensional table."],
        answer:2,
       },
       {
        question:"In the relational model, relationships between relations or tables are created by using:",
        options:["composite keys.","determinants.","candidate keys.","foreign keys."],
        answer:3,
       },
       {
        question:"A functional dependency is a relationship between or among:",
        options:["tables","rows","relations","attributes"],
       answer:3,
},
   ]
},
{
    category:"JDBC, Java Server Pages, and MySQL",
   quizWrap:[
       {
       question:"How many JDBC driver types does Sun define?",
       options:["one","two","three","four"],
       answer:3,
       },
       {
       question:"Where is metadata stored in MySQL?",
         options:["In the MySQL database metadata","In the MySQL database metasql","In the MySQL database mysql","None",],
        answer:2,
       },
       {
        question:"Who invented Java?",
       options:["Netscape","Microsoft","Sun","None"],
        answer:2,
       },
       {
        question:"To run a compiled Java program, the machine must have what loaded and running?",
        options:["Java virtual machine","Java compiler","Java bytecode","A Web browser"],
        answer:0,
       },
       {
        question:"What is bytecode?",
         options:["Machine-specific code","Java code","Machine-independent code","None"],
        answer:2,
       },
       {
        question:"Which JDBC driver Type(s) can be used in either applet or servlet code?",
        options:["Both Type 1 and Type 2","Both Type 1 and Type 3","Both Type 3 and Type 4","Type 4 only"],
        answer:2,
       },
       {
        question:"________ is an open source DBMS product that runs on UNIX, Linux and Windows.",
        options:["MySQL","JSP/SQL","JDBC/SQL","Sun ACCESS"],
        answer:0,
       },
       {
        question:"What MySQL property is used to create a surrogate key in MySQL?",
        options:["UNIQUE","SEQUENCE","AUTO_INCREMENT","NONE"],
        answer:2,
       },
       {
        question:"A JSP is transformed into a(n):",
          options:["Java Applet","Java Servlet","Either 1 or 2 above.","Neither 1 nor 2 above."],
        answer:1,
       },
       {
        question:"What programming language(s) or scripting language(s) does Java Server Pages (JSP) support?",
        options:["VBScript only","Jscript only","Java only","All of the above"],
        answer:2,
       },
   ]
}
            ]


function createCategory(){
    //console.log(myApp[0].category);
    for(let i=0; i<myApp.length; i++){
        const categoryList=document.createElement("div");
        categoryList.innerHTML=myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectedCategory(this)");
        categoryBox.appendChild(categoryList);
    }
}  

function selectedCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
    //console.log(categoryIndex);
    categoryText.innerHTML=myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}

function load(){
    number++;
    questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + "/" + myApp[categoryIndex].quizWrap.length;
}

function createOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++)
    {
      const option=document.createElement("div");
      option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i];
      option.classList.add("option");
      option.id=i;
      option.style.animationDelay=animationDelay + "s";
      animationDelay=animationDelay+0.2;
      option.setAttribute("onclick","check(this)");
      optionBox.appendChild(option);
    }
}

function check(ele){
    const id=ele.id;
    if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
        ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();

    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
    let hitDuplicate=0;
    //console.log(randomNumber);
    //console.log(myArray.length);
    if(myArray.length ==0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
               //console.log("duplicate random Number:"+ randomNumber);
               hitDuplicate=1;
               //console.log("duplicate found:"+randomNumber);
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    myArray.push(randomNumber);
    console.log(myArray);
    load();
}

function timeIsUp(){
    showTimeUpText();
    for(let i=0; i<optionBox.children.length; i++){
        if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[questionIndex].answer){
            optionBox.children[i].classList.add("show-correct");
        }
    }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
}

function startTimer(){
    let timeLimit=10;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
            remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered");
    }
}

function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
    answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;
    }
}

function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}

function showTimeUpText(){
    timeUpText.classList.add("show");
}

function hideTimeUpText(){
    timeUpText.classList.remove("show");
}

function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
    generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}

function resetQuiz(){
    attempt=0;
    //questionIndex=0;
    score=0;
    number=0;
    myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}

function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage = (score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
}

seeResultBtn.addEventListener("click",()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
   quizOverBox.classList.add("show");
   quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show");
    resetQuiz();
})



/*startQuizBtn.addEventListener("click",()=>{
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
})*/

window.onload=()=>{
   createCategory();
}