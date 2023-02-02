var grossPay = 0;
var nettPay = 0;
var tax = 0;
var Base = 1000;
var taxRate = 0.25;

grossPay = parseInt(prompt("enter gross pay", "0"));
if (grossPay > Base) {
   tax = (grossPay - Base) * taxRate;
} else {
   tax = 0;
}

nettPay = grossPay - tax;

messageSalary = document.getElementById("exercise5");
messageSalary.style.color = "blue";
messageSalary.style.fontSize = "30px";
document.write("\n The net pay is $" + nettPay)

