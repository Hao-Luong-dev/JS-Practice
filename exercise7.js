var choice = "";
var oneD = 0;
var twoD = 0;
var twentyC = 0;
var fiveC = 0;
var totalMoney = 0;


oneD = parseInt(prompt("number of one dollar coins", "0"));
twoD = parseInt(prompt("number of two dollar coins", "0"));
twentyC = parseInt(prompt("number of twenty cent coins", "0"));
fiveC = parseInt(prompt("number of five cent coins", "0"));

choice = prompt("enter your choice", "C or D");

if (choice == 'C') {
   totalMoney = 100 * oneD + 200 * twoD + 20 * twentyC + 5 * fiveC;
   document.write("total money is #" + totalMoney);
} else if (choice == 'D') {
   totalMoney = 1 * oneD + 2 * twoD + 0.2 * twentyC + 0.05 * fiveC;
   document.write("total money is $" + totalMoney)
} else {
   document.write("invalid, please enter your choice");
}


