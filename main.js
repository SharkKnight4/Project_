Webcam.set({
    width:350,
    height:300,
    img_format:"jpeg",
    jpeg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
image
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9DdD11Lou/model.json',modelLoaded);
function modelLoaded(){
console.log('model is loaded');
}
function find(){
var object_image= document.getElementById("selfie");
classifier.classify(object_image,gotResult);
}
function gotResult(error,results){
    if (error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML="You are a " + results[0].label;

    }
}