describe('findAndReplace', function() {

  it.skip('returns a string', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.');
  });

  it('returns true if the strings match', function() {
    expect(findAndReplace('Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.')).to.equal(true);
  });


});
