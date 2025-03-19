
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