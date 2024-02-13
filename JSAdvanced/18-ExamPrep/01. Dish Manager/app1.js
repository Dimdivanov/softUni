window.addEventListener("load", solve);

function solve() {
  const firstNameInputEl = document.getElementById('first-name')
  const lastNameInputEl = document.getElementById('last-name')
  const ageInputEl = document.getElementById('age');
  const genderInputEl = document.getElementById('genderSelect');
  const descTextareaEl = document.getElementById('task');
  const submitBtnEl = document.getElementById('form-btn');
  const inProgressEl = document.getElementById('in-progress');
  const finishedEl = document.getElementById('finished');
  const clearBtnEl = document.getElementById('clear-btn');
  const inProgressDishesEl = document.getElementById('progress-count');

  submitBtnEl.addEventListener('click', (e) => {
      e.preventDefault();

      let firstName = firstNameInputEl.value;
      let lastName = lastNameInputEl.value;
      let age = ageInputEl.value;
      let gender = genderInputEl.value;
      let desc = descTextareaEl.value;

      if (!firstName || !lastName || !age || !gender || !desc) {
          return;
      }
      
      const liEl = document.createElement('li');
      liEl.classList.add('each-line');

      const articleEl = document.createElement('article');

      const h4NameEl = document.createElement('h4');
      h4NameEl.textContent = `${firstName} ${lastName}`;

      const pGenderAgeEl = document.createElement('p');
      pGenderAgeEl.textContent = `${gender}, ${age}`;

      const pDescEl = document.createElement('p');
      pDescEl.textContent = `Dish description: ${desc}`;

      articleEl.appendChild(h4NameEl);
      articleEl.appendChild(pGenderAgeEl);
      articleEl.appendChild(pDescEl);

      const editBtnEl = document.createElement('button');
      editBtnEl.classList.add('edit-btn');
      editBtnEl.textContent = 'Edit';

      const completeBtnEl = document.createElement('button');
      completeBtnEl.classList.add('complete-btn');
      completeBtnEl.textContent = 'Mark as complete';

      liEl.appendChild(articleEl);
      liEl.appendChild(editBtnEl);
      liEl.appendChild(completeBtnEl);

      inProgressEl.appendChild(liEl);
      
      inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) + 1;

      firstNameInputEl.value = '';
      lastNameInputEl.value = '';
      ageInputEl.value = '';
      genderInputEl.value = '';
      descTextareaEl.value = '';

      editBtnEl.addEventListener('click', (e) => {
          e.preventDefault();
          inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) - 1;


          firstNameInputEl.value = firstName;
          lastNameInputEl.value = lastName;
          ageInputEl.value = age;
          genderInputEl.value = gender;
          descTextareaEl.value = desc;

          liEl.remove();
      });

      completeBtnEl.addEventListener('click', (e) => {
          e.preventDefault();
          inProgressDishesEl.textContent = Number(inProgressDishesEl.textContent) - 1;


          editBtnEl.remove();
          completeBtnEl.remove();

          finishedEl.appendChild(liEl);
      });
  });

  clearBtnEl.addEventListener('click', (e) => {
      e.preventDefault();

      finishedEl.textContent = '';
  });
}