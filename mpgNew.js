function calc() {
    var field1 = document.getElementById("num1").value;
    var field2 = document.getElementById("num2").value;
    var result = parseFloat(field1)/parseFloat(field2);
    var message = document.getElementById("message");
  
      if(!isNaN(result)){
        message.innerHTML="You get " + result + " miles per gallon";
        message.style.color = 'tomato';
        document.getElementById("after").style.display = 'block';
        document.getElementById("reset").style.display = 'block';
      } else {
        alert("Please be sure you entered valid numbers");
      }
  }
  function refreshPage(){
    window.location.reload();
} 