const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector('textarea.output');
const originalText = outputTag.value;

// When the user types in sentenceTag, update the outputTag
// List of KeyboardEvent https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

// Typing from input
sentenceTag.addEventListener('keyup', () => {
  if (sentenceTag.value) {
    outputTag.value = sentenceTag.value;
  } else {
    // If there is no value put back the original text
    outputTag.value = originalText;
  }
});

// Typing from textarea
outputTag.addEventListener('keyup', () => {
  sentenceTag.value = outputTag.value;
});
