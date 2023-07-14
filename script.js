import { LoremIpsum } from 'https://cdn.jsdelivr.net/npm/lorem-ipsum@2.0.8/+esm';

const lorem = (function () {
  const lorem = new LoremIpsum();
  console.log(lorem);
  function generateParagraphs(numParagraphs) {
    console.log(numParagraphs);
    return lorem.generateParagraphs(numParagraphs);
  }
  return {
    generateParagraphs,
  };
})();

console.log(lorem.generateParagraphs(2));
