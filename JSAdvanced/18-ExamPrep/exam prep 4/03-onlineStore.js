describe('Tests for onlineStore', function () {
  describe('isProductAvailable', function () {
    it("should return 'Great! Product is available for purchase.' when stock quantity is greater than 0", function () {
      const result = onlineStore.isProductAvailable('Product A', 5);
      assert.equal(result, 'Great! Product A is available for purchase.');
    });
    it("should throw an error 'Invalid input' for non-number inputs", function () {
      assert.throws(
        () => onlineStore.isProductAvailable('invalid', 'invalid'),
        'Invalid input'
      );
    });

    it("should throw an error 'Invalid input' for non-number inputs", function () {
      assert.throws(
        () => onlineStore.isProductAvailable(100, 100),
        'Invalid input'
      );
    });
    it("should return 'Sorry, Product is currently out of stock.' when stock quantity is 0", function () {
      const result = onlineStore.isProductAvailable('Product B', 0);
      assert.equal(result, 'Sorry, Product B is currently out of stock.');
    });
  });

  describe('canAffordProduct', function () {
    it("should return 'Product purchased. Your remaining balance is $50.' when affordable", function () {
      const result = onlineStore.canAffordProduct(50, 100);
      assert.equal(result, 'Product purchased. Your remaining balance is $50.');
    });

    it("should return 'You don't have sufficient funds to buy this product.' when not affordable", function () {
      const result = onlineStore.canAffordProduct(200, 100);
      assert.equal(
        result,
        "You don't have sufficient funds to buy this product."
      );
    });

    it("should throw an error 'Invalid input' for non-number inputs", function () {
      assert.throws(
        () => onlineStore.canAffordProduct('invalid', 100),
        'Invalid input'
      );
    });

    it("should throw an error 'Invalid input' for non-number inputs", function () {
      assert.throws(
        () => onlineStore.canAffordProduct(100, 'invalid'),
        'Invalid input'
      );
    });
  });

  describe('getRecommendedProducts', function () {
    const productList = [
      { name: 'Product A', category: 'Category 1' },
      { name: 'Product B', category: 'Category 2' },
      { name: 'Product C', category: 'Category 1' },
    ];

    it('should return a list of recommended products in the specified category', function () {
      const result = onlineStore.getRecommendedProducts(
        productList,
        'Category 1'
      );
      assert.equal(
        result,
        'Recommended products in the Category 1 category: Product A, Product C'
      );
    });

    it("should return 'Sorry, we currently have no recommended products in the Category 3 category.' when no recommended products", function () {
      const result = onlineStore.getRecommendedProducts(
        productList,
        'Category 3'
      );
      assert.equal(
        result,
        'Sorry, we currently have no recommended products in the Category 3 category.'
      );
    });

    it("should throw an error 'Invalid input' for invalid input parameters", function () {
      assert.throws(
        () => onlineStore.getRecommendedProducts('invalid', 'Category 1'),
        'Invalid input'
      );
    });

    it("should throw an error 'Invalid input' for invalid input parameters", function () {
      assert.throws(
        () =>
          onlineStore.getRecommendedProducts(
            [{ name: 'Product A', category: 'Category 1' }],
            100
          ),
        'Invalid input'
      );
    });
  });
});
