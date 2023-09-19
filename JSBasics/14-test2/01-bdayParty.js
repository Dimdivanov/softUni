function bdayParty(input) {
  let rent = Number(input);

  let cake = rent * 0.2;
  let drinks = cake - cake * 0.45;
  let animator = rent / 3;

  let budget = rent + cake + drinks + animator;
  console.log(budget);
}
bdayParty(['3720']);
