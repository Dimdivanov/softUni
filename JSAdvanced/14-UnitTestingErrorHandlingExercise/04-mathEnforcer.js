describe('mathEnforcer', () => {
  describe('test addFive functionality', () => {
    it('addFive(num) NOT a number', () => {
      assert.isUndefined(mathEnforcer.addFive('5'), undefined);
      assert.isUndefined(mathEnforcer.addFive('5.005'), undefined);
      assert.isUndefined(mathEnforcer.addFive({}), undefined);
      assert.isUndefined(mathEnforcer.addFive([]), undefined);
      assert.isUndefined(mathEnforcer.addFive('Gosho'), undefined);
      assert.isUndefined(mathEnforcer.addFive(''), undefined);
      assert.isUndefined(mathEnforcer.addFive(undefined), undefined);
    });
    it('addFive(num) if a number', () => {
      assert.equal(mathEnforcer.addFive(-6.1), -1.0999999999999996);
      assert.equal(mathEnforcer.addFive(-5.005), -0.004999999999999893);
      assert.equal(mathEnforcer.addFive(-5), 0, 'calculations here');
      assert.equal(mathEnforcer.addFive(-6), -1, 'calculations here');
      assert.equal(mathEnforcer.addFive(-7.5), -2.5, 'calculations here');
      assert.equal(mathEnforcer.addFive(-2.5), 2.5, 'calculations here');
      assert.equal(mathEnforcer.addFive(0), 5, 'calculations here');
      assert.equal(mathEnforcer.addFive(5.5), 10.5, 'calculations here');
      assert.equal(mathEnforcer.addFive(10.05), 15.05, 'calculations here');
      assert.equal(mathEnforcer.addFive(10.005), 15.005);
    });
  });
  describe('test subtractTen functionality', () => {
    it('subtractTen(num) NOT a number', () => {
      assert.equal(mathEnforcer.subtractTen('5'), undefined);
      assert.equal(mathEnforcer.subtractTen({}), undefined);
      assert.equal(mathEnforcer.subtractTen([]), undefined);
      assert.equal(mathEnforcer.subtractTen('Pesho'), undefined);
      assert.equal(mathEnforcer.subtractTen(''), undefined);
      assert.equal(mathEnforcer.subtractTen(undefined), undefined);
    });

    it('subtractTen(num) subtract 10 if number ', () => {
      assert.equal(mathEnforcer.subtractTen(0), -10, 'calc');
      assert.equal(mathEnforcer.subtractTen(8.5), -1.5, 'calc');
      assert.equal(mathEnforcer.subtractTen(9), -1, 'calculations here');
      assert.equal(mathEnforcer.subtractTen(12.5), 2.5, 'calc here');
      assert.equal(mathEnforcer.subtractTen(10), 0, 'calculations here');
      assert.equal(mathEnforcer.subtractTen(-12.05), -22.05); //here

      assert.equal(mathEnforcer.subtractTen(-22), -32, 'calculations here');
      assert.equal(mathEnforcer.subtractTen(2.2), -7.8, 'calculations');
      assert.equal(mathEnforcer.subtractTen(2.02), -7.98, 'calculations');
    });
  });
  describe('test sum functionality', () => {
    it('sum(num1, num2) NOT a number', () => {
      assert.isUndefined(mathEnforcer.sum('Gosho', 'Pesho'), undefined);
      assert.isUndefined(mathEnforcer.sum('Gosho', []), undefined);
      assert.isUndefined(mathEnforcer.sum({}, 5), undefined);
      assert.isUndefined(mathEnforcer.sum([], 5), undefined);
      assert.isUndefined(mathEnforcer.sum([], 5.005), undefined);

      assert.isUndefined(mathEnforcer.sum('Gosho', 5), undefined);
      assert.isUndefined(mathEnforcer.sum('Gosho', {}), undefined);
      assert.isUndefined(mathEnforcer.sum({}, {}), undefined);
      assert.isUndefined(mathEnforcer.sum([], []), undefined);
      // assert.isUndefined(mathEnforcer.sum(6.5, ''), undefined);
      assert.isUndefined(mathEnforcer.sum(6.005, {}), undefined);
      assert.isUndefined(mathEnforcer.sum({}, 6.005), undefined);

      assert.isUndefined(mathEnforcer.sum(6.5, []), undefined);
      assert.isUndefined(mathEnforcer.sum(10, []), undefined);
      assert.isUndefined(mathEnforcer.sum('6', 'Goshoo'), undefined);
      assert.isUndefined(mathEnforcer.sum(0, 'Goshoo'), undefined);
      assert.isUndefined(mathEnforcer.sum(6, ''), undefined);
      assert.isUndefined(mathEnforcer.sum(10.5, '10'), undefined);
      assert.isUndefined(mathEnforcer.sum('10', 10.5), undefined);
      // assert.isUndefined(mathEnforcer.sum('', 6.5), undefined);
    });

    it('sum(num1, num2) both are number', () => {
      assert.equal(mathEnforcer.sum(0, 0), 0);
      assert.equal(mathEnforcer.sum(2, -3.5), -1.5);
      assert.equal(mathEnforcer.sum(2, -3), -1);
      assert.equal(mathEnforcer.sum(2, -2), 0);
      assert.equal(mathEnforcer.sum(2, 1.5), 3.5);
      assert.equal(mathEnforcer.sum(12.005, 2.006), 14.011000000000001);
      assert.equal(mathEnforcer.sum(2, 2), 4);
      assert.equal(mathEnforcer.sum(2.5, 2.6), 5.1);
      assert.equal(mathEnforcer.sum(-3.5, 2), -1.5);
      assert.equal(mathEnforcer.sum(-3, 2), -1);
      assert.equal(mathEnforcer.sum(-2, 2), 0);
      assert.equal(mathEnforcer.sum(2, 5.5), 7.5);
      assert.equal(mathEnforcer.sum(-2, -5), -7);
      assert.equal(mathEnforcer.sum(-2.5, -2.6), -5.1);
      assert.equal(mathEnforcer.sum(-12.005, -2.006), -14.011000000000001);
    });
  });
});
