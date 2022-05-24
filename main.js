function setup() {
    canvas=createCanvas(400,400);
    canvas.position(550,200);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.SpeechSynthesis;
}
function clear_canvas(){
    background("white");
}
function preload(){
    Classifier=ml5.imageClassifier('DoodleNet');
}
function draw(){
    stroke("black");
    strokeWeight(5);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
    Classifier.classify(canvas,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
       console.log(results);
       document.getElementById("obj_label").innerHTML="Object Name: "+results[0].label;
       document.getElementById("obj_confidence").innerHTML="Accuracy: "+Math.round(results[0].confidence*100)+ "%";
       Utterthis=new SpeechSynthesisUtterance(results[0].label);
       synth.speak(Utterthis);
    
}