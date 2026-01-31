const { expect } = require("chai");

const calculator = require("../app/calculator");

describe("Calculator Tests", function () {

  it("PASS: add(5,2) expected 7", function () {
    const result = calculator.add(5, 2);
    try {
      expect(result).to.equal(7);
      console.log("PASS: add(5,2) expected 7");
    } catch (err) {
      console.log("FAIL: add(5,2) expected 7");
      throw err;
    }
  });

  it("FAIL: add(5,2) expected 8", function () {
    const result = calculator.add(5, 2);
    try {
      expect(result).to.equal(8);
      console.log("PASS: add(5,2) expected 8");
    } catch (err) {
      console.log("FAIL: add(5,2) expected 8");
      throw err;
    }
  });

  it("PASS: sub(5,2) expected 3", function () {
    const result = calculator.sub(5, 2);
    try {
      expect(result).to.equal(3);
      console.log("PASS: sub(5,2) expected 3");
    } catch (err) {
      console.log("FAIL: sub(5,2) expected 3");
      throw err;
    }
  });

  it("FAIL: sub(5,2) expected 5", function () {
    const result = calculator.sub(5, 2);
    try {
      expect(result).to.equal(5);
      console.log("PASS: sub(5,2) expected 5");
    } catch (err) {
      console.log("FAIL: sub(5,2) expected 5");
      throw err;
    }
  });

  it("PASS: mul(5,2) expected 10", function () {
    const result = calculator.mul(5, 2);
    try {
      expect(result).to.equal(10);
      console.log("PASS: mul(5,2) expected 10");
    } catch (err) {
      console.log("FAIL: mul(5,2) expected 10");
      throw err;
    }
  });

  it("FAIL: mul(5,2) expected 12", function () {
    const result = calculator.mul(5, 2);
    try {
      expect(result).to.equal(12);
      console.log("PASS: mul(5,2) expected 12");
    } catch (err) {
      console.log("FAIL: mul(5,2) expected 12");
      throw err;
    }
  });


  it("PASS: div(10,2) expected 5", function () {
    const result = calculator.div(10, 2);
    try {
      expect(result).to.equal(5);
      console.log("PASS: div(10,2) expected 5");
    } catch (err) {
      console.log("FAIL: div(10,2) expected 5");
      throw err;
    }
  });

  it("FAIL: div(10,2) expected 2", function () {
    const result = calculator.div(10, 2);
    try {
      expect(result).to.equal(2);
      console.log("PASS: div(10,2) expected 2");
    } catch (err) {
      console.log("FAIL: div(10,2) expected 2");
      throw err;
    }
  });
});
