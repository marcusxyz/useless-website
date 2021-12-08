const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector('section.output');

// When the user types in sentenceTag, update the outputTag
// List of KeyboardEvent https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

sentenceTag.addEventListener('keyup', () => {
  outputTag.innerHTML = sentenceTag.value;
});
