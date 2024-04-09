//variables for elements
var calculateButton = document.getElementById("calculateButton");
var averageOutput = document.getElementById("average");
var sumOutput = document.getElementById("sum");
var productOutput = document.getElementById("product");
var remainderOutput = document.getElementById("remainder");
var powerOutput = document.getElementById("power");
var roundedOutput = document.getElementById("rounded");
var tangentOutput = document.getElementById("tangent");
var randomOutput = document.getElementById("random");

//event listener
calculateButton.addEventListener("click", calculate);

//function
function calculate() {
  //variables
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  var input3 = parseFloat(document.getElementById("input3").value);

  //average
  console.log((input1 + input2 + input3) / 3);
  average = (input1 + input2 + input3) / 3;
  averageOutput.innerHTML = average;

  //sum
  console.log(input1 + input2 + input3);
  var sum = input1 + input2 + input3;
  sumOutput.innerHTML = sum;

  //product
  console.log(input1 * input2 * input3);
  var product = input1 * input2 * input3;
  productOutput.innerHTML = product;

  //remainder
  console.log(input1 % input2);
  var remainder = input1 % input2;
  remainderOutput.innerHTML = remainder;

  //power
  console.log(input1 ** input2);
  var power = input1 ** input2;
  powerOutput.innerHTML = power;

  //round
  console.log(input1.toFixed(2));
  var round = input1.toFixed(2);
  roundedOutput.innerHTML = round;

  //tangent
  console.log(Math.tan(input3));
  var tangent = Math.tan(input3);
  tangentOutput.innerHTML = tangent;

  //random
  console.log(Math.random() * (input2 - input1) + input1);
  var random = Math.random() * (input2 - input1) + input1;
  randomOutput.innerHTML = random;
}
