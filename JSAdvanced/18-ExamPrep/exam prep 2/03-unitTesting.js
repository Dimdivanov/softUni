describe('isGoodLocation', () => {
  it('test with invalid parameters', () => {
    assert.throw(() => findNewApartment.isGoodLocation(5, 'Pesho'));
    assert.throw(() => findNewApartment.isGoodLocation('Pesho', 5));
    assert.throw(() => findNewApartment.isGoodLocation(5, true));
    assert.throw(() => findNewApartment.isGoodLocation(true, 'Pesho'));
  });
  it('test with invalid city', () => {
    assert.equal(
      findNewApartment.isGoodLocation('Shumen', true),
      'This location is not suitable for you.'
    );
    assert.equal(
      findNewApartment.isGoodLocation('Shumen', false),
      'This location is not suitable for you.'
    );
    assert.equal(
      findNewApartment.isGoodLocation('Sofia', false),
      'There is no public transport in area.'
    );
    assert.equal(
      findNewApartment.isGoodLocation('Plovdiv', false),
      'There is no public transport in area.'
    );
  });
  it('test with correct value', () => {
    assert.equal(
      findNewApartment.isGoodLocation('Sofia', true),
      'You can go on home tour!'
    );
    assert.equal(
      findNewApartment.isGoodLocation('Varna', true),
      'You can go on home tour!'
    );
    assert.equal(
      findNewApartment.isGoodLocation('Plovdiv', true),
      'You can go on home tour!'
    );
  });
});

describe('isLargeEnough', () => {
  it('testing with invalid input', () => {
    assert.throw(() => findNewApartment.isLargeEnough('pesho', 'pesho'));
    assert.throw(() => findNewApartment.isLargeEnough([], 'pesho'));
    assert.throw(() =>
      findNewApartment.isLargeEnough(['pesho', 'gosho'], 'Pesho')
    );
    assert.throw(() => findNewApartment.isLargeEnough([], 6));
    assert.throw(() => findNewApartment.isLargeEnough('Pesho', 5));
    assert.throw(() => findNewApartment.isLargeEnough([20, 30, 40], '5'));
    assert.throw(() => findNewApartment.isLargeEnough([20, 30, 40], 'pesho'));
  });
  it('testing with valid value', () => {
    let res = [10, 20, 30];
    assert.equal(
      findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 9),
      res.join(', ')
    );
    assert.equal(
      findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 10),
      res.join(', ')
    );
    assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 50), '');
  });
});

describe('isItAffordable', () => {
  it('testing with invalid input', () => {
    assert.throw(() => findNewApartment.describe('50', '60'));
    assert.throw(() => findNewApartment.describe('pesho', 60));
    assert.throw(() => findNewApartment.describe(50, 'Gosho'));
    assert.throw(() => findNewApartment.describe(-50, 20));
    assert.throw(() => findNewApartment.describe(50, -20));
    assert.throw(() => findNewApartment.describe(20, 0));
    assert.throw(() => findNewApartment.describe(0, 20));
    assert.throw(() => findNewApartment.describe(0, 0));
  });
  it('return value is 0', () => {
    assert.equal(
      findNewApartment.isItAffordable(10, 9),
      "You don't have enough money for this house!"
    );
    assert.equal(
      findNewApartment.isItAffordable(10, 11),
      'You can afford this home!'
    );
    assert.equal(
      findNewApartment.isItAffordable(10, 11),
      'You can afford this home!'
    );
  });
});
