// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 5 when inputs are 1.4 and 3.6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });
    
    it('should return 0 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -3 when inputs are 1.4 and 3.6', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.6), -3);
    });
      
    it('should return -2 when inputs are -1.4 and 1.4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 1.4), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.25 when inputs are 1.4 and 3.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.6), 0.25);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2.5 when inputs are 4.6 and 2.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.6, 2.2), 2.5);
    });
  });
});
