describe('lookupChar', () => {
  it('undefined', () => {
    assert.strictEqual(lookupChar(2, 2), undefined);
  });
  it('undefined', () => {
    assert.strictEqual(lookupChar('test', '2'), undefined);
  });
  it('undefined', () => {
    assert.strictEqual(lookupChar('test', 1.23), undefined);
  });
  it('Incorrect index', () => {
    assert.strictEqual(lookupChar('test', 20), 'Incorrect index');
  });
  it('Incorrect index', () => {
    assert.strictEqual(lookupChar('hello', 5), 'Incorrect index');
  });
  it('Incorrect index', () => {
    assert.strictEqual(lookupChar('hello', -3), 'Incorrect index');
  });
  it('char at the specified index', () => {
    assert.strictEqual(lookupChar('hello', 4), 'o');
  });
  it('char at the specified index', () => {
    assert.strictEqual(lookupChar('hello', 3), 'l');
  });
});
