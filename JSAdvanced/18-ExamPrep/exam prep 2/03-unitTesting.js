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
    assert.throw(() => findNewApartment.isLargeEnough());
  });
});

describe('isItAffordable', () => {
  it('testing with invalid input', () => {});
});
