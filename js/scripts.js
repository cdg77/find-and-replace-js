findAndReplace = function(phrase, wordToReplace) {

  return phrase.includes(wordToReplace);

}

replaceWords = function(phrase, wordToReplace, replacementWord) {
  return phrase = phrase.replace(wordToReplace, replacementWord);
}
