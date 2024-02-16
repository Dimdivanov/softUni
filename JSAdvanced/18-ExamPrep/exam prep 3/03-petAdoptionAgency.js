describe('petAdoptionAgency', () => {
  describe('isPetAvailable', () => {
    it('test with invalid inputs', () => {
      assert.throw(() => petAdoptionAgency.isPetAvailable(10, 20, true)); //ako pyrvoto e greshno
      assert.throw(() =>
        petAdoptionAgency.isPetAvailable('dog', 'pesho', false)
      ); //ako vtoroto e greshno
      assert.throw(() => petAdoptionAgency.isPetAvailable('dog', 10, 'Gosho')); //ako treto e greshno
    });
    it('test with valid inputs', () => {
      assert.equal(
        petAdoptionAgency.isPetAvailable('dog', 0, true),
        `Sorry, there are no dog(s) available for adoption at the agency.`
      );
      assert.equal(
        petAdoptionAgency.isPetAvailable('dog', 2, true),
        `Great! We have 2 vaccinated dog(s) available for adoption at the agency.`
      );
      assert.equal(
        petAdoptionAgency.isPetAvailable('dog', 3, false),
        `Great! We have 3 dog(s) available for adoption, but they need vaccination.`
      );
    });
  });

  describe('getRecommendedPets', () => {
    const recommendedPets = [
      { name: 'Peshoo', traits: 'Calm' },
      { name: 'Goshoo', traits: 'Calm' },
      { name: 'Kiro', traits: 'Cuddly' },
    ];
    it('test with invalid inputs', () => {
      assert.throw(() => petAdoptionAgency.getRecommendedPets(10, 'pesho'));
    });

    it('test with invalid inputs', () => {
      assert.throw(() => petAdoptionAgency.getRecommendedPets([], 100));
    });

    it('test with valid inputs', () => {
      const result = petAdoptionAgency.getRecommendedPets(
        recommendedPets,
        'Calm'
      );
      assert.equal(
        result,
        `Recommended pets with the desired traits (Calm): Peshoo, Goshoo`
      );
    });

    it('test with valid inputs', () => {
      const result = petAdoptionAgency.getRecommendedPets(
        recommendedPets,
        'Sleepy'
      );
      assert.equal(
        result,
        `Sorry, we currently have no recommended pets with the desired traits: Sleepy.`
      );
    });
  });

  describe('adoptPet', () => {
    it('invalid inputs', () => {
      assert.throw(() => petAdoptionAgency.adoptPet('Pesho', 20));
      assert.throw(() => petAdoptionAgency.adoptPet(20, 'Gosho'));
    });
    it('success adoption', () => {
      assert.equal(
        petAdoptionAgency.adoptPet('dog', 'Pesho'),
        `Congratulations, Pesho! You have adopted dog from the agency. Enjoy your time with your new furry friend!`
      );
    });
  });
});
