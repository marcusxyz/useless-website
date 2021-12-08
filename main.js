const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector('section.output');
const originalText = outputTag.innerHTML;

// When the user types in sentenceTag, update the outputTag
// List of KeyboardEvent https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

const displayUpdate = sentenceTag.addEventListener('keyup', () => {
  if (sentenceTag.value) {
    outputTag.innerHTML = sentenceTag.value;
  } else {
    // If there is no value add the original text
    outputTag.innerHTML = originalText;
  }
});
