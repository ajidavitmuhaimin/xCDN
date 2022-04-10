var fg=prompt("Enter text to send");

var data={

  "text":fg

};

document.getElementById("viewer").innerHTML=data.text;
