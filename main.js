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

// For checkbox
const italicTag = document.querySelector(`input[name='italic']`);

// For colors
const colorTags = document.querySelectorAll('div.colors div');

// When the user types in sentenceTag, update the outputTag
// List of KeyboardEvent https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

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
  typesizeOutput.innerHTML = typesizeTag.value + 'px'; // changing HTML span text
  outputTag.style.fontSize = typesizeTag.value + 'px'; // changing CSS style
});

lineheightTag.addEventListener('input', () => {
  lineheightOutput.innerHTML = lineheightTag.value;
  outputTag.style.lineHeight = lineheightTag.value; // outputTag once again, because this is where you change lineheight in CSS
});

// When I click my checkbox, make the outputTag italic
italicTag.addEventListener('change', () => {
  if (italicTag.checked) {
    console.log('Checkbox is checked..');
    outputTag.style.fontStyle = 'italic';
  } else {
    console.log('Checkbox is not checked..');
    outputTag.style.fontStyle = 'normal';
  }
});

// When I pick a specific color, update background color of outputTag
colorTags.forEach((colorTag) => {
  colorTag.addEventListener('click', () => {
    outputTag.style.backgroundColor = colorTag.style.backgroundColor;
    outputTag.style.color = colorTag.style.color;

    //Go throught all tags and remove selected
    colorTags.forEach((notSelected) => {
      notSelected.classList.remove('selected');
    });

    // Add selected class
    colorTag.classList.add('selected');
  });
});
