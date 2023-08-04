Webcam.set({
    width:350,
    height:300,
    image:format = 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'"/>';
    });
}
    console.log('ml5 version:', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tVEMyLM8i/model.json',modelLoaded);

    function modelLoaded(){
        console.log("model loaded!");
    }

    function check(){
        img = document.getElementById("capture_img");
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        if(error){
            console.error(error);
        }
        else{
          console.log(results);
          document.getElementById("result_object_name").innerHTML = "Object: "+results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = "Accuracy: "+results[0].confidence.toFixed(3);  
        }
    }
