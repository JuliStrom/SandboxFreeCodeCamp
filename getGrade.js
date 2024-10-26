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
};

function getAverage(scores) {
    let sum = 0;
    let number = scores.length;
    console.log(number);
for (let i of scores) {
    sum += i; 
    console.log(sum);
}
return sum / number;
};

function studentMsg(totalScores, studentScore) {
    if (studentScore > 60) {
    return "Class average: " + getAverage(totalScores) + '. Your grade: ' + getGrade(studentScore) + ". You passed the course.";
} else
    return "Class average: " + getAverage(totalScores) + '. Your grade: ' + getGrade(studentScore) + ". You failed the course.";
};
    console.log(studentMsg([50, 50], 61));