var bg1,bg2,bg3,empsky,sky1;
var appState=0;
var butiss;
var iss,issImage;
var dataInfoA,dataInfoB,dataInfoC,dataInfoD;
var dataInfoA1,dataInfoB1,dataInfoC1,dataInfoD1;
var hello1,hello2,hello3,hello4,hello5,hello6;
var plus1,plus2,plus3,plus4;
var day;
var score=0;

function preload(){
getIss();
setInterval(async()=>{
getIss()},1000
)
sky1=loadImage("background/sky3.jpg");
issImg=loadImage("background/iss.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight-150);
    butiss=createButton('ISS LIVE')
    butiss.position(displayWidth/2-215,displayHeight/2-70)
    butiss.style('background','lightgreen')
    butiss.size(350,50);
}

function draw(){
if(appState===0){
background(sky1);

textSize(55);
fill("orange");
stroke("black")
strokeWeight(8)
text("LIVE ISS DATA",displayWidth/2-240,displayHeight/2-200)

textSize(50);
fill("red");
stroke("black")
strokeWeight(8)
text("LET'S CHECK THE LIVE POSITIONS OF THE ISS",displayWidth/2-600,displayHeight/2-110)
}
butiss.mousePressed(()=>{
    appState=1;
})
if(appState===1){    
   
    background(sky1);
    iss=createSprite(displayWidth/2-450,displayHeight/2-100,500,500);
    iss.addImage(issImg);
    iss.scale=0.6;
    drawSprites();
    butiss.hide();
    textSize(53);
    fill("red");
    text("ISS LIVE",displayWidth/2+200,displayHeight/2-420);
    textSize(45);
    fill("yellow");
    text("LONGITUDE :",displayWidth/2-50,displayHeight/2-330);
    text("LATITUDE :",displayWidth/2-50,displayHeight/2-250);
    text("HEMISPHERE (E/W) :",displayWidth/2-50,displayHeight/2-170);
    text("HEMISPHERE (N/S) :",displayWidth/2-50,displayHeight/2-90);
    text("CONTINENT :",displayWidth/2-50,displayHeight/2-10);
    text("OCEAN :",displayWidth/2-50,displayHeight/2+70);
    text("ALTITUDE :",displayWidth/2-50,displayHeight/2+150);
    text("SPEED :",displayWidth/2-50,displayHeight/2+230);
    text("DAY / NIGHT :",displayWidth/2-50,displayHeight/2+310);
    text("km",displayWidth/2+400,displayHeight/2+150);
    text("km/hr",displayWidth/2+400,displayHeight/2+230);

    textSize(45);
    fill("red");
    text(dataInfoA1,displayWidth/2+260,displayHeight/2-330);
    text(dataInfoB1,displayWidth/2+230,displayHeight/2-260);
    text(dataInfoC1,displayWidth/2+210,displayHeight/2+150);
    text(dataInfoD1,displayWidth/2+160,displayHeight/2+230);

    if(hello5==="-"){
        text("WESTERN",displayWidth/2+415,displayHeight/2-170);
    }else{
        text("EASTERN",displayWidth/2+415,displayHeight/2-170);
    }
    if(hello6==="-"){
        text("SOUTHERN",displayWidth/2+415,displayHeight/2-90);
    }else{
        text("NORTHERN",displayWidth/2+415,displayHeight/2-90);
    }

    if(day==="daylight"){
        text("DAY",displayWidth/2+270,displayHeight/2+310);
    }else{
        text("NIGHT",displayWidth/2+270,displayHeight/2+310);
    }

    if(dataInfoA>60 && dataInfoA<120 && dataInfoB>10 && dataInfoB<80){
        text("ASIA",displayWidth/2+270,displayHeight/2-10);
        score=1;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA>45 && dataInfoA<55 && dataInfoB>15 && dataInfoB<30){
        text("ASIA",displayWidth/2+270,displayHeight/2-10);
        score=1;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA>120 && dataInfoA<180 && dataInfoB>60 && dataInfoB<70){
        text("ASIA",displayWidth/2+270,displayHeight/2-10);
        score=1;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    
    if(dataInfoA>-10 && dataInfoA<32 && dataInfoB<32 && dataInfoB>5){
        text("AFRICA",displayWidth/2+270,displayHeight/2-10);
        score=2;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA>5 && dataInfoA<40 && dataInfoB<5 && dataInfoB>-35){
        text("AFRICA",displayWidth/2+270,displayHeight/2-10);
        score=2;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }


    if(dataInfoA>113 && dataInfoA<153 && dataInfoB<-10 && dataInfoB>-40){
        text("AUSTRALIA",displayWidth/2+270,displayHeight/2-10);
        score=3;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }


    if(dataInfoA>-8 && dataInfoA<45 && dataInfoB>40 && dataInfoB<70){
        text("EUROPE",displayWidth/2+270,displayHeight/2-10);
        score=4;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }

    if(dataInfoA>-130 && dataInfoA<-60 && dataInfoB<70 && dataInfoB>15){
        text("NORTH AMERICA",displayWidth/2+270,displayHeight/2-10);
        score=5;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }

    if(dataInfoA<-52 && dataInfoA>-75 && dataInfoB>0 && dataInfoB<8){
        text("SOUTH AMERICA",displayWidth/2+270,displayHeight/2-10);
        score=6;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA<-50 && dataInfoA>-80 && dataInfoB>-20 && dataInfoB<0){
        text("SOUTH AMERICA",displayWidth/2+270,displayHeight/2-10);
        score=6;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA>-70 && dataInfoA<-50 && dataInfoB>-40 && dataInfoB<-20){
        text("SOUTH AMERICA",displayWidth/2+270,displayHeight/2-10);
        score=6;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(dataInfoA<-67 && dataInfoA>-72 && dataInfoB>-55 && dataInfoB<-40){
        text("SOUTH AMERICA",displayWidth/2+270,displayHeight/2-10);
        score=6;
        text("--",displayWidth/2+50,displayHeight/2+70);
    }else{
    }
    if(score!=1 && score!=2 && score!=3 && score!=4 && score !=5 && score!=6 && dataInfoA>-75 && dataInfoA<30 && dataInfoB>-60 && dataInfoB<60){
        textSize(50);
        text("ATLANTIC OCEAN",displayWidth/2+150,displayHeight/2+70);
        text("--",displayWidth/2+270,displayHeight/2-10);
    }
    if(score!=1 && score!=2 && score!=3 && score!=4 && score !=5 && score!=6 && dataInfoA>30 && dataInfoA<130 && dataInfoB>-60 && dataInfoB<30){
        textSize(50);
        text("INDIAN OCEAN",displayWidth/2+50,displayHeight/2+70);
        text("--",displayWidth/2+270,displayHeight/2-10);
    }
    if(score!=1 && score!=2 && score!=3 && score!=4 && score !=5 && score!=6 && dataInfoA>130 && dataInfoA<180 && dataInfoB>-60 && dataInfoB<60){
        textSize(50);
        text("PACIFIC OCEAN",displayWidth/2+50,displayHeight/2+70);
        text("--",displayWidth/2+270,displayHeight/2-10);
    }
    if(score!=1 && score!=2 && score!=3 && score!=4 && score !=5 && score!=6 && dataInfoA>-180 && dataInfoA<-75 && dataInfoB>-60 && dataInfoB<60){
        textSize(50);
        text("PACIFIC OCEAN",displayWidth/2+50,displayHeight/2+70);
        text("--",displayWidth/2+270,displayHeight/2-10);
    }
    
}
}
async function getIss(){
    var response=await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    var responseJSON=await response.json();

    dataInfoA=responseJSON.longitude;
    dataInfoB=responseJSON.latitude;
    dataInfoC=responseJSON.altitude;
    dataInfoD=responseJSON.velocity;
    day=responseJSON.visibility;

    hello1=dataInfoA.toString();
    hello2=dataInfoB.toString();
    hello3=dataInfoC.toString();
    hello4=dataInfoD.toString();

    dataInfoA1= hello1.slice(0,7);
    dataInfoB1= hello2.slice(0,7);
    dataInfoC1= hello3.slice(0,7);
    dataInfoD1= hello4.slice(0,9);

    hello5=hello1.slice(0,1);
    hello6=hello2.slice(0,1);
}