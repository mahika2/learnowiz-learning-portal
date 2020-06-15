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
         category:"Basic Concept",
        quizWrap:[
            {
            question:"Identify the C compiler of UNIX:",
            options:["gcc","cc","vcc","vc++"],
            answer:1,
            description:"‘cc’ full form is C Compiler and is the compiler for UNIX. gcc is GNU C compiler for linux. Borland and vc++ (Microsoft visual c++) for windows."
            },
            {
            question:"Which header file supports the functions - malloc() and calloc()?",
            options:["stdlib.h","memory.h","math.h","stdio.h"],
             answer:0,
             description:"void *malloc(size_t size) : Allocates the requested memory and returns a pointer to it,void *calloc(size_t nitems, size_t size): Allocates the requested memory and returns a pointer to it."
            },
            {
             question:"Choose the function that is most appropriate for reading in a multi-word string?",
             options:["strnset()","scanf()","strchr()","gets()"],
             answer:3,
             description:"gets (); = Collects a string of characters terminated by a new line from the standard input stream stdin"
            },
            {
             question:"C programs are converted into machine language with the help of",
             options:["An Editor","A compiler", "An operating system", "None of these"],
             answer:1,
             description:"A compiler is a system software that converts high level language into machine level language."
            },
            {
             question:"C was primarily developed as",
             options:["System programming language","General purpose language","Data Processing language","None of the above"],
             answer:0,
            },
            {
                question:"Which of the following is not a reserved keyword for C?",
                options:["auto","case","main","register"],
                answer:2,
               },
               {
                question:"Which one of the following is not a valid identifier?",
                options:["_char","1char","char_char","char1"],
                answer:1,
                description:"The first character must be a letter or special symbol underscore( _ )."
               },
               {
                question:"Which one of the following is not a correct variable type?",
                options:["float","real","double","char"],
                answer:1,
               },
               {
                question:"Which of the following declaration is not supported by C?",
                options:["String str;","char *str;"," float str = 3e2;","Both String str; & float str = 3e2;"],
                answer:0,
                description:"It is legal in Java, but not in C."
               },
               {
                question:"C preprocessor",
                options:["Takes care of conditional compilation","Take cares of macros","Acts before compilation","All of these"],
                answer:3,
               },
               
        ]
    },
    {
        category:"Arrays",
       quizWrap:[
           {
           question:"Comment on the following pointer declaration.",
           options:["ptr is a pointer to integer, p is not","ptr and p, both are pointers to integer","ptr is a pointer to integer, p may or may not be","ptr and p both are not pointers to integer"],
           answer:0,
           },
           {
           question:"Which of the following is the correct syntax to declare a 3 dimensional array using pointers?",
           options:["char *a[][];","char **a[];","char ***a;","all of the mentioned"],
            answer:0,
           },
           {
            question:"An array of strings can be initialized by _________",
            options:["char *a[] = {“Hello”, “World”};","char *a[] = {“Hello”, “Worlds”};","char *b = Hello;char *c = World; char *a[] = {b, c};","all of the mentioned"],
            answer:3,
           },
           {
            question:"How to call a function without using the function name to send parameters?",
            options:["typedefs","Function pointer","Both typedefs and Function pointer","None of the mentioned"],
            answer:1,
           },
           {
            question:"Which of the following is a correct syntax to pass a Function Pointer as an argument?",
            options:["void pass(int (*fptr)(int, float, char)){}","void pass(*fptr(int, float, char)){}","void pass(int (*fptr)){}","void pass(*fptr){}"],
            answer:0,
           },
           {
            question:"Which of the following is not possible in C?",
            options:["Array of function pointer","Returning a function pointer","Comparison of function pointer","None of the mentioned"],
            answer:3,
           },
           {
            question:"Which of the following syntax is correct for command-line arguments?",
            options:["int main(int var, char *varg[])","int main(char *argv[], int argc)","int main(){ int argv, char *argc[];}","None of these"],
            answer:0,
           },
           {
            question:"In linux, argv[0] by command-line argument can be occupied by _________",
            options:["./a.out"," ./test","./fun.out.out","all of the mentioned"],
            answer:3,
            description:"All the options mentioned (./a.out, ./test, ./fun.out.out) are simply the command without any argument. A command is always stored as argument vector zero i.e., argv[0] always contain the command where as argv[1], argv[2], etc. contains the arguments to the commands, if any."
           },
           {
            question:"What is argv[0] in command line arguments?",
            options:["The name by which the program was invoked","The name of the files which are passed to the program","Count of the arguments in argv[] vector","None of the mentioned"],
            answer:0,
           },
           {
            question:"What does this declaration say:- int (*(*y)())[2];",
            options:["y is pointer to the function which returns pointer to integer array","y is pointer to the function which returns array of pointers","y is function which returns function pointer which in turn returns pointer to integer array","y is function which returns array of integers"],
            answer:0,
           },
       ]
    },
    {
        category:"Strings",
       quizWrap:[
           {
           question:"Which among the following is Copying function?",
           options:["memcpy()","strcopy()","memcopy()","Mstrxcpy()"],
           answer:0,
           description:"The memcpy() function is used to copy n characters from the object.The code is void *memcpy(void *s1,const void *s2, size_t n)."
           },
           {
           question:"Which function will you choose to join two words?",
           options:["strcpy()","strcat()","strncon()","memcon()"],
            answer:1,
            description:"The strcat() function is used for concatenating two strings, appends a copy of the string. char *strcat(char *s1,const char *s2);"
           },
           {
            question:"The ______ function appends not more than n characters.",
            options:[ "strcat()","strcon()","strncat()","memcat()"],
            answer:2,
            description:"The strncat() function appends not more than n characters from the array(s2) to the end of the string(s1).char *strncat(char *s1, const char *s2,size_t n);"
           },
           {
            question:"What will strcmp() function do?",
            options:["compares the first n characters of the object","compares the string","undefined function","copies the string"],
            answer:1,
            description:"The strcmp() function compares the string s1 to the string s2.int strcmp(const char *s1,const char *s2);"
           },
           {
            question:" Which of the following is the variable type defined in header string. h?",
            options:["sizet","size","size_t", "size-t"],
            answer:2,
            description:"This is the unsigned integral type and is the result of the sizeof keyword."
           },
           {
            question:"NULL is the macro defined in the header string. h.",
            options:["True","False","Maybe","None of the above"],
            answer:0,
            description:"NULL macro is the value of a null pointer constant."
           },
           {
            question:"Which code from the given option return pointer to last occurrence of c in ch or NULL if not present?",
            options:["char *strchr(ch, c)","char *strrchr(ch, c)","char *strncat(ch, c)","char *strcat(ch, c)"],
            answer:1,
            description:"The function char *strrchr(ch, c) returns pointer to last occurrence of c in ch or NULL if not present."
           },
           {
            question:"The mem functions are meant for _______",
            options:["return length of prefix of s consisting of characters not in c","return length of prefix of s consisting of characters present in c","return length of prefix of c consisting of characters not in s","return length of prefix of c consisting of characters present in s"],
            answer:1,
            description:"The mem functions is used for manipulating objects as character arrays."
           },
           {
            question:"What does the following function returns void *memmove(void *s1,const void s2, size_t n);?",
            options:["returns the value of s1","returns the value of s2","doesn’t return any value","returns the value of s1 and s2"],
            answer:0,
            description:"The memmove() function copies n characters from the object pointed to by s2 into the object pointed to by s1.The memmove() function returns the value of s1."
           },
           {
            question:"What is the prototype of strcoll() function?",
            options:["int strcoll(const char *s1,const char *s2)","int strcoll(const char *s1)","int strcoll(const *s1,const *s2)","int strcoll(const *s1)"],
            answer:0,
            description:"The prototype of strcoll() function is int strcoll(const char *s1,const char *s2)."
           },
       ]
    },
    {
        category:"Pointers",
       quizWrap:[
           {
           question:"Which is an indirection operator among the following?",
           options:["&", "*","->","."],
           answer:1,
           },
           {
           question:"Which of the following does not initialize ptr to null (assuming variable declaration of a as int a=0;)?",
           options:["int *ptr = &a;","int *ptr = &a – &a;","int *ptr = a – a;","All of the mentioned"],
            answer:0,
           },
           {
            question:"Which of the following arithmetic operation can be applied to pointers a and b?(Assuming initialization as int *a = (int *)2; int *b = (int *)3;)",
            options:["a + b","a – b","a * b","a / b"],
            answer:1,
           },
           {
            question:"What is the size of *ptr in a 32-bit machine (Assuming initialization as int *ptr = 10;)?",
            options:["1","2","4","8"],
            answer:2,
           },
           {
            question:"Which of following logical operation can be applied to pointers(Assuming initialization int *a = 2; int *b = 3;)",
            options:["a | b","a ^ b","a & b","None of the mentioned"],
            answer:3,
           },
           {
            question:"How many number of pointer (*) does C have against a pointer variable declaration?",
            options:["7","127","255","No Limits"],
            answer:3,
           },
           {
            question:"Which of the following is the correct syntax to declare a 3 dimensional array using pointers?",
            options:["char *a[][];","char **a[];","char ***a;","all of the mentioned"],
            answer:0,
           },
           {
            question:" Which of the following declaration are illegal?",
            options:["int a[][] = {{1, 2, 3}, {2, 3, 4, 5}};","int *a[] = {{1, 2, 3}, {2, 3, 4, 5}};","int a[4][4] = {{1, 2, 3}, {2, 3, 4, 5}};","none of the mentioned"],
            answer:0,
           },
           {
            question:"How to call a function without using the function name to send parameters?",
            options:["typedefs","Function pointer","Both typedefs and Function pointer","None of the mentioned"],
            answer:1,
           },
           {
            question:"An array of similar data types which themselves are a collection of dissimilar data type are ___________",
            options:["Linked Lists","Trees,Array of Structure","All of the mentioned"],
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
    var result;
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage = (score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
    document.getElementById("correc").value = score;
    document.getElementById("total").value = myApp[categoryIndex].quizWrap.length;
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