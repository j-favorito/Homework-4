
var cardBody=document.querySelector(".card");
var questionArr = ["What statement do you use to create a loop?",".querySelector can be used to call on what type of element?","True/false data types are defined as what?","Which one of these is not a pop-up type?","Math. what rounds a number down to a whole number?"];
var answerArr1 = ["if","else","for","else if"];
var answerArr2 = ["class","id","neither","both"];
var answerArr3 = ["string","boolean","array","index"];
var answerArr4 = ["prompt","confirm","notify","alert"];
var answerArr5 = ["floor","round","return","down"]
var score = document.querySelector("#score")
var count = 0;
score.textContent="Score: 0";
var highScores=[];





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
        questionGenerator1();
    })
}

function questionGenerator1(event){
    var questionElement=document.createElement("h1")
    questionElement.textContent=questionArr[0];
    cardBody.appendChild(questionElement);
    for(var i=0;i<4;i++){
        var answerElement=document.createElement("button");
        answerElement.setAttribute("class","ansSelect"+i);
        answerElement.textContent=answerArr1[i];
        cardBody.appendChild(answerElement);
    }
    var correctAnswer=document.querySelector(".ansSelect2");
    var wrongAnswer1=document.querySelector(".ansSelect0");
    var wrongAnswer2=document.querySelector(".ansSelect1");
    var wrongAnswer3=document.querySelector(".ansSelect3");

    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        questionGenerator2();
    });
    wrongAnswer1.addEventListener("click",function(){
        cardBody.innerHTML="";
        questionGenerator2();
    });
    wrongAnswer2.addEventListener("click",function(){
        cardBody.innerHTML="";
        questionGenerator2();
    });
    wrongAnswer3.addEventListener("click",function(){
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
        cardBody.innerHTML="";
        questionGenerator3();
    });
    wrongAnswer2.addEventListener("click",function(){
        cardBody.innerHTML="";
        questionGenerator3();
    });
    wrongAnswer3.addEventListener("click",function(){
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
        cardBody.innerHTML="";
        questionGenerator4();
    });
    wrongAnswer2.addEventListener("click",function(){
        cardBody.innerHTML="";
        questionGenerator4();
    });
    wrongAnswer3.addEventListener("click",function(){
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
        cardBody.innerHTML="";
        questionGenerator5();
    });
    wrongAnswer2.addEventListener("click",function(){
        cardBody.innerHTML="";
        questionGenerator5();
    });
    wrongAnswer3.addEventListener("click",function(){
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

    correctAnswer.addEventListener("click",function(){
        count++;
        cardBody.innerHTML="";
        score.textContent="Score: " + count;
        endPage();
    });
    wrongAnswer1.addEventListener("click",function(){
        cardBody.innerHTML="";
        endPage();
    });
    wrongAnswer2.addEventListener("click",function(){
        cardBody.innerHTML="";
        endPage();
    });
    wrongAnswer3.addEventListener("click",function(){
        cardBody.innerHTML="";
        endPage();
    });
}

function endPage(){
}





startPage();

