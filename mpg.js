var milesDv;
var gallonsUsed;
var button = document.getElementById('btn');
var welcome = document.getElementById('before');
var thanks = document.getElementById('after');

button.addEventListener('click', function () {
    
  

milesDv = prompt("Enter miles driven.");
gallonsUsed = prompt("Enter gallons used");
var milespg = milesDv / gallonsUsed;
alert("Miles per gallon = " + milespg);
welcome.style.display = "none";
thanks.style.display = "block";
});