var myDemo = document.getElementById("demo");
var age;
age = parseInt(prompt("please enter your age", "100"));
if (age < 18) {
   myDemo.innerHTML = "You are a child";
} else {
   myDemo.innerHTML = "You are an adult, over 18 year old."
}

if (age <= 15) {
   myDemo.style.color = "red";
   myDemo.style.fontSize = "20px";
   myDemo.style.fontWeight = "500";
} else {
   myDemo.style.color = "blue";
   myDemo.style.fontSize = "40px";
   myDemo.style.fontWeight = "200";
}