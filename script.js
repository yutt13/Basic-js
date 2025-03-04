alert("Welcome to my website");

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

console.log("Hello from console");
function calculateGrade() {
    const score = document.getElementById('score').value;
    let grade = '';

    if (score >= 80) {
        grade = '4';
    } else if (score >= 75) {
        grade = '3.5';
    } else if (score >= 70) {
        grade = '3';
    } else if (score >= 65) {
        grade = '2.5';
    } else if (score >= 60) {
        grade = '2';
    } else if (score >= 55) {
        grade = '1.5';
    } else if (score >= 50) {
        grade = '1';
    } else {
        grade = '0';
    }

    document.getElementById('result').innerHTML = "เกรดที่คุณได้: " + grade;
}
