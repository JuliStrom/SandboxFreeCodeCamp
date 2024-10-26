/*Now the teacher needs your help converting the student score to a letter grade.
Complete the getGrade function that takes a number score as a parameter. 
Your function should return a string representing a letter grade based on the score. 
Tips
Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).*/

function getGrade(score) {
    if (score === 100) {
    return "A++";
    } else if (score <= 99 && score >= 90) {
    return "A";
    } else if (score <= 89 && score >= 80) {
    return "B";
    } else if (score <= 79 && score >= 70) {
    return "C";
    } else if (score <= 69 && score >= 60) {
    return "D";
    } else if (score <= 59) {
    return "F";
}
}
console.log(getGrade(100));
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(73));
console.log(getGrade(60));
console.log(getGrade(20));