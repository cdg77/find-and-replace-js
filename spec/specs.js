describe('findAndReplace', function() {

  it.skip('returns a string', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.');
  });

  it.skip('returns true if the strings match', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal(true);
  });

  it('returns true if the string contains a specified phrase', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.', 'coversheet')).to.equal(true);
  });

});
