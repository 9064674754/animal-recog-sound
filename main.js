var cat=0;
var lion=0;
var cow=0;
var dog=0;
function startClassfication(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o4krbdKqH/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuary - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
    img=document.getElementById("img");
    if(results[0].label=="Cat"){
        img.src='download.png';
        cat=cat+1;
        document.getElementById("cat").innerHTML=cat;
    }
    else if(results[0].label=="Dog"){
        img.src='egg.png';
        dog=dog+1;
        document.getElementById("doge").innerHTML=dog;
    }
    else if(results[0].label=="Cow"){
        img.src='cow.png';
        cow=cow+1;
        document.getElementById("cow").innerHTML=cow;
    }
    else if(results[0].label=="Lion"){
        img.src='51-515489_happy-lion-clipart.png';
        lion=lion+1;
        document.getElementById("lion").innerHTML=lion;
    }
    else{
        img.src='pot.png';
    }
    }
}