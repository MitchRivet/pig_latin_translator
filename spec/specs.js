describe('pigLatin', function() {

  it("returns word that begins with an a with an ay attached to the end", function() {
    expect(pigLatin("array")).to.equal("arrayay");
  });

  it("returns word that begins with another vowel with an ay attached to the end", function() {
    expect(pigLatin("easy")).to.equal("easyay");
  });

  it("returns sentence that has multiple vowel words correctly", function() {
    expect(pigLatin("easy array")).to.equal("easyay arrayay");
  });

  it("returns word that begins with a single consonant with the consonant at the end with ay", function() {
    expect(pigLatin("bake")).to.equal("akebay");
  });

  it("returns word that begins with multiple consonants with the consonant set at the end with ay", function() {
    expect(pigLatin("chair")).to.equal("airchay");
  });

  it("returns word that begins with qu with qu at then end and ay", function() {
    expect(pigLatin("quest")).to.equal("estquay");
  });

  it("returns sentence containing all of these rulse", function() {
    expect(pigLatin("he went on a chair quest")).to.equal("ehay entway onay a airchay estquay");
  });
  
});
