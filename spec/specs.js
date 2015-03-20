describe("triangle", function() {
	it("will determine if input is a equilateral triangle", function() {
		expect(triangle(10, 10, 10)).to.equal("equilateral");
	});

	it("will determine if input is an isosceles triangle", function() {
		expect(triangle(15, 10, 15)).to.equal("isosceles");
	});

	it("will determine if input is a scalene triangle", function() {
		expect(triangle(12, 10, 15)).to.equal("scalene");
	});

	it("will not be a triangle if one side is longer than 2 others combined length", function() {
		expect(triangle(2, 2, 8)).to.equal(false);
	});
});