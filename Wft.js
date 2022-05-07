<script>
  function get(){
    var df=document.getElementById("in").value;
    var res=document.getElementById("res");
    var res2=document.getElementById("res2");
    var res3=document.getElementById("res3");
    var res4=document.getElementById("res4");
    res.innerHTML="_"+df+"_";
    res2.innerHTML="```"+df+"```";
    res3.innerHTML="~"+df+"~";
    res4.innerHTML="*"+df+"*";
  }
  function about(){
    alert("Developed by Aji Davit Muhaimin");
  }
</script>
