const assert = require('assert');
const calculateNumber = require('./0-calcul');

// testing the function
describe('0-calcul.test.js', () => {
  describe('Calculate Number: a = 2, b = 3', () => {
    it('return the sum of 2 and 3 as 5', () => {
      const result = calculateNumber(2, 3);
      assert.strictEqual(result, 5);
    });
  });

  describe('Calculate Number: a = 2.1, b = 3', () => {
    it('return the sum of 2.1 and 3 as 5', () => {
      const result = calculateNumber(2.1, 3);
      assert.strictEqual(result, 5);
    });
  });

  describe('Calculate Number: a = 2.4, b = 3', () => {
    it('return the sum of 2.4 and 3 as 5', () => {
      const result = calculateNumber(2.4, 3);
      assert.strictEqual(result, 5);
    });
  });

  describe('Calculate Number: a = 2, b = 3.1', () => {
    it('return the sum of 2 and 3.1 as 5', () => {
      const result = calculateNumber(2, 3.1);
      assert.strictEqual(result, 5);
    });
  });

  describe('Calculate Number: a = 2, b = 3.4', () => {
    it('return the sum of 2 and 3.4 as 5', () => {
      result = calculateNumber(2, 3.4);
      assert.strictEqual(result, 5);
    });
  });

  describe('Calculate Number: a = 2.5, b = 3', () => {
    it('return the sum of 2.5 and 3 as 6', () => {
      const result = calculateNumber(2.5, 3);
      assert.strictEqual(result, 6);
    });
  });

  describe('Calculate Number', () => {
    it('return the sum of 2 and 3.5 as 6', () => {
      const result = calculateNumber(2, 3.5);
      assert.strictEqual(result, 6);
    });
  });

  describe('Calculate Number', () => {
    it('return the sum of 2.6 and 3.5 as 7', () => {
      const result = calculateNumber(2.6, 3.5);
      assert.strictEqual(result, 7);
    });
  });

  // negative numbers
  describe('Calculate Number: a = -2.1, b = 3', () => {
    it('return the sum of -2.1 and 3 as 1', () => {
      const result = calculateNumber(-2.1, 3);
      assert.strictEqual(result, 1);
    });
  });

  describe('Calculate Number: a = -2.4, b = 3', () => {
    it('return the sum of -2.4 and 3 as 1', () => {
      const result = calculateNumber(-2.4, 3);
      assert.strictEqual(result, 1);
    });
  });

  describe('Calculate Number: a = 2, b = -3.1', () => {
    it('return the sum of 2 and -3.1 as -1', () => {
      const result = calculateNumber(2, -3.1);
      assert.strictEqual(result, -1);
    });
  });

  describe('Calculate Number: a = 2, b = -3.4', () => {
    it('return the sum of 2 and -3.4 as -1', () => {
      result = calculateNumber(2, -3.4);
      assert.strictEqual(result, -1);
    });
  });

  describe('Calculate Number: a = 2.5, b = 3', () => {
    it('return the sum of -2.5 and 3 as 1', () => {
      const result = calculateNumber(-2.5, 3);
      assert.strictEqual(result, 1);
    });
  });

  describe('Calculate Number', () => {
    it('return the sum of 2 and -3.5 as -2', () => {
      const result = calculateNumber(2, -3.5);
      assert.strictEqual(result, -1);
    });
  });

  describe('Calculate Number', () => {
    it('return the sum of -2.6 and -3.5 as -7', () => {
      const result = calculateNumber(-2.6, -3.5);
      assert.strictEqual(result, -6);
    });
  });
});
