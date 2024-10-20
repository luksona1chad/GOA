const correctAnswer = "elephant";

document.getElementById('submitAnswer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value.trim();

    if (userAnswer.toLowerCase() === correctAnswer) {
        document.getElementById('feedback').innerText = "Congratulations! You got it right!";
        alert("Your answer is correct!"); // Alert message
    } else {
        document.getElementById('feedback').innerText = "Incorrect answer! Try again.";
    }

    document.getElementById('answer').value = ''; // Clear the input field
});
