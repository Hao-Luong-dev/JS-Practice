var d = new Date();
var currentHour = d.getHours();

hourMessage = document.getElementById("exercise3");
if ((currentHour > 0) && (currentHour < 12)) {
   hourMessage.innerHTML = "Good morning!";
   hourMessage.style.color = "green";
   hourMessage.style.fontSize = "60px";
} else if ((currentHour < 18) && (currentHour >= 12)) {
   hourMessage.style.color = "red";
   hourMessage.style.fontSize = "60px";
   hourMessage.innerHTML = "Good afternoon!";
} else {
   hourMessage.style.color = "blue";
   hourMessage.style.fontSize = "60px";
   hourMessage.innerHTML = "Good evening!";
}

