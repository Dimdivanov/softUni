function gladiatorExpenses(lostCount, helmet, sword, shield, armor) {
  let shieldCount = 0;
  let expenses = 0;

  for (let i = 1; i <= lostCount; i++) {
    if (i % 2 === 0) {
      expenses += helmet;
    }
    if (i % 3 === 0) {
      expenses += sword;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shield;
      shieldCount++;
    }
    if (shieldCount % 2 == 0 && shieldCount > 0) {
      expenses += armor;
      shieldCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
