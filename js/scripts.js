var BMI = function(weight, height) {
  return weight / Math.sqrt(height);
};

var calculate = function(weight, height) {
  var height = parseInt(prompt("Enter your height:"));
  var weight = parseInt(prompt("Enter your weight:"));
  alert("Your BMI is " + BMI(weight, height) + ".");
};

calculate();
