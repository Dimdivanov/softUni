const eventBus = require('./eventBus');

eventBus.subscribe('user-add', (userName, age) => {
  console.log(`New user ${userName}, ${age} years old is added`);
});

const unsub = eventBus.subscribe('user-add', () => {
  console.log('User 2 added');
});
eventBus.subscribe('user-add', () => {
  console.log('User 3 added');
});

eventBus.publish('user-add', 'Pesho', 32);
unsub();
eventBus.publish('user-add', 'Pesho', 32);
