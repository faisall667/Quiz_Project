let questionArray = [{
    question:"What does HTML stand for?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What does CSS stand for?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What does JS stand for?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What is block element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"What inline element?",
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
 let question = questionArray[counter].question;
 document.getElementById("question").innerHTML = question
 console.log(question);

 function nextQuestion() {
    counter++;
    question = questionArray[counter].question;
    document.getElementById("question").innerHTML = question
}



