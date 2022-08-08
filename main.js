    function setup() {
        video = createCapture(VIDEO);
        video.size(550, 500);
        
        canvas = createCanvas(550, 500);
        canvas.position(560,150);

        poseNet = ml5.poseNet (video, modeloaded);
        poseNet.on('pose', gotPoses);
    }

    function draw() {
        background("#87CEEB");
    }

    function modeloaded() {
        console.log('PoseNet Is Initialized! ');
    }

    function gotPoses() {
        if(results.length > 0)
        {
            console.log(results);
        }
    }