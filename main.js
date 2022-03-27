leftwristx=0;
rightwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(570,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function draw(){
    background("purple");
    textSize(18);
    fill("white");
    text("ritvik",400,400);

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=Math.floor(leftwristx - rightwristx);
        textSize(difference);
    }
}    