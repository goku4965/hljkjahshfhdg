x=0;
y=0;
draw_circle="";
draw_rect="";
draw_square="";
draw_triangle="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){
    document.getElementById("status").innerHTML= "System is listening,Pls Speak";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "The speech has been recognised as "+content;
    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML= "Started Drawing Circle";
        draw_circle = "set";
    } 

    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML= "Started Drawing Rectangle";
        draw_rect = "set";
    } 

    if(content=="square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML= "Started Drawing Square";
        draw_square = "set";
    } 
}

function setup(){
canvas= createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML= "Circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML= "Rectangle is drawn";
        draw_rect="";
    }
    if(draw_square=="set"){
        rect(x,y,50,50);
        document.getElementById("status").innerHTML= "Square is drawn";
        draw_square="";
    }
    
    
}