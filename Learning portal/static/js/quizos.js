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
     category:"Introduction to Operating System",
    quizWrap:[
        {
        question:"What is operating system?",
        options:["collection of programs that manages hardware resources","system service provider to the application programs","link to interface the hardware and application programs","all of the mentioned"],
        answer:3,
        },
        {
        question:"To access the services of operating system, the interface is provided by the ___________",
        options:["System calls","API","Library","Assembly instructions"],
         answer:0,
        },
        {
         question:"Which one of the following is not true?",
         options:["kernel is the program that constitutes the central core of the operating system","kernel is the first part of operating system to load into memory during booting","kernel is made of various modules which can not be loaded in running operating system","kernel remains in the memory during the entire computer session"],
         answer:2,
        },
        {
         question:"What is the main function of the command interpreter?",
         options:["to get and execute the next user-specified command","to provide the interface between the API and application program","to handle the files in operating system","none of the mentioned"],
         answer:0,
        },
        {
         question:"By operating system, the resource management can be done via __________",
         options:["a) time division multiplexing","space division multiplexing","time and space division multiplexing","none of the mentioned"],
         answer:2,
        },
        {
            question:"If a process fails, most operating system write the error information to a ______",
            options:["og file","another running process","new file","none of the mentioned"],
            answer:0,
           },
           {
            question:"Which facility dynamically adds probes to a running system, both in user processes and in the kernel?",
            options:["DTrace","DLocate","DMap","DAdd"],
            answer:0,
           },
           {
            question:"Which one of the following is not a real time operating system?",
            options:["VxWorks","Windows CE","RTLinux","Palm OS"],
            answer:3,
           },
           {
            question:"The OS X has ____________.",
            options:["monolithic kernel","hybrid kernel","microkernel","monolithic kernel with modules"],
            answer:1,
           },
           {
            question:"Which one of the following error will be handle by the operating system?.",
            options:["power failure","lack of paper in printer","connection failure in the network","all of the mentioned"],
            answer:3,
           },
           
    ]
},
{
    category:"Processes",
   quizWrap:[
       {
       question:"The systems which allow only one process execution at a time, are called __________",
       options:["uniprogramming systems","uniprocessing systems","unitasking systems","none of the mentioned"],
       answer:1,
       },
       {
       question:"In operating system, each process has its own __________",
       options:["address space and global variables","open files","pending alarms, signals and signal handlers","all of the mentioned"],
        answer:0,
       },
       {
        question:"In Unix, Which system call creates the new process?",
        options:["fork","create","new","none of the mentioned."],
        answer:1,
       },
       {
        question:"A process can be terminated due to __________",
        options:["normal exitfatal error","killed by another process","all of the mentioned"],
        answer:3,
       },
       {
        question:"What is the ready state of a process?",
        options:[" when process is scheduled to run after some execution","when process is unable to run until some task has been completed","when process is using the CPU","none of the mentioned"],
        answer:0,
       },
       {
        question:" A view is which of the following?",
        options:["A virtual table that can be accessed via SQL commands","A virtual table that cannot be accessed via SQL commands","A base table that can be accessed via SQL commands","A base table that cannot be accessed via SQL commands"],
        answer:0,
       },
       {
        question:"What is interprocess communication?",
        options:["communication within the process","communication between two process","communication between two threads of same process","none of the mentioned"],
        answer:1,
       },
       {
        question:"A set of processes is deadlock if __________",
        options:["each process is blocked and will remain so forever","each process is terminated","all processes are trying to kill each other","none of the mentioned"],
        answer:0,
       },
       {
        question:"Which system call returns the process identifier of a terminated child?",
        options:["wait","exit","fork","get"],
        answer:0,
       },
       {
        question:"A process stack does not contain __________",
        options:["Function parameters","Local variables","Return addresses","PID of child process"],
        answer:3,
       },
   ]
},
{
    category:"CPU Scheduling",
   quizWrap:[
       {
       question:"Which module gives control of the CPU to the process selected by the short-term scheduler?",
       options:["dispatcher","interrupt"," scheduler","none of the mentioned"],
       answer:0,
       },
       {
       question:"The processes that are residing in main memory and are ready and waiting to execute are kept on a list called _____________.",
       options:["job queue","ready queue","execution queue","process queue"],
        answer:1,
       },
       {
        question:"The interval from the time of submission of a process to the time of completion is termed as ____________",
        options:["waiting time","turnaround time","response time","throughput"],
        answer:1,
       },
       {
        question:"Which scheduling algorithm allocates the CPU first to the process that requests the CPU first?",
        options:["rst-come, first-served scheduling","shortest job scheduling","priority scheduling","none of the mentioned"],
        answer:0,
       },
       {
        question:"In priority scheduling algorithm ____________",
        options:["CPU is allocated to the process with highest priority","CPU is allocated to the process with lowest priority","Equal priority processes can not be scheduled","None of the mentioned"],
        answer:0,
       },
       {
        question:"in priority scheduling algorithm, when a process arrives at the ready queue, its priority is compared with the priority of ____________",
        options:["shortest job scheduling algorithm","round robin scheduling algorithm","priority scheduling algorithm","multilevel queue scheduling algorithm"],
        answer:1,
       },
       {
        question:"Process are classified into different groups in ____________",
        options:["shortest job scheduling algorithm","round robin scheduling algorithm","priority scheduling algorithm","multilevel queue scheduling algorithm"],
        answer:3
       },
       {
        question:"In multilevel feedback scheduling algorithm ____________",
        options:["a process can move to a different classified ready queue","classification of ready queue is permanent","processes are not classified into groups","none of the mentioned"],
        answer:0,
       },
       {
        question:"Which one of the following can not be scheduled by the kernel?",
        options:["kernel level thread","user level thread"," process"," none of the mentioned."],
        answer:1,
       },
       {
        question:"What are the two steps of a process execution?",
        options:["I/O & OS Burst","CPU & I/O Burst","Memory & I/O Burst","OS & Memory Burst"],
       answer:1,
},
   ]
},
{
    category:"Deadlock",
   quizWrap:[
       {
       question:" What is a reusable resource?",
       options:[" that can be used by one process at a time and is not depleted by that use","that can be used by more than one process at a time","that can be shared between various threads","none of the mentioned"],
       answer:0,
       },
       {
       question:"Which of the following condition is required for a deadlock to be possible?",
         options:["mutual exclusion","a process may hold allocated resources while awaiting assignment of other resources","no resource can be forcibly removed from a process holding it","all of the mentioned"],
        answer:3,
       },
       {
        question:"A system is in the safe state if ____________",
       options:["the system can allocate resources to each process in some order and still avoid a deadlock","there exist a safe sequence","all of the mentioned","none of the mentioned"],
        answer:0,
       },
       {
        question:"the circular wait condition can be prevented by ____________",
        options:["defining a linear ordering of resource types","using thread","using pipes","all of the mentioned"],
        answer:0,
       },
       {
        question:" Which one of the following is the deadlock avoidance algorithm?",
         options:["banker’s algorithm","round-robin algorithm","elevator algorithm","karn’s algorithm"],
        answer:0,
       },
       {
        question:"What is the drawback of banker’s algorithm?",
        options:["in advance processes rarely know how much resource they will need","the number of processes changes as time progresses","resource once available can disappear","all of the mentioned"],
        answer:3,
       },
       {
        question:"For an effective operating system, when to check for deadlock?",
        options:["every time a resource request is made","at fixed time intervals","every time a resource request is made at fixed time intervals","none of the mentioned"],
        answer:2,
       },
       {
        question:"A problem encountered in multitasking when a process is perpetually denied necessary resources is called ____________",
        options:["deadlock","starvation","inversion","aging"],
        answer:1,
       },
       {
        question:"Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
          options:["resource allocation graph","starvation graph","inversion graph","none of the mentioned"],
        answer:0,
       },
       {
        question:"To avoid deadlock ____________",
        options:["there must be a fixed number of resources to allocate","resource allocation must be done only once","all deadlocked processes must be aborted","inversion technique can be used"],
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