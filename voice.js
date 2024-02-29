// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onstart = function() {
//   console.log('Voice recognition activated. Speak "submit" to submit the form.');
// };

// recognition.onresult = function(event) {
//   const speechResult = event.results[0][0].transcript.trim().toLowerCase();
//   console.log('Speech Result:', speechResult);

//   if (speechResult === 'submit') {
//     submitForm();
//   }
// };

// function submitForm() {
//   alert('Form Submitted!');
//   // You can perform other actions here, like sending form data to a server
// }

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
//   submitForm();
// });

// document.getElementById('submitButton').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent form submission
//   submitForm();
// });

// document.getElementById('voiceSubmitButton').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent form submission
//   recognition.start();
// });



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('Voice recognition activated. Speak to input text or say "submit" to submit the form.');
};

recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript.trim().toLowerCase();
  console.log('Speech Result:', speechResult);

  // Update the text input with the speech result
  document.getElementById('textInput').value = speechResult;

  // If the user says "submit", submit the form
  if (speechResult === 'submit') {
    submitForm();
  }
};

function submitForm() {
  // Access the text entered in the text input
  const textInputValue = document.getElementById('textInput').value.trim();

  // Here you can perform actions with the text input value, such as sending it to a server
  console.log('Form Submitted with text:', textInputValue);
  alert('Form Submitted with text: ' + textInputValue);
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  submitForm();
});

document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  submitForm();
});

document.getElementById('voiceSubmitButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission
  recognition.start();
});
