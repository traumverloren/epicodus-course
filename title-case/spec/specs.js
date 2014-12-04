describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    titleCase("cat").should.equal("Cat");
  });

  it("capitalizes the first letter of multiple words in a string", function() {
    titleCase("cat dog").should.equal("Cat Dog");
  });

});
