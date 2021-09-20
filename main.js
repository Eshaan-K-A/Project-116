noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup() {
    canvas = createCanvas(370, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(370, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", obtainedPoses);
}

function modelLoaded(){
    console.log("The PoseNet model is Initialised");
}

function obtainedPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw() {
    image(video, 0, 0, 370, 300);
    image(clownNose, noseX - 47, noseY, 100, 40);
    canvas.center();
}
function clickThePhoto() {
    save("MyClownFilterImage.png");
    canvas.center();
}
 
