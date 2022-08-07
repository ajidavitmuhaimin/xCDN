console.log("BluePrintGraphics successfully loaded");
//Version 1.1
//Syntax List//
console.table({
  Syntax:"Guide",
  DrawText:"DrawText(CharCanvasId,CharText,Xco,Yco,CharStyle",
  DrawLine:"DrawLine(CharCanvasId,Xco,Yco,ToXco,ToYco,CharLineStyle,CharLineWidth)",
  DrawRectangle:"DrawRectangle(CharCanvasId,Xco,Yco,RectWidth,RectHeight,CharLineWidth,CharLineStyle,CharFillStyle)",
  DrawPie:"DrawPie(CharCanvasId,Xco,Yco,Radius,StartAngle,EndAngle,booleanAntiClockWise,CharLineWidth,CharStrokeStyle,CharFillStyle)",
  clearCanvas:"clearCanvas(CharCanvasId,canvasWidth,canvasHeight)"
});

//Syntax//
function DrawText(CharCanvasId,CharText,Xco,Yco,CharStyle,CharTextProperties){
  var paper=document.getElementById(CharCanvasId);
  var ctx=paper.getContext("2d");
  ctx.fillStyle=CharStyle;
  ctx.font=CharTextProperties;
  ctx.fillText(CharText,Xco,Yco);
  return true;
}

function DrawLine(CharCanvasId,Xco,Yco,ToXco,ToYco,CharLineStyle,CharLineWidth){
  var paper=document.getElementById(CharCanvasId);
  var ctx=paper.getContext("2d");
  ctx.moveTo(Xco,Yco);
  ctx.lineTo(ToXco,ToYco);
  ctx.strokeStyle=CharLineStyle;
  ctx.lineWidth=CharLineWidth;
  //ctx.stroke();
  return ctx;
}

function DrawRectangle(CharCanvasId,Xco,Yco,RectWidth,RectHeight,CharLineWidth,CharLineStyle,CharFillStyle,MoveX,MoveY){
  var paper=document.getElementById(CharCanvasId);
  var ctx=paper.getContext("2d");
  ctx.rect(Xco,Yco,RectWidth,RectHeight);
  ctx.lineWidth=CharLineWidth;
  ctx.strokeStyle=CharLineStyle;
  ctx.fillStyle=CharFillStyle;
  ctx.translate(MoveX,MoveY);
  //ctx.stroke();
  //ctx.fill();
  return ctx;
}

function DrawPie(CharCanvasId,Xco,Yco,Radius,StartAngle,EndAngle,booleanAntiClockWise,CharLineWidth,CharStrokeStyle,CharFillStyle){
  var paper=document.getElementById(CharCanvasId);
  var ctx=paper.getContext("2d");
  ctx.arc(Xco,Yco,Radius,StartAngle,EndAngle*Math.PI,booleanAntiClockWise);
  ctx.lineWidth=CharLineWidth;
  ctx.strokeStyle=CharStrokeStyle;
  ctx.fillStyle=CharFillStyle;
  //ctx.stroke();
  //ctx.fill();
  return ctx;
}

function clearCanvas(CharCanvasId,canvasWidth,canvasHeight){
  var paper=document.getElementById(CharCanvasId);
  var ctx=paper.getContext("2d");
  ctx.clearRect(0,0,canvasWidth,canvasHeight);
  ctx.beginPath();
  //ctx.globalCompositeOperation="destination-over";
  //ctx.restore();
}
