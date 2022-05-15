function cr(){

    var innama=document.getElementById("innama").value;

    var res="https://www.instagram.com/"+innama+"/";

    var outnama=document.getElementById("outnama");

    outnama.value=res;

  }

  function about(){

    alert("Developed by Aji Davit Muhaimin");

    alert("Email ajidavitmuhaimin@yahoo.com");

  }

  setTimeout(function(){

    window.location.reload();

  },60000);
