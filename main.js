 function setup(){
     canvas=createCanvas(300,300);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();//we are hiding video by p5.js because we want to place it on canvas using image()
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/E29F3-W4J/model.json',modelLoaded);
     //Loading the model and once its loaded the function.modelLoaded is called
 }

 function modelLoaded(){
     console.log('Model Loaded!');
 }
 

 function draw(){
 image(video, 0, 0, 300, 300);//Placing video on canvas, 0 & 0 are x & y , 300 & 300 are width & height of video
 classifier.classify(video, gotResult);
 //checking the video with the model and results are sent to gotResult()
 }

 function gotResult(error, results) {
     if (error) {
         console.error(error);
     } else {
         console.log(results);
         document.getElementById("result_obj").innerHTML = results[0].label;
         document.getElementById("result_acc").innerHTML = results[0].confidence.toFixed(3);//toFixed sets the digits after decimal
     }
 }

