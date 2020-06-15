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
     category:"Software Engineering Ethics",
    quizWrap:[
        {
        question:"Choose the correct option in terms of Issues related to professional responsibility",
        options:["Confidentiality","Intellectual property rights","Both Confidentiality & Intellectual property rights","Managing Client Relationships"],
        answer:2,
        },
        {
        question:"Software engineers should not use their technical skills to misuse other people’s computers.”Here the term misuse refers to:",
        options:["Unauthorized access to computer material","Unauthorized modification of computer material","Dissemination of viruses or other malware","All of the mentioned"],
         answer:3,
        },
        {
         question:"Explain what is meant by PRODUCT with reference to one of the eight principles as per the ACM/IEEE Code of Ethics ?",
         options:["The product should be easy to use","Software engineers shall ensure that their products and related modifications meet the highest professional standards possible","Software engineers shall ensure that their products and related modifications satisfy the client","It means that the product designed /created should be easily available"],
         answer:1,
        },
        {
         question:"Identify an ethical dilemma from the situations mentioned below:",
         options:["Your employer releases a safety-critical system without finishing the testing of the system","Refusing to undertake a project","Agreement in principle with the policies of senior management","All of the mentioned"],
         answer:0,
        },
        {
         question:"Identify the correct statement: “Software engineers shall",
         options:["act in a manner that is in the best interests of his expertise and favour.”","act consistently with the public interest.”","ensure that their products only meet the SRS.”","all of the mentioned"],
         answer:1,
        },
        {
            question:"Select the incorrect statement: “Software engineers should",
            options:["not knowingly accept work that is outside your competence.”","not use your technical skills to misuse other people’s computers.”","be dependent on their colleagues.”","maintain integrity and independence in their professional judgment.”"],
            answer:2,
           },
           {
            question:"Efficiency in a software product does not include ________",
            options:[" responsiveness","licensing","memory utilization","processing time"],
            answer:1,
           },
           {
            question:"As per an IBM report, “31%of the project get cancelled before they are completed, 53% overrun their cost estimates by an average of 189% and for every 100 projects, there are 94 restarts”.What is the reason for these statistics ?",
            options:["Lack of adequate training in software engineering","Lack of software ethics and understanding","Management issues in the company","All of the mentioned"],
            answer:1,
           },
           {
            question:"The reason for software bugs and failures is due to",
            options:["Software companies","Software Developers","Both Software companies and Developers","All of the mentioned"],
            answer:2,
           },
           {
            question:"Company has latest computers and state-of the- art software tools, so we shouldn’t worry about the quality of the product.",
            options:["True","False"],
            answer:1,
           },
           
    ]
},
{
    category:"Process and Product",
   quizWrap:[
       {
       question:"If a software production gets behind schedule, one can add more programmers and catch up.",
       options:["True","False"],
       answer:1,
       },
       {
       question:"Choose an internal software quality from given below:",
       options:["scalability","usability","reusability","reliability"],
        answer:2,
       },
       {
        question:"RUP stands for____________ created by a division of ____________",
        options:["Rational Unified Program, IBM","Rational Unified Process, Infosys","Rational Unified Process, Microsoft","Rational Unified Process, IBM"],
        answer:3,
       },
       {
        question:"The RUP is normally described from three perspectives-dynamic, static & practice.What does static perspective do ?",
        options:["It shows the process activities that are enacted","It suggests good practices to be used during the process","It shows the phases of the model over time","All of the mentioned"],
        answer:0,
       },
       {
        question:"The only deliverable work product for a successful project is the working program.",
        options:[" True","False"],
        answer:1,
       },
       {
        question:"Which phase of the RUP is used to establish a business case for the system ?",
        options:["Transition","Elaboration","Construction","Inception"],
        answer:3,
       },
       {
        question:"Which one of the following is not a fundamental activity for software processes in software engineering ?",
        options:["Software Verification","Software Validation","Software design and implementation","Software evolution"],
        answer:0,
       },
       {
        question:"A general statement of objectives is the major cause of failed software efforts.",
        options:["True","False"],
        answer:0,
       },
       {
        question:"The longer a fault exists in software",
        options:["the more tedious its removal becomes","the more costly it is to detect and correct","the less likely it is to be properly corrected","All of the mentioned"],
        answer:3,
       },
       {
        question:" Component-based Software Engineering allows faster delivery.",
        options:["True","False"],
        answer:0,
       },
   ]
},
{
    category:"Agile Software Development",
   quizWrap:[
       {
       question:"Select the option that suits the Manifesto for Agile Software Development",
       options:["Individuals and interactions","Working software","Customer collaboration","All of the mentioned"],
       answer:3,
       },
       {
       question:"Agile Software Development is based on",
       options:[" Incremental Development","Iterative Development","Linear Development","Both Incremental and Iterative Development"],
        answer:3,
       },
       {
        question:"Which on of the following is not an agile method?",
        options:["XP","4GT","AUP","All of the mentioned"],
        answer:1,
       },
       {
        question:" Agility is defined as the ability of a project team to respond rapidly to a change.",
        options:["True","False"],
        answer:1,
       },
       {
        question:"How is plan driven development different from agile development ?",
        options:["Outputs are decided through a process of negotiation during the software development process","Specification, design, implementation and testing are interleaved","Iteration occurs within activities","All of the mentioned"],
        answer:2,
       },
       {
        question:"How many phases are there in Scrum ?",
        options:["Two","Three","Four","Scrum is an agile method which means it does not have phases"],
        answer:1,
       },
       {
        question:"Agile methods seem to work best when team members have a relatively high skill level.",
        options:["True","False"],
        answer:0,
       },
       {
        question:" Which of the following does not apply to agility to a software process?",
        options:["Uses incremental product delivery strategy","Only essential work products are produced","Eliminate the use of project planning and testing","All of the mentioned"],
        answer:2,
       },
       {
        question:" Which three framework activities are present in Adaptive Software Development(ASD) ?",
        options:["analysis, design, coding","requirements gathering, adaptive cycle planning, iterative development","speculation, collaboration, learning","all of the mentioned"],
        answer:2,
       },
       {
        question:"In agile development it is more important to build software that meets the customers’ needs today than worry about features that might be needed in the future.",
        options:["True","False"],
        answer:0,
       },
   ]
},
{
    category:"Requirement Analysis",
   quizWrap:[
       {
       question:"Which of the following is not a diagram studied in Requirement Analysis ?",
       options:["Use Cases","Entity Relationship Diagram","State Transition Diagram","Activity Diagram"],
       answer:3,
       },
       {
       question:"How many feasibility studies is conducted in Requirement Analysis ?",
       options:["Two","Three","Four","None of the mentioned"],
        answer:1,
       },
       {
        question:"How many phases are there in Requirement Analysis ?",
        options:["Three","Four","Five","Six"],
        answer:2,
       },
       {
        question:"Traceability is not considered in Requirement Analysis.",
        options:["True","False"],
        answer:1,
       },
       {
        question:"Requirements analysis is critical to the success of a development project.",
        options:["True","False","Depends upon the size of project","None of the mentioned"],
        answer:0,
       },
       {
        question:"_________ and _________ are the two issues of Requirement Analysis.",
        options:["Performance, Design","Stakeholder, Developer","Functional, Non-Functional","None of the mentioned"],
        answer:1,
       },
       {
        question:"The requirements that result from requirements analysis are typically expressed from one of three perspectives or views.WhaT is that perspective or view ?",
        options:["Developer"," User"," Non-Functional","Physical"],
        answer:3,
       },
       {
        question:"Requirements Analysis is an Iterative Process.",
        options:["True","False"],
        answer:0,
       },
       {
        question:"Coad and Yourdon suggested _______ selection characteristics that should be used as an analyst considers each potential object for inclusion in the requirement analysis model.",
        options:["Three","Four","Five","Six"],
        answer:3,
       },
       {
        question:"Requirements should specify ‘what’ but not ‘how’.",
        options:["True","False"],
        answer:0,
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