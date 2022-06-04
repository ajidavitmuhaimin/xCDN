//Do not modify this file,protected by law
//Created by Aji Davit Muhaimin and Adaapps and Adagames Developer
//This file is a framework,write in JavaScript,and CSS for game developer
//This framework for game development based JavaScript
console.clear();
console.log("DeltaGame Framework is successfully loaded");
function DeltaAlert(wordToAlert){
  alert(wordToAlert);
}
function DeltaTimeNow(objectToView){
  if(objectToView==null){
    var er=new Date();
  return er;
  }else{
    objectToView.innerHTML=new Date();
  objectToView.value=new Date();
  }
}
function DeltaTimer(LongMilisec,text){
  setTimeout(function(){
      alert(text);
    },LongMilisec)
}
function DeltaTestMove(objectToMove,refreshTime){
  objectToMove.classList.add("helloAnimation");
  setTimeout(function(){
    objectToMove.classList.remove("helloAnimation");
  },refreshTime);
}
function DeltaBouncing(objectToMove,refreshTime){
  objectToMove.classList.add("bouncingAnimation");
  setTimeout(function(){
    objectToMove.classList.remove("bouncingAnimation");
  },refreshTime);
}
function DeltaRotateAnimation(objectToMove,refreshTime){
  objectToMove.classList.add("rotateAnimation");
  setTimeout(function(){
    objectToMove.classList.remove("rotateAnimation");
  },refreshTime);
}
function DeltaWinBasedTimer(text,TimeMilisec){
  setTimeout(function(){
    alert(text);
  },TimeMilisec);
}
function DeltaAbout(objectToView){
  objectToView.innerHTML="This app using DeltaGame Framework";
  objectToView.value="This app using DeltaGame Framework";
}
function DeltaRunLeftToRight(objectToMove){
  objectToMove.classList.add("animationRun");
}
function DeltaSetWidth(objectToView,CharValue){
  objectToView.style.width=CharValue;
}
function DeltaSetHeight(objectToView,CharValue){
  objectToView.style.height=CharValue;
}
function DeltaSetColor(objectToView,CharValue){
  objectToView.style.backgroundColor=CharValue;
}
function DeltaHint(inputObject,CharText){
  inputObject.placeholder=CharText;
}
function DeltaHello(imgObjectToView){
  try{
  imgObjectToView.src="https://cdn.jsdelivr.net/gh/ajidavitmuhaimin/xCDN/DeltaLogo.jpg";
  }catch(err){
    console.log(err);
  }
}
function DeltaAnimation(objectToMove,CharClassName,refreshTime){
  objectToMove.classList.add(CharClassName);
  setTimeout(function(){
    objectToMove.classList.remove(CharClassName);
  },refreshTime);
}
function DeltaShadowing(objectToView,CharValue){
  try{
  objectToView.style.boxShadow=CharValue;
  }catch(err){
    
  }
}
function DeltaText(objectToView,CharText){
  try{
  objectToView.innerHTML=CharText;
  }catch(err){
    console.log(err);
  }
}
function DeltaTextShadowing(objectToView,CharValue){
  objectToView.style.textShadow=CharValue;
}
function DeltaSaveData(CharKey,inputData){
  try{
  localStorage.setItem(CharKey,inputData);
  }catch(DeltaErr){
    console.log(DeltaErr);
  }
}
function DeltaGetData(CharKey){
  try{
  var gyh=localStorage.getItem(CharKey);
  return gyh;
  }catch(DeltaErr){
    console.log(DeltaErr);
  }
}
function DeltaRunRightToLeft(objectToMove){
  objectToMove.classList.add("animationRun2");
}
function DeltaAnimationInfinite(objectToMove,CharClassName){
  objectToMove.classList.add(CharClassName);
}
function DeltaAudioBacksound(CharFilePath){
  var mlnda=new Audio(CharFilePath);
  mlnda.play();
}
function DeltaSetTextColor(objectToView,CharValue){
  objectToView.style.color=CharValue;
}
function DeltaNotification(CharTextTitle,CharTextBody){
  var note=new Notification(CharTextTitle,{
    body:CharTextBody
  });
}
function DeltaRotateInfinite(objectToMove){
  objectToMove.classList.add("rotateAnimation2");
}
function DeltaSetBorderRadius(objectToView,CharValue){
  objectToView.style.borderRadius=CharValue;
}
function DeltaSetTopRightRadius(objectToView,CharValue){
  objectToView.style.borderTopRightRadius=CharValue;
}
function DeltaSetTopLeftRadius(objectToView,CharValue){
  objectToView.style.borderTopLeftRadius=CharValue;
}
function DeltaSetBottomRightRadius(objectToView,CharValue){
  objectToView.style.borderBottomRightRadius=CharValue;
}
function DeltaSetBottomLeftRadius(objectToView,CharValue){
  objectToView.style.borderBottomLeftRadius=CharValue;
}
function DeltaSetCenter(objectToView){
  objectToView.style.backgroundColor="white";
}
function DeltaGetPositionLeft(objectToRender){
  var rto=getComputedStyle(objectToRender);
  var fgj=rto.left;
  return fgj;
}
function DeltaGetPositionRight(objectToRender){
  var ert=getComputedStyle(objectToRender);
  var qw=ert.right;
  return qw;
}
function DeltaGetPositionTop(objectToRender){
  var ss=getComputedStyle(objectToRender);
  var cv=ss.top;
  return cv;
}
function DeltaGetPositionBottom(objectToRender){
  var ey=getComputedStyle(objectToRender);
  var mo=ey.bottom;
  return mo;
}
function DeltaGetHeight(objectToRender){
  var cf=getComputedStyle(objectToRender);
  var aw=cf.height;
  return aw;
}
function DeltaGetWidth(objectToRender){
  var wer=getComputedStyle(objectToRender);
  var tp=wer.width;
  return tp;
}
function DeltaRandom(limitValue){
  var rv=Math.floor(Math.random()*limitValue);
  return rv;
}
function DeltaConsole(text){
  console.log(text);
}
function DeltaEraseData(CharKey){
  localStorage.removeItem(CharKey);
}
function DeltaGetScreenWidth(){
  var vw=window.innerWidth;
  return vw;
}
function DeltaGetScreenHeight(){
  var vh=window.innerHeight;
  return vh;
}
function DeltaObjectTexture(objectToView,CharFilePath,CharSize){
  objectToView.style.backgroundImage=CharFilePath;
  objectToView.style.backgroundPosition="center";
  objectToView.style.backgroundSize=CharSize;
}
function DeltaTransform(objectToView,CharValue){
  objectToView.style.transform=CharValue;
}
function DeltaGetColor(objectToRender){
  var tg=getComputedStyle(objectToRender);
  var to=tg.backgroundColor;
  return to;
}
