// For input
const sentenceTag = document.querySelector(`input[type='text']`);
const outputTag = document.querySelector('textarea.output');
const originalText = outputTag.value;

// For typesize
const typesizeTag = document.querySelector(`input[name='typesize']`);
const typesizeOutput = document.querySelector('span.typesize-output');

// For lineheight
const lineheightTag = document.querySelector(`input[name='lineheight']`);
const lineheightOutput = document.querySelector('span.lineheight-output');

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

// When I change my typesize slider, update the span text and change font size in outputTag
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

typesizeTag.addEventListener('input', () => {
  typesizeOutput.innerHTML = typesizeTag.value + 'px'; // changing HTML sspan text
  outputTag.style.fontSize = typesizeTag.value + 'px'; // changing CSS style
});

lineheightTag.addEventListener('input', () => {
  lineheightOutput.innerHTML = lineheightTag.value;
  outputTag.style.lineHeight = lineheightTag.value; // outputTag once again, because this is where you change lineheight in CSS
});
