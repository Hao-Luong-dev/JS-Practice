var grade = '';
var mark = 0;

mark = parseInt(prompt("enter your mark", "0"));

switch (mark) {
   case 10:
   case 9: grade = "A";
      break;
   case 8: grade = "B";
      break;
}

document.write("your grade is " + grade);