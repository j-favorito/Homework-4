//pulls html elements
var cardBody=document.querySelector(".card");
var timeDisplay=document.querySelector("#timer");
var score = document.querySelector("#score")
//question and answer arrays
var questionArr = ["What statement do you use to create a loop?",".querySelector can be used to call on what type of element?","True/false data types are defined as what?","Which one of these is not a pop-up type?","Math. what rounds a number down to a whole number?"];
var answerArr1 = ["if","else","for","else if"];
var answerArr2 = ["class","id","neither","both"];
var answerArr3 = ["string","boolean","array","index"];
var answerArr4 = ["prompt","confirm","notify","alert"];
var answerArr5 = ["floor","round","return","down"]
//counts your correct answers
var count = 0;
//score placeholder
score.textContent="Score: 0";
//array for saved scores
var savedScores=[];
//sets time length
var totalTime=30;
//sets the time you have lef
var timeLeft=30;
//for setInterval() function
var interval;
//var that subtracts time lost
var timeLost=0;




//starting function
function startPage(event){
    var introElement=document.createElement("h1")
    introElement.textContent="Press start to begin your quiz!";
    cardBody.append(introElement);
    var startButton=document.createElement("button");
    startButton.setAttribute("id","start");
    startButton.textContent="Start";
    cardBody.append(startButton);
    var start=document.querySelector("#start")
    var h1Element=document.createElement("h1");
    start.addEventListener("click", function(){
        cardBody.innerHTML="";
        //launches countdown and first question functions
        countdown();
        questionGenerator1();
    })
}
//each questionGenerator follows the same steps
function questionGenerator1(event){
    //creates question
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[0];
    cardBody.appendChild(questionElement);
    //creates buttons
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr1[i];
        cardBody.appendChild(answerElement);
    }
    //identifies correct answer
    var correctAnswer=document.querySelector(".ansSelect2");
    var wrongAnswer1=document.querySelector(".ansSelect0");
    var wrongAnswer2=document.querySelector(".ansSelect1");
    var wrongAnswer3=document.querySelector(".ansSelect3");
//adds score and launches next question if correct
    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        questionGenerator2();
    });
//adds time to time loss and launches next question if wrong
    wrongAnswer1.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator2();
    });
    wrongAnswer2.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator2();
    });
    wrongAnswer3.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator2();
    });
}

function questionGenerator2(event){
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[1];
    cardBody.appendChild(questionElement);
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr2[i];
        cardBody.appendChild(answerElement);
    }
    var correctAnswer=document.querySelector(".ansSelect3");
    var wrongAnswer1=document.querySelector(".ansSelect0");
    var wrongAnswer2=document.querySelector(".ansSelect1");
    var wrongAnswer3=document.querySelector(".ansSelect2");

    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        questionGenerator3();
    });
    wrongAnswer1.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator3();
    });
    wrongAnswer2.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator3();
    });
    wrongAnswer3.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator3();
    });
}

function questionGenerator3(event){
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[2];
    cardBody.appendChild(questionElement);
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr3[i];
        cardBody.appendChild(answerElement);
    }
    var correctAnswer=document.querySelector(".ansSelect1");
    var wrongAnswer1=document.querySelector(".ansSelect0");
    var wrongAnswer2=document.querySelector(".ansSelect3");
    var wrongAnswer3=document.querySelector(".ansSelect2");

    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        questionGenerator4();
    });
    wrongAnswer1.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator4();
    });
    wrongAnswer2.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator4();
    });
    wrongAnswer3.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator4();
    });
}

function questionGenerator4(event){
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[3];
    cardBody.appendChild(questionElement);
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr4[i];
        cardBody.appendChild(answerElement);
    }
    var correctAnswer=document.querySelector(".ansSelect2");
    var wrongAnswer1=document.querySelector(".ansSelect0");
    var wrongAnswer2=document.querySelector(".ansSelect3");
    var wrongAnswer3=document.querySelector(".ansSelect1");

    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        questionGenerator5();
    });
    wrongAnswer1.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator5();
    });
    wrongAnswer2.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator5();
    });
    wrongAnswer3.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        questionGenerator5();
    });
}

function questionGenerator5(event){
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[4];
    cardBody.appendChild(questionElement);
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr5[i];
        cardBody.appendChild(answerElement);
    }
    var correctAnswer=document.querySelector(".ansSelect0");
    var wrongAnswer1=document.querySelector(".ansSelect1");
    var wrongAnswer2=document.querySelector(".ansSelect2");
    var wrongAnswer3=document.querySelector(".ansSelect3");
//only difference from other Generators are that this one launches endPage instead of antoher question
    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        endPage();
    });
    wrongAnswer1.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        endPage();
    });
    wrongAnswer2.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        endPage();
    });
    wrongAnswer3.addEventListener("click",function(){
        timeLost+5;
        cardBody.innerHTML="";
        endPage();
    });
}
//end page which asks user to enter name to save score
function endPage(){
    var userName = prompt("Enter your name to save your score");
//creates a user profile
    var userData={
        name: userName,
        score: count
        };
//retrieves local storage scoes and adds new score to data
    var storedScores = JSON.parse(localStorage.getItem("allSaves"))
        if(storedScores!==null){
            savedScores.push(storedScores);
        }
        savedScores.push(userData);
        localStorage.setItem("allSaves", JSON.stringify(savedScores));
//Informs user of their score
        var scoreElement=document.createElement("h1")
        scoreElement.textContent="You have scored "+count+" out of 5";
        cardBody.appendChild(scoreElement);
//creates a highscore button which brings you to the highscore page
        var highscoreElement=document.createElement("button");
        highscoreElement.setAttribute("class","highscores");
        highscoreElement.textContent="HighScores";
        cardBody.appendChild(highscoreElement);
        var scoreButton=document.querySelector(".highscores");
        scoreButton.addEventListener("click",function(){
            cardBody.innerHTML="";
            highscorePage();
        })
    }
function highscorePage(){
//displays highscores
    var highscoreData=localStorage.getItem("allSaves");
    var highscoreList=JSON.parse(highscoreData);
    for(var i=0;i<highscoreList.length;i++){
        var hsNameElement=document.createElement("h3");
        var hsScoreElement=document.createElement("h3");
        hsNameElement.textContent=highscoreList[i]['name'];
        hsScoreElement.textContent=highscoreList[i]['score'];
        cardBody.appendChild(hsNameElement);
        cardBody.appendChild(hsScoreElement);
    }

}
//timer function
function countdown(){
    timeDisplay.textContent=timeLeft;
//if time is greater than 0 execute
        if(timeLeft>0){
            interval = setInterval(function(){
                timeLeft--;
                timeDisplay.textContent=timeLeft;
//if timer reaches 0 launches end page
                if(timeLeft===0){
                    timeDisplay.innerHTML="";
                    cardBody.innerHTML="";
                    endPage(); 
            }
            },1000)

    }
}






startPage();

