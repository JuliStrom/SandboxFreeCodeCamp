/*A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
Complete the getAverage function which takes in an array of test scores and returns the average score.
The average is calculated by adding up all the scores and dividing by the total number of scores.
A couple of function calls have been provided for you so you can test out your code.

Tips
You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores. */
function getAverage(scores) {
    let sum = 0;
    let number = scores.length;
    console.log(number);
for (let i of scores) {
    sum += i; 
    console.log(sum);
}
return sum / number;
}
console.log(getAverage([92, 88, 23, 12, 54]));