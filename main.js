right_wristX = 0;
right_wristY = 0;
right_wrist_score = 0;

function setup(){
    var canvas = createCanvas(700, 600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700,600)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results){
if(results > 0){
    right_wristY = results[0].pose.rightWrist.y;
    right_wristX = results[0].pose.rightWrist.x;
    right_wrist_score = results[0].keypoints[10].score;
    console.log(scoreRightWrist);
}
}

function draw(){
    if(right_wrist_score > 0.2){
        fill("red");
        stroke("red");
    }
}