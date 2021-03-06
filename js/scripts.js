findAndReplace = function(phrase, wordToReplace, replacementWord) {

  if (phrase.includes(wordToReplace)) {
    return replaceWords(phrase, wordToReplace, replacementWord);
  } else {
    return ('Uh Oh... you are trying to replace a word or words that are not contained in the phrase');
  }
}

replaceWords = function(phrase, wordToReplace, replacementWord) {
  return phrase = phrase.replace(wordToReplace, replacementWord);
}

$(document).ready(function() {
  $('form#find-and-replace').submit(function(event) {
    var phrase = $('input#phrase').val();
    var wordToReplace = $('input#word-to-replace').val();
    var replacementWord = $('input#replacement-word').val();
    var newPhrase = findAndReplace(phrase, wordToReplace, replacementWord);

    $('.phrase').text(phrase);
    $('.word-to-replace').text(wordToReplace);
    $('.replacement-word').text(replacementWord);
    $('.new-phrase').text(newPhrase);



    $("#result").show();
    event.preventDefault();
  });
});
