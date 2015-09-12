findAndReplace = function(phrase, wordToReplace, replacementWord) {

  if (phrase.includes(wordToReplace)) {
    return replaceWords(phrase, wordToReplace, replacementWord);
  } else {
    return ('Uh Oh... you are trying to find a word that is not contained in the phrase');
  }
}

replaceWords = function(phrase, wordToReplace, replacementWord) {
  return phrase = phrase.replace(wordToReplace, replacementWord);
}
