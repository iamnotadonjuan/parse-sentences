// program that parses a sentence and replaces each word with the following: first letter, number of distinct characters between first and last character, and last letter. Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location in the answer.

const parseSentences = (sentence: string): string => {
  const words = sentence.split(/(\W+)/);
  return words.map((word: string) => {
    // check if word is a word and not a character
    if (/\w+/.test(word)) {
      const firstLetter = word.charAt(0);
      const lastLetter = word.charAt(word.length - 1);
      const distinctChars = word.slice(1, -1)
                        .split('')
                        .filter((value, index, array) => array.indexOf(value) === index);
      return `${firstLetter}${distinctChars.length}${lastLetter}`;
    } else {
      return word;
    }
  }).join('');
}

console.log(parseSentences("Smooth"));
console.log(parseSentences("Space separated"));
console.log(parseSentences("Dash-separated"));
console.log(parseSentences("Number2separated"));