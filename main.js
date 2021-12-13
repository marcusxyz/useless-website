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

// For color picker
const colorTags = document.querySelectorAll('div.colors div');

// Array of placeholders
const placeholder = [
  'The quick brown fox jumps over the lazy dog',
  'All questions asked by five watched experts amaze the judge.',
  'In Baghdad, a quail gawked at a camel playing sexy lo-fi Peruvian jazz.',
  'My girl wove six dozen plaid jackets before she quit.',
];

// Generate a random placeholder
const randomPlaceholder = () => {
  const random = Math.floor(Math.random() * placeholder.length);
  document.querySelector('.placeholder').placeholder = placeholder[random];
  outputTag.value = placeholder[random];

  // When the user types in sentenceTag, update the outputTag
  sentenceTag.addEventListener('keyup', () => {
    if (sentenceTag.value) {
      outputTag.value = sentenceTag.value;
    } else {
      // If no value is given, put back the placeholder text
      outputTag.value = placeholder[random];
    }
  });
};
randomPlaceholder();

// Typing from textarea
outputTag.addEventListener('keyup', () => {
  sentenceTag.value = outputTag.value;
});

// When I change my typesize slider, update the span text and change font size in outputTag
typesizeTag.addEventListener('input', () => {
  typesizeOutput.textContent = typesizeTag.value + 'px'; // changing HTML span text
  outputTag.style.fontSize = typesizeTag.value + 'px'; // changing CSS style
});

lineheightTag.addEventListener('input', () => {
  lineheightOutput.textContent = lineheightTag.value;
  outputTag.style.lineHeight = lineheightTag.value;
});

// When I click my checkbox, make the outputTag italic
italicTag.addEventListener('change', () => {
  if (italicTag.checked) {
    outputTag.style.fontStyle = 'italic';
  } else {
    outputTag.style.fontStyle = 'normal';
  }
});

// When I pick a specific color, update background color of outputTag
colorTags.forEach((colorTag) => {
  colorTag.addEventListener('click', () => {
    outputTag.style.backgroundColor = colorTag.style.backgroundColor;
    outputTag.style.color = colorTag.style.color;

    //Go through all tags and remove selected
    colorTags.forEach((notSelected) => {
      notSelected.classList.remove('selected');
    });

    // Add selected class
    colorTag.classList.add('selected');
  });
});
