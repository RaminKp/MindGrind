
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

function submitAnswer(answer, player) {
        fetch('mindGrind/submitAnswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer,
                player: toString(player)
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