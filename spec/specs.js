describe('findAndReplace', function() {

  it.skip('returns a string', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.');
  });

  it.skip('returns true if the strings match', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.', 'Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal(true);
  });

  it.skip('returns true if the string contains a specified phrase', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.', 'coversheet')).to.equal(true);
  });

  it.skip('returns false if the string does not contain the specified phrase', function() {
    expect(findAndReplace('Short ribs andouille pig shankle, spare ribs anim enim eu dolore deserunt.', 'grains')).to.equal(false);
  });

  it('replaces a word in a phrase with another word', function() {
    expect(replaceWords('If there\'s nothing more important than my ego around, I want it caught and shot now.', 'nothing', 'anything')).to.equal('If there\'s anything more important than my ego around, I want it caught and shot now.')
  });

  it('returns an error message if the replacement word is not contained within the phrase', function() {
    expect(replaceWords('Disturbing the peace?  I got thrown out of a window!', 'nothing', 'anything')).to.equal('Uh Oh...');
  });

});

describe('replaceWords', function() {

  it('replaces a word in a phrase with another word', function() {
    expect(replaceWords('Time is an illusion. Reality doubly so.', 'Reality', 'Lunchtime')).to.equal('Time is an illusion. Lunchtime doubly so.')
  });

});
