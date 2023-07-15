import { LoremIpsum } from 'https://cdn.jsdelivr.net/npm/lorem-ipsum@2.0.8/+esm';

(function () {
  const lorem = new LoremIpsum();
  const numberInput = document.querySelector('.number-input');
  const submitBtn = document.querySelector('.btn-submit');
  const copyBtn = document.querySelector('.btn-copy');
  const textOutput = document.querySelector('.text-output');

  submitBtn.addEventListener('click', () =>
    outputText(generateParagraphs(parseInt(numberInput.value)))
  );

  copyBtn.addEventListener('click', copyText);

  function generateParagraphs(numParagraphs) {
    if (numParagraphs < 1 || numParagraphs > 20 || isNaN(numParagraphs)) {
      numParagraphs = 1;
    }
    return lorem.generateParagraphs(numParagraphs);
  }

  function outputText(text) {
    textOutput.value = text;
  }

  function copyText() {
    textOutput.select();
    textOutput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textOutput.value);
  }
})();
