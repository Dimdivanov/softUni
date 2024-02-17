describe('Tests for recipeSelection', () => {
  //test 1
  describe('choosingDestination', () => {
    it('•	choosingDestination if year is different than 2024 Invalid Year', () => {
      assert.throw(
        () => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2000),
        'Invalid Year!'
      );
    });
    it('if the value of the string destination is different from ski resort ', () => {
      assert.throw(
        () => planYourTrip.choosingDestination('Sofia', 'Summer', 2024),
        'This destination is not what you are looking for.'
      );
    });
    it('if valid inputs and season is Winter', () => {
      assert.equal(
        planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024),
        'Great choice! The Winter is the perfect time to visit the Ski Resort.'
      );
    });
    it('if above condition is not met ', () => {
      assert.equal(
        planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024),
        'Consider visiting during the Winter for the best experience at the Ski Resort.'
      );
    });
  });
  //test 2
  describe('exploreOptions', () => {
    let result = ['Skiing', 'Snowboarding', 'Winter Hiking'];
    it('input Validation tests NOT array', () => {
      assert.throw(
        () => planYourTrip.exploreOptions([], 5),
        'Invalid Information!'
      );
    });
    it('input Validation tests NOT array', () => {
      assert.throw(
        () => planYourTrip.exploreOptions({}, 2),
        'Invalid Information!'
      );
    });
    it('input Validation tests NOT array', () => {
      assert.throw(
        () => planYourTrip.exploreOptions('', 3),
        'Invalid Information!'
      );
    });
    it('input Validation tests NOT array', () => {
      assert.throw(
        () => planYourTrip.exploreOptions('pesho', 2),
        'Invalid Information!'
      );
    });
    it('input Validation tests NOT array', () => {
      assert.throw(
        () => planYourTrip.exploreOptions([10, 20, 30], -30),
        'Invalid Information!'
      );
    });
    it('input index is out of limit ', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, -2),
        'Invalid Information!'
      );
    });
    it('input index is out of limit ', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, 'invalid idx'),
        'Invalid Information!'
      );
    });
    it('input index is out of limit ', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(0, 'invalid idx'),
        'Invalid Information!'
      );
    });
    it('input index is out of limit ', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(0, result),
        'Invalid Information!'
      );
    });
    it('input index is out of limit ', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, 200),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, []),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, {}),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, 2.4),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, 3),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, -20.0005),
        'Invalid Information!'
      );
    });
    it('input index is out of limit or not Number', () => {
      assert.throw(
        () => planYourTrip.exploreOptions(result, 200.000005),
        'Invalid Information!'
      );
    });

    it('remove the item from the index activity', () => {
      assert.equal(
        planYourTrip.exploreOptions(result, 0),
        'Snowboarding, Winter Hiking'
      );
    });

    it('remove the item from the index activity', () => {
      assert.equal(
        planYourTrip.exploreOptions(result, 2),
        'Skiing, Snowboarding'
      );
    });
    it('remove the item from the index activity', () => {
      assert.equal(
        planYourTrip.exploreOptions(result, 1),
        'Skiing, Winter Hiking'
      );
    });
  });
  //test 3
  describe('estimateExpenses', () => {
    it('validate the input tests NOT NUMBERS', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses('pesho', 'gosho'),
        'Invalid Information!'
      );
    });
    it('validate the input tests NOT NUMBERS', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses([], []),
        'Invalid Information!'
      );
    });
    it('validate the input tests NOT NUMBERS', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses({}, {}),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(100, 'gosho'),
        'Invalid Information!'
      );
    });
    it('validate the input tests NEGATIVE NUMBERS', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(-100, 5),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(5, -50),
        'Invalid Information!'
      );
    });
    it('validate the input tests First zero ', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(0, 5),
        'Invalid Information!'
      );
    });
    it('validate the input tests Second zero ', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(5, 0),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses('pesho', 2.5),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(100, 0),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(0, 100),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(-20, -5),
        'Invalid Information!'
      );
    });
    it('validate the input tests', () => {
      assert.throw(
        () => planYourTrip.estimateExpenses(0, 0),
        'Invalid Information!'
      );
    });
    it('cost of travel', () => {
      assert.equal(
        planYourTrip.estimateExpenses(100.0, 5.0),
        'The trip is budget-friendly, estimated cost is $500.00.'
      );
    });
    it('cost of less 500', () => {
      assert.equal(
        planYourTrip.estimateExpenses(100.0, 4.0),
        'The trip is budget-friendly, estimated cost is $400.00.'
      );
    });
    it('cost of less 500', () => {
      assert.equal(
        planYourTrip.estimateExpenses(50.5, 1),
        'The trip is budget-friendly, estimated cost is $50.50.'
      );
    });
    it('else return ', () => {
      assert.equal(
        planYourTrip.estimateExpenses(100.0, 9.0),
        'The estimated cost for the trip is $900.00, plan accordingly.'
      );
    });
    it('else return ', () => {
      assert.equal(
        planYourTrip.estimateExpenses(200, 10),
        'The estimated cost for the trip is $2000.00, plan accordingly.'
      );
    });
  });
});
