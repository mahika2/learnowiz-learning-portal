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
     category:"Objects and Collections",
    quizWrap:[
        {
        question:"Suppose that you would like to create an instance of a new Map that has an iteration order that is the same as the iteration order of an existing instance of a Map. Which concrete implementation of the Map interface should be used for the new instance?",
        options:["TreeMap","HashMap","LinkedHashMap","The answer depends on the implementation of the existing instance."],
        answer:2,
        },
        {
        question:"Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
        options:["java.lang.String","java.lang.Double","java.lang.StringBuffer","java.lang.Character"],
         answer:2,
        },
        {
         question:"Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?",
         options:["java.util.HashSet","java.util.LinkedHashSet","java.util.List","java.util.ArrayList"],
         answer:3,
        },
        {
         question:"You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability?",
         options:["java.util.Map","java.util.Set", "java.util.List", "java.util.Collection"],
         answer:1,
        },
        {
         question:"Which interface does java.util.Hashtable implement?",
         options:["java.util.Map","java.util.Set", "java.util.List", "java.util.Collection"],
         answer:0,
        },
        {
            question:"Which interface provides the capability to store objects using a key-value pair?",
            options:["java.util.Map","java.util.Set", "java.util.List", "java.util.Collection"],
            answer:0,
           },
           {
            question:"Which collection class allows you to associate its elements with key values, and allows you to retrieve objects in FIFO (first-in, first-out) sequence?",
            options:["java.util.HashSet","java.util.LinkedHashMap","java.util.List","java.util.ArrayList"],
            answer:1,
           },
           {
            question:"Which collection class allows you to access its elements by associating a key with an element's value, and provides synchronization?",
            options:["java.util.HashSet","java.util.LinkedHashMap","java.util.List","java.util.Hashtable"],
            answer:3,
           },
           {
            question:"Which is valid declaration of a float?",
            options:["float f = 1F;","float f = 1.0;"," float f = 1;","float f = 1.0d;"],
            answer:0,
           },
           {
            question:"What is the numerical range of char?",
            options:["0 to 32767","0 to 65535","-256 to 255","	-32768 to 32767"],
            answer:1,
           },
           
    ]
},
{
    category:"Language Fundamentals",
   quizWrap:[
       {
       question:"Which one of these lists contains only Java programming language keywords?",
       options:["class, if, void, long, Int, continue","goto, instanceof, native, finally, default, throws","try, virtual, throw, final, volatile, transient","byte, break, assert, switch, include"],
       answer:1,
       },
       {
       question:"Which will legally declare, construct, and initialize an array?",
       options:["int [] myList ={1,2,3};","int [] myList = {5, 8, 2};","int myList [] [] = {4,9,7,0};","int myList [] = {4, 3, 7};"],
        answer:3,
       },
       {
        question:"Which is a reserved word in the Java programming language?",
        options:["method","native","array","subclass"],
        answer:1,
       },
       {
        question:"Which is a valid keyword in java?",
        options:["interface","string","float","unsigned"],
        answer:0,
       },
       {
        question:"Which one is a valid declaration of a boolean?",
        options:["boolean b1 = 0;","boolean b2 = 'false'","boolean b4 = Boolean.false();","boolean b3 = false;"],
        answer:3,
       },
       {
        question:" Which is a valid declarations of a String?",
        options:["String s1 = null;","String s2 = 'null';","String s3 = (String) 'abc';","String s4 = (String) '\ufeed';"],
        answer:0,
       },
       {
        question:"What is the numerical range of a char?",
        options:["-128 to 127","0 to 35672","0 to 32767","0 to 65535"],
        answer:3,
       },
       {
        question:"Which one of the following will declare an array and initialize it with five numbers?",
        options:["Array a = new Array(5);","int [] a = {23,22,21,20,19};","int a [] = new int[5];","int [5] array;"],
        answer:1,
       },
       {
        question:"Which is the valid declarations within an interface definition?",
        options:["public double methoda();","public final double methoda();","static void methoda(double d1);","protected void methoda(double d1);"],
        answer:0,
       },
       {
        question:"Which is the  valid declarations of a float?",
        options:["float f2 = 3.14;","float f1 = -343;","float f4 = 42e7;","float f5 = 2001.0D;"],
        answer:1,
       },
   ]
},
{
    category:"Inner Classes",
   quizWrap:[
       {
       question:"Which is true about an anonymous inner class?",
       options:["It can extend exactly one class and implement exactly one interface.","It can extend exactly one class and can implement multiple interfaces","It can extend exactly one class or implement exactly one interface.","It can implement multiple interfaces regardless of whether it also extends a class."],
       answer:2,
       },
       {
       question:"Which is true about a method-local inner class?",
       options:["It must be marked final.","It can be marked abstract.","It can be marked public","It can be marked static."],
        answer:1,
       },
       {
        question:"Which statement is true about a static nested class?",
        options:["You must have a reference to an instance of the enclosing class in order to instantiate it.","It does not have access to nonstatic members of the enclosing class.","It's variables and methods must be static.","It must extend the enclosing class."],
        answer:1,
       },
       {
        question:"Which constructs an anonymous inner class instance?",
        options:["Runnable r = new Runnable() { };","Runnable r = new Runnable(public void run() { });","Runnable r = new Runnable { public void run(){}};","System.out.println(new Runnable() {public void run() { }});"],
        answer:3,
       },
       {
        question:"Which among the following best describes a nested class?",
        options:["Class inside a class","Class inside a function","Class inside a package","Class inside a structure"],
        answer:0,
       },
       {
        question:"Which of the following is true about anonymous inner classes?",
        options:["You can create ‘n’ number of objects to anonymous inner classes.","Anonymous inner classes will not have the name.","You can instantiate anonymous inner classes only once.","b and c"],
        answer:3,
       },
       {
        question:"Can interfaces have inner classes in them?",
        options:["Yes","No","Maybe","Depends"],
        answer:0,
       },
       {
        question:"Non-static nested classes have access to _____________ from enclosing class.",
        options:["Private members","Protected members","Public members","All the members"],
        answer:3,
       },
       {
        question:"The nested class can be declared ____________",
        options:["Public","Private","Protected","Public, Protected, Private or Package private"],
        answer:3,
       },
       {
        question:"Use of nested class ____________ encapsulation.",
        options:["Increases","Decreases","Doesn't affect","Slightly Decreases"],
       answer:0,
},
   ]
},
{
    category:"Threads",
   quizWrap:[
       {
       question:"What is the name of the method used to start a thread execution?",
       options:["init();","start();","run();","resume();"],
       answer:1,
       },
       {
       question:"Which is the  valid constructors for Thread?",
         options:["Thread(Runnable r, String name)","Thread(Runnable r, ThreadGroup g)","Thread(Runnable r, int priority)","Thread(int priority)",],
        answer:0,
       },
       {
        question:"Which is not the method of the Object class?",
       options:["notify();","notifyAll();","synchronized();","wait(long msecs);"],
        answer:2,
       },
       {
        question:"Which of the following line of code is suitable to start a thread ?",
        options:["Thread t = new Thread(X);","Thread t = new Thread(X); t.start();","X run = new X(); Thread t = new Thread(run); t.start();","Thread t = new Thread(); x.run();"],
        answer:2,
       },
       {
        question:"Which cannot directly cause a thread to stop executing?",
         options:["Calling the SetPriority() method on a Thread object.","Calling the wait() method on an object.","Calling notify() method on an object.","Calling read() method on an InputStream object."],
        answer:2,
       },
       {
        question:"Which of the following method is defined in class Thread?",
        options:["start()","wait()","notify()","terminate()"],
        answer:0,
       },
       {
        question:"Which of the following will directly stop the execution of a Thread?",
        options:["notify()","notifyall()","exits synchronized code","wait()"],
        answer:3,
       },
       {
        question:"Which method must be defined by a class implementing the java.lang.Runnable interface?",
        options:["void run()","public void run()","public void start()","void run(int priority)"],
        answer:1,
       },
       {
        question:"Which will contain the body of the thread?",
          options:["run()","start()","stop()","main()"],
        answer:0,
       },
       {
        question:"Which method registers a thread in a thread scheduler?",
        options:["run()","start()","stop()","main()"],
        answer:1,
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
