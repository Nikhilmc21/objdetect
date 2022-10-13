img="";
status_m="";

function preload(){
    img=loadImage('images.jpeg');
}

function setup(){
    canvas = createCanvas(640,450);
    canvas.center();
    a = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML ="Detecting...";
}

function modelLoaded(){
    console.log("MODEL LOADED BEEP BOOP 🤖🤖🤖");
    status_m=true;
    a.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("ERROR ERROR 🤖🤖🤖"+error);
    }
    else{
        console.log("SUCCESS SUCCESS 🤖🤖🤖");
        console.log(results);
        document.getElementById("detected").innerHTML= results;
    }
}


function draw(){
    image(img , 0, 0, 640, 420);
}


function home(){
    window.location="index.html";
}