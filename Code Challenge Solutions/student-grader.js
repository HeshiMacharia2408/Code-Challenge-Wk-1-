// Gives grade based on the range of marks

function totalMarks (total) {
    if (total >= 80 ) { 
        return 'A';
    }else if (total >= 60 && total <= 79) {
        return 'B';
    }else if (total >= 49 && total<= 59)  {
        return 'C';
    }else if (total >= 40 && total < 49) {
        return 'D';
    }else {
        return 'E';
    }
}
// Prevents the input of values outside the range of 0-100
function userInput (input) {
    if (total >= 0 || total <= 100) {
        return true;
    }else if (total < 0 || total > 100) {
        return false;
    }
}
// Prompts the student to type in their total marks
const grade = prompt("Please type in your total marks,");
// Produces grade based off the input marks
console.log(`Your overall grade is: ${totalMarks(grade)}`);
