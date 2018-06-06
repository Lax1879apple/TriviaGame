
var arrObject = [
    {
        question:"How many millimeters make a kilometer?",
        option1:"10,000 mm",
        option2:"1000 mm",
        option3:"100,000 mm",
        option4:"10,00,000 mm",
        correctAnswer:"10,00,000 mm"
    },
    {
        question:"An API stands for?",
        option1:"Application Programming interference",
        option2:"Assurance programming interchange",
        option3:"Application Programming Interface",
        option4:"Application program interchange",
        correctAnswer:"Application Programming Interface"
    },
    {
        question:"HTML is the _________ of webpage?",
        option1:"framework",
        option2:"body",
        option3:"header",
        option4:"content",
        correctAnswer:"framework"
    },
    {
        question:"The Star-Spangled Banner, our national anthem was written by?",
        option1:"John Stafford Smith",
        option2:"Marvin Gaye",
        option3:"Francis Scott Key",
        option4:"Francis Scott",
        correctAnswer:"Francis Scott Key"
    },
    {
        question:"The world's tallest mountain is in _______ country?",
        option1:"India",
        option2:"Chaina",
        option3:"Bangladesh",
        option4:"Nepal",
        correctAnswer:"Nepal"
    },
    {
        question:"Lord Buddha was born in?",
        option1:"Pakistan",
        option2:"India",
        option3:"Nepal",
        option4:"Chaina",
        correctAnswer:"Nepal"
    },
    {
        question:"In one day there are ________ seconds?",
        option1:"86,400",
        option2:"84,600",
        option3:"86,600",
        option4:"84,400",
        correctAnswer:"86,400"
    },
    {
        question:"CSS is styling sheet and it stands for?",
        option1:"cover style sheet",
        option2:"cashleading style sheet",
        option3:"casting style sheet",
        option4:"Cascading style sheet",
        correctAnswer:"Cascading style sheet"
    },
    {
        question:"Botanical (scientific) name of tomato is known as?",
        option1:"Allium cepa",
        option2:"Solanum tuberosum",
        option3:"Solanum lycopersicum",
        option4:"Solanum melongena",
        correctAnswer:"Solanum lycopersicum"
    },
    {
        question:"leap year occures every after ______ years?",
        option1:"2",
        option2:"6",
        option3:"4",
        option4:"3",
        correctAnswer:"4"
    }
];

var questionNumber = 0;
var maxQuestions = 10;
var correctAns = 0;
var wrongAns = 0;

$(document).ready(function (){    
    $("#QtnOpt").hide();
    $("#scoreValue").hide();
   
    $( "#StrBtn" ).click(function() {
        $( "#QtnOpt" ).show();
        $(".introdiv").hide();
        $("#start").hide();
        displayQuestion(questionNumber); 
      }); 

    $("#option1Value").click(function(){
        var selectedOption1 = document.getElementById("option1Value").text;
        if(selectedOption1 == arrObject[questionNumber].correctAnswer){
            alert("answer is correct");
            correctAns = correctAns + 1;
        }else{
            alert("answer is wrong");
            wrongAns = wrongAns + 1;
        }
        clearInterval(interval);
        questionNumber = questionNumber + 1;
        setTimeout(function() {
            displayQuestion(questionNumber);
        }, 500);          
    });

    $("#option2Value").click(function(){
        var selectedOption2 = document.getElementById("option2Value").text;
        if(selectedOption2 == arrObject[questionNumber].correctAnswer){
            alert("answer is correct");
            correctAns = correctAns + 1;
        }else{
            alert("answer is wrong");
            wrongAns = wrongAns + 1;
        }
        clearInterval(interval);
        questionNumber = questionNumber + 1;
        setTimeout(function() {
            displayQuestion(questionNumber);
        }, 500);    
    });

    $("#option3Value").click(function(){
        var selectedOption3 = document.getElementById("option3Value").text;
        if(selectedOption3 == arrObject[questionNumber].correctAnswer){
            alert("answer is correct");
            correctAns = correctAns + 1;
        }else{
            alert("answer is wrong");
            wrongAns = wrongAns + 1;
        }
        clearInterval(interval);
        questionNumber = questionNumber + 1;
        setTimeout(function() {
            displayQuestion(questionNumber);
        }, 500);   
    });

    $("#option4Value").click(function(){
        var selectedOption4 = document.getElementById("option4Value").text;
        if(selectedOption4 == arrObject[questionNumber].correctAnswer){
            alert("answer is correct");
            correctAns = correctAns + 1;
        }else{
            alert("answer is wrong");
            wrongAns = wrongAns + 1;
        }
        clearInterval(interval);
        questionNumber = questionNumber + 1;
        setTimeout(function() {
            displayQuestion(questionNumber);
        }, 500);  
    });

    $("#gameReset").click(function(){
     questionNumber = 0;
     maxQuestions = 10;
     correctAns = 0;
     wrongAns = 0;

    $("#QtnOpt").hide();
    $("#scoreValue").hide();
    $(".introdiv").show();
    $("#start").show();
    });
});

var interval;
function displayQuestion(questionNumber){
    if(questionNumber < maxQuestions){
        
        $("#questionNumber").text(questionNumber+ 1 + ": ");
        $("#questionValue").text(arrObject[questionNumber].question);
        $("#option1Value").text(arrObject[questionNumber].option1);
        $("#option2Value").text(arrObject[questionNumber].option2);
        $("#option3Value").text(arrObject[questionNumber].option3);
        $("#option4Value").text(arrObject[questionNumber].option4);    
    
        var seconds_left = 20;
        document.getElementById('timer_div').innerHTML = seconds_left;
         interval = setInterval(function() {
            seconds_left = seconds_left - 1;
            document.getElementById('timer_div').innerHTML = seconds_left;
            
            if (seconds_left <= 0){            
                document.getElementById('timer_div').innerHTML = 'Timeout!!';
                questionNumber = questionNumber + 1;
                clearInterval(interval);
                displayQuestion(questionNumber);            
            }
        }, 1000);
    }else{
        clearInterval(interval);
        $("#QtnOpt").hide();
        $("#scoreValue").show();
    
        //hide h4 and ul
        //show score code to display score
        $("#correctguess").text(correctAns);
        $("#WrongGuess").text(wrongAns);
    }
}
