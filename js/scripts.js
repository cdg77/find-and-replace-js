findAndReplace = function(phrase, wordToReplace, replacementWord) {

  if (phrase.includes(wordToReplace)) {
    return replaceWords(phrase, wordToReplace, replacementWord);
  }
}

replaceWords = function(phrase, wordToReplace, replacementWord) {
  return phrase = phrase.replace(wordToReplace, replacementWord);
}
