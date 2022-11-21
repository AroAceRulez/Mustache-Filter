above_upperlipX=0;
above_upperlipY=0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/XvWD1dPH/mustache-by-hurricamo-on-deviantart-10.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        above_upperlipX = results[0].pose.nose.x-40;
        above_upperlipY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, above_upperlipX, above_upperlipY, 80, 35);
}
function take_snapshot(){
    save('myFilterImage.png');
}