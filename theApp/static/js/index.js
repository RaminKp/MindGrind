document.addEventListener("keydown", function(event) {
    if (event.key === " ") { 
        event.preventDefault();  // Prevent scrolling

        let button = document.getElementById("button1"); // Select the button

        if (button) {
            button.classList.add("pressed");  // Add custom class for styling

            button.click();  // Simulate click

            setTimeout(() => {
                button.classList.remove("pressed");  // Remove class after animation
            }, 150); // Adjust timing if needed
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault();  // Prevent what enter might does

        let button = document.getElementById("button2"); // Select the button

        if (button) {
            button.classList.add("pressed");  // Add custom class for styling

            button.click();  // Simulate click

            setTimeout(() => {
                button.classList.remove("pressed");  // Remove class after animation
            }, 150); // Adjust timing if needed
        }
    }
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { //Spacebar
        document.getElementById("button2").click();
    }
});


//Begins recording user input
function startListening() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Not supported. Try again.");
                    return;
                }

    let recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        let command = event.results[0][0].transcript.trim();
        document.getElementById("answer").value = command;
        document.getElementById("answer").innerText = command;
    };

    recognition.start();
}