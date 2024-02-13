window.addEventListener('load', solve);

function solve() {
  //1. GETTING THE INFORMATION FROM THE FORM:

  let firstNameRef = document.getElementById('first-name');
  let lastNameRef = document.getElementById('last-name');
  let ageRef = document.getElementById('age');
  let genderRef = document.getElementById('genderSelect');
  let descriptionRef = document.getElementById('task');

  let submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', submit);

  let counter = document.getElementById('progress-count');
  let count = 0;

  function submit(event) {
    event.preventDefault();
    let firstNameValue = firstNameRef.value;
    let lastNameValue = lastNameRef.value;
    let ageValue = ageRef.value;
    let genderValue = genderRef.value;
    let descriptionValue = descriptionRef.value;

    if (
      firstNameValue != '' &&
      lastNameValue != '' &&
      ageValue != '' &&
      descriptionValue != '' &&
      genderValue != ''
    ) {
      let inProgressUl = document.getElementById('in-progress');

      let li = document.createElement('li');
      li.className = 'each-line';

      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      h4.textContent = `${firstNameValue} ${lastNameValue}`;
      article.appendChild(h4);
      let pGenderAndAge = document.createElement('p');
      pGenderAndAge.textContent = `${genderValue}, ${ageValue}`;
      article.appendChild(pGenderAndAge);
      let pDescription = document.createElement('p');
      pDescription.textContent = `Dish description: ${descriptionValue}`;
      article.appendChild(pDescription);

      li.appendChild(article);

      let editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', edit);
      li.appendChild(editBtn);

      let completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = 'Mark as complete';
      completeBtn.addEventListener('click', complete);
      li.appendChild(completeBtn);
      count++;

      inProgressUl.appendChild(li);
      counter.textContent = count;

      firstNameRef.value = '';
      lastNameRef.value = '';
      ageRef.value = '';
      genderRef.value = '';
      descriptionRef.value = '';
    }
  }

  //2. EDIT INFORMATION FOR POSTS:

  function edit(event) {
    event.preventDefault();

    let li = event.currentTarget.parentElement;
    let article = li.children[0];
    let articleChildren = article.children;
    li.remove();

    let [firstName, lastName] = articleChildren[0].textContent.split(' ');
    let [gender, age] = articleChildren[1].textContent.split(', ');
    let [text, description] = articleChildren[2].textContent.split(': ');

    firstNameRef.value = firstName;
    lastNameRef.value = lastName;
    ageRef.value = age;
    genderRef.value = gender;
    descriptionRef.value = description;

    count--;
    counter.textContent = count;
  }

  //3. COMPLETE POSTS:

  function complete(event) {
    event.preventDefault();

    let li = event.currentTarget.parentElement;
    let ulFinished = document.getElementById('finished');
    let [firstBtn, secondBtn] = li.querySelectorAll('button');
    firstBtn.remove();
    secondBtn.remove();

    // CHANGE MADE: CLONE THE NODE INSTEAD OF COPYING INNERHTML
    let newLi = li.cloneNode(true);

    li.remove();

    ulFinished.appendChild(newLi);

    count--;
    counter.textContent = count;
  }

  //4. CLEAR POSTS:
  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clear);

  function clear(event) {
    event.preventDefault();
    let ulFinished = document.getElementById('finished');
    ulFinished.textContent = '';
  }
}
