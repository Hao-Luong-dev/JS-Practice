var number1 = 0;
var number2 = 0;
var number3 = 0;
var midNumber = 0;

number1 = parseInt(prompt("number 1", "0"));
number2 = parseInt(prompt("number 2", "0"));
number3 = parseInt(prompt("number 3", "0"));

if (number1 > number2) {
   midNumber = number1;
   number1 = number2;
   number2 = midNumber;
}

if (number2 > number3) {
   midNumber = number2;
   number2 = number3;
   number3 = midNumber;
}

if (number1 > number2) {
   midNumber = number1;
   number1 = number2;
   number2 = midNumber;
}

document.write("ascend order of the three numbers: " + number1 + ", " + number2 + ", " + number3);