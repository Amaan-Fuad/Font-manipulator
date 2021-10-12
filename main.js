lwx=0;
rwx=0;
nosex=0;
nosey=0;
difference=0;
function setup(){
canvas=createCanvas(550,500);
video=createCapture(VIDEO);
video.size(550,500);
canvas.position(560,100);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
lwx=results[0].pose.leftWrist.x;
rwx=results[0].pose.rightWrist.x;
difference=floor(lwx-rwx);
console.log("nosex is",nosex);
console.log("nosey is",nosey);
console.log("left wrist is",lwx);
console.log("right wrist is",rwx);
console.log("difference is",difference);
}
}
function modelloaded(){
    console.log("Model is loaded");
}
function preload(){

}
function draw(){
background('teal');
textSize(difference);
fill('blue');
text('Amaan',nosex,nosey);
}
