console.log('Made by Aji Davit Muhaimin');
console.log("Make at 08.29PM 10 March 2022");
var object=document.getElementById("viewer");
object.src="https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=Alhamdulillah";
function generate(){
  var text=prompt("Enter Text to Convert");
  object.src="https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl="+text;
};
