
let questionArray = [{
    question:"1. What does HTML stand for?",
    choice1:"Hyper Text Markup Language",
    choice2:"World Wide Web",
    choice3:"High Text Markup Language",
    choice4:"Hyper Text Makeup Language",
    //correct: "choice1"
},
{
    question:"2. What does CSS stand for?",
    choice1:"Case Style Sheets",
    choice2:"Case Sensitive Sheet",
    choice3:"Cascading Style Sheets",
    choice4:"Class Style",
    //correct: "choice3"
},
{
    question:"3. What does JS stand for?",
    choice1:"Jake Scope",
    choice2:"Java Script",
    choice3:"Java",
    choice4:"Java Scripting"
    //correct: "choice2"
},
{
    question:"4. What is block element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},

{
    question:"5. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"6. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"7. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"8. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"9. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"10. What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
}


];

function drawCircles (){
    let circles = document.getElementById("circles");
    for (let counter = 1; counter <= questionArray.length; counter++){
        let newCircle = document.createElement("span");
        newCircle.classList.add("dot");
        newCircle.innerHTML = counter;
        circles.appendChild(newCircle); 
    }
 }
 drawCircles ()

 
 let counter = 0;
 let question = questionArray[counter];
 document.getElementById("question").innerHTML = question.question
 choice1.innerHTML = question.choice1;
 choice2.innerHTML = question.choice2;
 choice3.innerHTML = question.choice3;
 choice4.innerHTML = question.choice4;
 console.log(question);

 function nextQuestion() {
    counter++;
    question = questionArray[counter].question;
    document.getElementById("question").innerHTML = question
}


 





    

function myFunction(){
    runningQuestion ++
    let question = questionArray[runningQuestion];
    document.getElementById("question").innerHTML = question.question

    choiceA.innerHTML = question.choiceA;
    choiceB.innerHTML = question.choiceB;
    choiceC.innerHTML = question.choiceC;
    choiceD.innerHTML = question.choiceD;

    console.log (question)
}
let selectedId = -1;
var choices = document.getElementById("choices");
choices.addEventListener('click', (event) => { // "event" here is the event parameter
    const clickedEvent = event.target;
    console.log(clickedEvent);
  
    if (clickedEvent.id == "A"){
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceB.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = +clickedEvent.id;
        //console.log("this is a current Id " + clickedEvent.id);
       
    }else if (clickedEvent.id == "B"){
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = +clickedEvent.id;
    } 
    else if (clickedEvent.id == "C"){
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceB.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = +clickedEvent.id;
    } 
    else if (clickedEvent.id == "D"){
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceB.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = +clickedEvent.id;
    } else if (clickedEvent.id == "next"){
        //checkAnswer(clickedEvent.id);
        console.log(selectedId);
    }

    
})

function checkAnswer(answer){
    if(answer == question[runningQuestion].correct){
        score++
        answerIsCorrect();
    }
    else{
        answerIsWrong();               
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).circles.style.backgroundColor = "#0f0";
}
function answerIsWrong(){
    document.getElementById(runningQuestion).circles.style.backgroundColor = "#f00";
}