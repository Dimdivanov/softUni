async function lockedProfile() {
  const divRef = document.querySelector('.profile');
  const main = document.getElementById('main');

  let url = 'http://localhost:3030/jsonstore/advanced/profiles';

  const response = await fetch(url);
  const data = await response.json();
  let entries = Object.values(data);

  let usernameRef = document.querySelector('input[name="user1Username"]');
  usernameRef.value = entries[0].username;
  let emailRef = document.querySelector('input[name="user1Email"]');
  emailRef.value = entries[0].email;
  let ageRef = document.querySelector('input[name="user1Age"]');
  ageRef.value = entries[0].age;

  const userDivHide = document.querySelector('.user1Username');
  userDivHide.style.display = 'none';

  for (let i = 1; i < entries.length; i++) {
    const clonedProfileCard = divRef.cloneNode(true);

    const radioBtnLock = clonedProfileCard.querySelector('input[value="lock"]');
    radioBtnLock.name = `user${i + 1}Locked`;
    radioBtnLock.checked = false;

    const radioBtnUnlock = clonedProfileCard.querySelector(
      'input[value="unlock"]'
    );
    radioBtnUnlock.name = `user${i + 1}Locked`;
    radioBtnUnlock.checked = false;

    const clonedUsernameRef = clonedProfileCard.querySelector(
      'input[name="user1Username"]'
    );
    clonedUsernameRef.value = entries[i].username;
    clonedUsernameRef.name = `user${i + 1}Username`;
    clonedUsernameRef.setAttribute('value', entries[i].username);

    const userDivHide = clonedProfileCard.querySelector('.user1Username');
    userDivHide.setAttribute('class', `user${i + 1}Hiddenfields`); //edit here
    userDivHide.style.display = 'none';

    const clonedEmailRef = clonedProfileCard.querySelector(
      'input[name="user1Email"]'
    );
    clonedEmailRef.value = entries[i].email;
    clonedEmailRef.name = `user${i + 1}Email`;
    clonedEmailRef.setAttribute('value', entries[i].email);

    const clonedAgeRef = clonedProfileCard.querySelector(
      'input[name="user1Age"]'
    );
    clonedAgeRef.value = entries[i].age;
    clonedAgeRef.name = `user${i + 1}Age`;
    clonedAgeRef.setAttribute('value', entries[i].age);

    main.appendChild(clonedProfileCard);
  }

  let showMoreBtn = Array.from(document.querySelectorAll('button'));
  for (let btn of showMoreBtn) {
    btn.addEventListener('click', showMore);
  }

  function showMore(event) {
    let target = event.target;
    let hiddenDiv = target.previousElementSibling;
    let radioRef = target.parentElement.querySelector(
      'input[type="radio"]:checked'
    );

    if (
      radioRef &&
      (radioRef.value === 'lock' || radioRef.value === 'unlock')
    ) {
      if (radioRef.value == 'unlock') {
        if (target.textContent == 'Show more') {
          target.textContent = 'Hide it';
          hiddenDiv.style.display = 'block';
        } else {
          target.textContent = 'Show more';
          hiddenDiv.style.display = 'none';
        }
      }
    }
  }
}
