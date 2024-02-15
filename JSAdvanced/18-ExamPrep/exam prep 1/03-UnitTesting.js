describe('licenseRestriction', () => {
  it('Test with Invalid Information', () => {
    assert.throw(() => motorcycleRider.licenseRestriction('string10'));
    assert.throw(() => motorcycleRider.licenseRestriction('10'));
    assert.throw(() => motorcycleRider.licenseRestriction(10));
  });
  it('if category is:', () => {
    assert.equal(
      motorcycleRider.licenseRestriction('AM'),
      'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
    );
    assert.equal(
      motorcycleRider.licenseRestriction('A1'),
      'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
    );
    assert.equal(
      motorcycleRider.licenseRestriction('A2'),
      'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
    );
    assert.equal(
      motorcycleRider.licenseRestriction('A'),
      'No motorcycle restrictions, and the minimum age is 24.'
    );
  });
});
describe('motorcycleShowroom', () => {
  it('Test with Invalid Information', () => {
    assert.throw(() => motorcycleRider.motorcycleShowroom([], -10));
    assert.throw(() => motorcycleRider.motorcycleShowroom([], 20));
    assert.throw(() => motorcycleRider.motorcycleShowroom(10, []));
    assert.throw(() => motorcycleRider.motorcycleShowroom([1, 2, 3], 'pesho'));
    assert.throw(() => motorcycleRider.motorcycleShowroom(['pesho'], 'pesho'));
  });
  it('Test with Valid Information', () => {
    assert.equal(
      motorcycleRider.motorcycleShowroom(['50', '51'], 50),
      'There are 1 available motorcycles matching your criteria!'
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(['50', '51'], 100),
      'There are 2 available motorcycles matching your criteria!'
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(['50', '51', '100'], 100),
      'There are 3 available motorcycles matching your criteria!'
    );
  });
});
describe('otherSpendings', () => {
  //add more here if not 100/100
  it('Test with Invalid Information', () => {
    assert.throw(() =>
      motorcycleRider.otherSpendings([50, 100, 125], true, [50, 100, 125])
    );
    assert.throw(() =>
      motorcycleRider.otherSpendings(false, [50, 100, 125], [50, 100, 125])
    );
    assert.throw(() =>
      motorcycleRider.otherSpendings(true, {}, [50, 100, 125])
    );
    assert.throw(() => motorcycleRider.otherSpendings({}, {}, false));
  });

  it('test with valid information', () => {
    assert.equal(
      motorcycleRider.otherSpendings(
        ['helmet', 'jacked'],
        ['engine oil', 'oil filter'],
        false
      ),
      'You spend $600.00 for equipment and consumables!'
    );
    assert.equal(
      motorcycleRider.otherSpendings(
        ['helmet', 'jacked'],
        ['engine oil', 'oil filter'],
        true
      ),
      'You spend $540.00 for equipment and consumables with 10% discount!'
    );
  });
});
