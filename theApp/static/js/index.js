document.addEventListener("keydown", function(event) {
    if (event.key === " ") { 
        event.preventDefault();  // Prevent scrolling

        let button = document.getElementById("button1"); // Select the button

        if (button) {
            button.classList.add("pressed");  // Add custom class for styling
            button.click();  // Simulate click
            logButtonPress("LeftPlayerClicked"); 

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
            logButtonPress("RightPlayerClicked"); 

            setTimeout(() => {
                button.classList.remove("pressed");  // Remove class after animation
            }, 150); // Adjust timing if needed
        }
    }
});


// document.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") { //enter
//         document.getElementById("button2").click();
//     }
// });


//Begins recording user input
function startListening(player) {
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
        result = command;
        submitAnswer(command, player);
    };

    recognition.start();
}

function submitAnswer(Answer, Player) {
        fetch('/mindGrind/log/submitAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: Answer,
                player: Player.toString()
            })
        }).then(response => response.json())
          .then(data => console.log('Answer submited', data))
          .catch(error => console.error('Error:', error));
}

function nextQuestion() {
    fetch('mindGrind/nextQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
      .then(data => console.log('Moving to next page'))
      .catch(error => console.error('Error:', error));
}



function logButtonPress(buttonName) {
    fetch('/log/button-press/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            button_name: buttonName
        })
    }).then(response => response.json())
      .then(data => console.log('Button Press Logged:', data))
      .catch(error => console.error('Error logging button press:', error));
}