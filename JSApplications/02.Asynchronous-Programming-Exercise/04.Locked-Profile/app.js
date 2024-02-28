async function lockedProfile() {
  const url = 'http://localhost:3030/jsonstore/advanced/profiles';
  const response = await fetch(url);
  const information = await response.json();

  const main = document.getElementById('main');
  main.replaceChildren(...Object.values(information).map(printProfileCard));
}

function printProfileCard(info) {
  const { age, email, username, _id } = info;
  const div = createCard(age, email, username, _id);
  return div;
}

function createCard(age, email, username, id) {
  const mainDiv = createEl('div', '', 'profile');

  const img = createEl('img', '', 'userIcon');
  img.src = './iconProfile2.png';
  const labelLock = createEl('label', 'Lock');
  const lockInput = createInput('radio', username, 'lock', true, false);
  const labelUnlock = createEl('label', 'Unlock');
  const unlockInput = createInput('radio', username, 'unlock');
  const br = document.createElement('br');
  const hr = document.createElement('hr');
  const labelUsername = createEl('label', 'Username');
  const userInp = createInput('text', 'user1Username', username, false, true);
  const showBtn = createEl('button', 'Show more');
  showBtn.addEventListener('click', showMore);

  const hiddenDiv = createEl('div');
  hiddenDiv.id = id;
  const labelEmail = createEl('label', 'Email');
  const inputEmail = createInput('email', 'user1Email', email, false, true);
  const labelAge = createEl('label', 'Age');
  const inputAge = createInput('email', 'user1Age', age, false, true);
  hiddenDiv.style.display = 'none';

  appender(
    hiddenDiv,
    document.createElement('hr'),
    labelEmail,
    inputEmail,
    labelAge,
    inputAge
  );
  appender(
    mainDiv,
    img,
    labelLock,
    lockInput,
    labelUnlock,
    unlockInput,
    br,
    hr,
    labelUsername,
    userInp,
    hiddenDiv,
    showBtn
  );

  return mainDiv;
}

function showMore() {
  let lockBtn = this.parentElement.querySelector('input[value="lock"]').checked;
  const hiddenContent = this.parentElement.getElementsByTagName('div')[0];

  if (lockBtn == false) {
    if (this.textContent === 'Show more') {
      hiddenContent.style.display = 'block';
      this.textContent = 'Hide it';
    } else if (this.textContent === 'Hide it') {
      hiddenContent.style.display = 'none';
      this.textContent = 'Show more';
    }
  }
}

function createEl(type, cont, className) {
  const el = document.createElement(type);
  el.textContent = cont;
  className ? el.classList.add(className) : '';
  return el;
}

function createInput(type, name, value, checked, disabled) {
  const el = document.createElement('input');
  let atrributes = {
    type: type,
    name: name,
    value: value,
  };

  if (checked) {
    atrributes.checked = true;
  }

  if (disabled) {
    atrributes.disabled = true;
    atrributes.readonly = true;
  }

  for (let key in atrributes) {
    el.setAttribute(key, atrributes[key]);
  }
  return el;
}

function appender(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}
// async function lockedProfile() {
//   const divRef = document.querySelector('.profile');
//   const main = document.getElementById('main');

//   let url = 'http://localhost:3030/jsonstore/advanced/profiles';

//   const response = await fetch(url);
//   const data = await response.json();
//   let entries = Object.values(data);

//   let usernameRef = document.querySelector('input[name="user1Username"]');
//   usernameRef.value = entries[0].username;
//   let emailRef = document.querySelector('input[name="user1Email"]');
//   emailRef.value = entries[0].email;
//   let ageRef = document.querySelector('input[name="user1Age"]');
//   ageRef.value = entries[0].age;

//   const userDivHide = document.querySelector('.user1Username');
//   userDivHide.style.display = 'none';

//   for (let i = 1; i < entries.length; i++) {
//     const clonedProfileCard = divRef.cloneNode(true);
//     const radioBtnLock = clonedProfileCard.querySelector('input[value="lock"]');
//     radioBtnLock.name = `${entries[i].username}`;
//     radioBtnLock.checked = true;

//     const radioBtnUnlock = clonedProfileCard.querySelector(
//       'input[value="unlock"]'
//     );
//     radioBtnUnlock.name = `${entries[i].username}`;
//     radioBtnUnlock.checked = false;

//     const clonedUsernameRef = clonedProfileCard.querySelector(
//       'input[name="user1Username"]'
//     );
//     clonedUsernameRef.value = entries[i].username;
//     clonedUsernameRef.name = `${entries[i].username}`;
//     clonedUsernameRef.setAttribute('value', entries[i].username);

//     const userDivHide = clonedProfileCard.querySelector('.user1Username');
//     userDivHide.setAttribute('class', `${entries[i].username}`); //edit here
//     userDivHide.style.display = 'none';

//     const clonedEmailRef = clonedProfileCard.querySelector(
//       'input[name="user1Email"]'
//     );
//     clonedEmailRef.value = entries[i].email;
//     clonedEmailRef.name = `user${i + 1}Email`;
//     clonedEmailRef.setAttribute('value', entries[i].email);

//     const clonedAgeRef = clonedProfileCard.querySelector(
//       'input[name="user1Age"]'
//     );
//     clonedAgeRef.value = entries[i].age;
//     clonedAgeRef.name = `user${i + 1}Age`;
//     clonedAgeRef.setAttribute('value', entries[i].age);

//     main.appendChild(clonedProfileCard);
//   }

//   let showMoreBtn = Array.from(document.querySelectorAll('button'));
//   for (let btn of showMoreBtn) {
//     btn.addEventListener('click', showMore);
//   }
// }
// function showMore(event) {
//   let target = event.target;
//   let hiddenDiv = target.previousElementSibling;
//   let radioRef = target.parentElement.querySelector(
//     'input[type="radio"]:checked'
//   );

//   if (radioRef && (radioRef.value === 'lock' || radioRef.value === 'unlock')) {
//     if (radioRef.value == 'unlock') {
//       if (target.textContent == 'Show more') {
//         target.textContent = 'Hide it';
//         hiddenDiv.style.display = 'inline';
//       } else {
//         target.textContent = 'Show more';
//         hiddenDiv.style.display = 'none';
//       }
//     }
//   }
// }
