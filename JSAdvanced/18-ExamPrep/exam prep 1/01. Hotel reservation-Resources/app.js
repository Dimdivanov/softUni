window.addEventListener('load', solve);

function solve() {
  let firstNameRef = document.getElementById('first-name');
  let lastNameRef = document.getElementById('last-name');
  let dateInRef = document.getElementById('date-in');
  let dateOutRef = document.getElementById('date-out');
  let peopleCountRef = document.getElementById('people-count');

  let btnNextRef = document.getElementById('next-btn');
  let reservationInfoRef = document.querySelector('.info-list');
  let confirmInfoRef = document.querySelector('.confirm-list');
  let confirmationInfoRef = document.getElementById('verification');

  btnNextRef.addEventListener('click', clickNextBtn);
  function clickNextBtn(event) {
    event.preventDefault();
    if (
      firstNameRef.value == '' ||
      lastNameRef.value == '' ||
      dateInRef.value == '' ||
      dateOutRef.value == '' ||
      peopleCountRef.value == '' ||
      new Date(dateInRef.value).getTime() >=
        new Date(dateOutRef.value).getTime()
    ) {
      return;
    }

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'reservation-content');

    let articleElement = document.createElement('article');

    let h3Element = document.createElement('h3');
    h3Element.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;

    let fromDatePara = document.createElement('p');
    fromDatePara.textContent = `From date: ${dateInRef.value}`;

    let toDatePara = document.createElement('p');
    toDatePara.textContent = `To date: ${dateOutRef.value}`;

    let peopleCountPara = document.createElement('p');
    peopleCountPara.textContent = `For ${peopleCountRef.value} people`;

    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'edit-btn');
    btnEdit.textContent = 'Edit';

    let btnContinue = document.createElement('button');
    btnContinue.setAttribute('class', 'continue-btn');
    btnContinue.textContent = 'Continue';

    articleElement.appendChild(h3Element);
    articleElement.appendChild(fromDatePara);
    articleElement.appendChild(toDatePara);
    articleElement.appendChild(peopleCountPara);

    liElement.appendChild(articleElement);
    liElement.appendChild(btnEdit);
    liElement.appendChild(btnContinue);

    reservationInfoRef.appendChild(liElement);

    let newFirstNameVal = firstNameRef.value;
    let newLastNameVal = lastNameRef.value;
    let newDateInVal = dateInRef.value;
    let newDateOutVal = dateOutRef.value;
    let newPeopleCountVal = peopleCountRef.value;

    firstNameRef.value = '';
    lastNameRef.value = '';
    dateInRef.value = '';
    dateOutRef.value = '';
    peopleCountRef.value = '';

    btnNextRef.disabled = true;

    btnEdit.addEventListener('click', editClicked);
    function editClicked() {
      firstNameRef.value = newFirstNameVal;
      lastNameRef.value = newLastNameVal;
      dateInRef.value = newDateInVal;
      dateOutRef.value = newDateOutVal;
      peopleCountRef.value = newPeopleCountVal;

      liElement.remove();

      btnNextRef.disabled = false;
    }

    btnContinue.addEventListener('click', continueClicked);
    function continueClicked() {
      let liElementConfirm = document.createElement('li');
      liElementConfirm.setAttribute('class', 'reservation-content');

      // Assign the reference of articleElement to articleReservation
      let articleReservation = articleElement;

      let confirmBtn = document.createElement('button');
      confirmBtn.setAttribute('class', 'confirm-btn');
      confirmBtn.textContent = 'Confirm';

      let cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('class', 'cancel-btn');
      cancelBtn.textContent = 'Cancel';

      liElementConfirm.appendChild(articleReservation);
      liElementConfirm.appendChild(confirmBtn);
      liElementConfirm.appendChild(cancelBtn);
      liElement.remove();

      confirmInfoRef.appendChild(liElementConfirm);

      confirmBtn.addEventListener('click', confirmClicked);
      function confirmClicked() {
        liElementConfirm.remove();
        btnNextRef.disabled = false;

        confirmationInfoRef.setAttribute('class', 'reservation-confirmed');
        confirmationInfoRef.textContent = 'Confirmed.';
      }

      cancelBtn.addEventListener('click', cancelClicked);
      function cancelClicked() {
        liElementConfirm.remove();
        btnNextRef.disabled = false;

        confirmationInfoRef.setAttribute('class', 'reservation-cancelled');
        confirmationInfoRef.textContent = 'Cancelled.';
      }
    }
  }
}
