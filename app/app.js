let questionArray = [{
    question: "What does HTML stand for?",
    choiceA: "Hypertext Markup Language",
    choiceB: "Cake",
    choiceC: "Drink",
    choiceD: "Sleep",
    correct: "A"
},


{
    question: "What does CSS stand for?",
    choiceA: "Apple",
    choiceB: "Cascade Style Sheet",
    choiceC: "Orange",
    choiceD: "Banana",
    correct: "B"
},
{
    question: "What does JS stand for?",
    choiceA: "John Shah",
    choiceB: "Jams",
    choiceC: "JavaScript",
    choiceD: "Java solar",
    correct: "C"

},
{
    question: "What is block element?",
    choiceA: "Bob",
    choiceB: "Boy",
    choiceC: "Bag",
    choiceD: "Block-level element",
    correct: "D"
}




];


function drawCircles() {
    let circles = document.getElementById("circles");
    for (let counter = 1; counter <= questionArray.length; counter++) {
        let newCircle = document.createElement("span");
        newCircle.classList.add("dot");
        newCircle.id = "circle" + counter;
        newCircle.innerHTML = counter;
        circles.appendChild(newCircle);
    }
}


const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const next = document.getElementById("next");


drawCircles()


//First question
const lastQuestion = questionArray.length - 1;
let runningQuestion = 0;
let score = 0;
let question = questionArray[runningQuestion];
document.getElementById("question").innerHTML = question.question
choiceA.innerHTML = question.choiceA;
choiceB.innerHTML = question.choiceB;
choiceC.innerHTML = question.choiceC;
choiceD.innerHTML = question.choiceD;
document.getElementById("circle" + (runningQuestion + 1)).style.backgroundColor = "pink";
console.log(question)






function myFunction() {
    runningQuestion++ //starts at zero and goes up depending on # objects
    let question = questionArray[runningQuestion];
    document.getElementById("question").innerHTML = question.question


    choiceA.innerHTML = question.choiceA;
    choiceB.innerHTML = question.choiceB;
    choiceC.innerHTML = question.choiceC;
    choiceD.innerHTML = question.choiceD;
    choiceA.style.backgroundColor = "white";
    choiceB.style.backgroundColor = "white";
    choiceC.style.backgroundColor = "white";
    choiceD.style.backgroundColor = "white";
    next.disabled = true;
    document.getElementById("circle" + (runningQuestion + 1)).style.backgroundColor = "pink";

}
let selectedId = -1;
var choices = document.getElementById("choices");
choices.addEventListener('click', (event) => { // "event" here is the event parameter
    const clickedEvent = event.target;
    console.log(clickedEvent);


    if (clickedEvent.id == "A") {
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceB.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = clickedEvent.id;
        console.log(selectedId)
        //console.log("this is a current Id " + clickedEvent.id);

    } else if (clickedEvent.id == "B") {
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = clickedEvent.id;
    }
    else if (clickedEvent.id == "C") {
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceB.style.backgroundColor = "white";
        choiceD.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = clickedEvent.id;
    }
    else if (clickedEvent.id == "D") {
        document.getElementById(clickedEvent.id).style.backgroundColor = "yellow";
        choiceA.style.backgroundColor = "white";
        choiceB.style.backgroundColor = "white";
        choiceC.style.backgroundColor = "white";
        next.disabled = false;
        selectedId = clickedEvent.id;
    } else if (clickedEvent.id == "next") {
        checkAnswer(selectedId); //
        console.log(selectedId);
        myFunction();
    }
})


function checkAnswer(selectedAnswer) {


    console.log("I am in check answer")
    console.log(selectedAnswer);


    console.log(runningQuestion);
    if (selectedAnswer == questionArray[runningQuestion].correct) {
        score++
        answerIsCorrect();
    }
    else {
        answerIsWrong();
    }
}


function answerIsCorrect() {
    console.log(runningQuestion);
    console.log(document.getElementById("circle" + (runningQuestion + 1)));
    document.getElementById("circle" + (runningQuestion + 1)).style.backgroundColor = "green";
}
function answerIsWrong() {
    document.getElementById("circle" + (runningQuestion + 1)).style.backgroundColor = "red";
}
