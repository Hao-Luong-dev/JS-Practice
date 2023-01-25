var studentName = prompt("enter your name", "Name");
var grade;

studentMessage = document.getElementById("exercise2");
grade = parseInt(prompt("enter your score", "grade"));

if (grade > 50) {
   studentMessage.innerHTML = "You passed!"
   studentMessage.style.color = "red";
   studentMessage.style.fontSize = "50px";
} else {
   studentMessage.innerHTML = "You failed!";
   studentMessage.style.color = "green";
   studentMessage.style.fontSize = "100px";
}
