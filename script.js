document.write("Hello JS");
alert("Welcome to my website");

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

console.log("Hello from console");

function calculateGrade() {
    const score = document.getElementById('score').value;
    let grade = '';

    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = "Your grade is: " + grade;
}
