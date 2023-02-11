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
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
},
{
    question:"3. What does JS stand for?",
    choice1:"Answer1",
    choice2:"Answer2",
    choice3:"Answer3",
    choice4:"Answer4"
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

 //const lastQuestion = question.length - 1;
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


 





