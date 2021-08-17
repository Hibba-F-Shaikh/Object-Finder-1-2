status="";

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createVideo(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting objects" ; 
    object_name = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded!!!!!");
    status = true ; 
}

function draw(){
    image(video , 0 , 0 , 500 , 500);
}