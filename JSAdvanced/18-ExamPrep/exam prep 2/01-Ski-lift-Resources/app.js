window.addEventListener('load', solve);

function solve() {
  let firstNameRef = document.getElementById('first-name');
  let lastNameRef = document.getElementById('last-name');
  let peopleCountRef = document.getElementById('people-count');
  let fromDateRef = document.getElementById('from-date');
  let daysRef = document.getElementById('days-count');

  let btnNextStepRef = document.getElementById('next-btn');
  let ticketPreviewRef = document.querySelector('.ticket-info-list');
  let confirmTicketsRef = document.querySelector('.confirm-ticket');

  let mainDiv = document.getElementById('main');
  let body = document.getElementById('body');

  btnNextStepRef.addEventListener('click', onClick);
  function onClick(e) {
    e.preventDefault();
    if (
      !firstNameRef.value ||
      !lastNameRef.value ||
      !peopleCountRef.value ||
      !fromDateRef.value ||
      !daysRef.value
    ) {
      return;
    }
    //li
    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'ticket');
    //article
    let articleELement = document.createElement('article');
    //h3
    let h3Element = document.createElement('h3');
    h3Element.textContent = `Name: ${firstNameRef.value} ${lastNameRef.value}`;
    //p
    let pDateElement = document.createElement('p');
    pDateElement.textContent = `From date: ${fromDateRef.value}`;
    //p
    let pDaysElement = document.createElement('p');
    pDaysElement.textContent = `For ${daysRef.value} days`;
    //p
    let pPeopleElement = document.createElement('p');
    pPeopleElement.textContent = `For ${peopleCountRef.value} people`;

    //edit and continue buttons
    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    //appending starts here
    articleELement.appendChild(h3Element);
    articleELement.appendChild(pDateElement);
    articleELement.appendChild(pDaysElement);
    articleELement.appendChild(pPeopleElement);
    //now we append the article inside the li
    liElement.appendChild(articleELement);
    //now the 2 buttons inside the li element we created
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    //appending the ready li element with article inside the ticketPreview
    ticketPreviewRef.appendChild(liElement);
    // data for edit button saved
    let dataFirstName = firstNameRef.value;
    let dataLastName = lastNameRef.value;
    let dataPeopleCount = peopleCountRef.value;
    let dataFromDate = fromDateRef.value;
    let dataDays = daysRef.value;
    //clear the inputs
    firstNameRef.value = '';
    lastNameRef.value = '';
    peopleCountRef.value = '';
    fromDateRef.value = '';
    daysRef.value = '';
    //we turn off next step btn
    btnNextStepRef.disabled = true;

    //reference to the edit  button
    editBtn.addEventListener('click', onEditClick);
    function onEditClick() {
      firstNameRef.value = dataFirstName;
      lastNameRef.value = dataLastName;
      peopleCountRef.value = dataPeopleCount;
      fromDateRef.value = dataFromDate;
      daysRef.value = dataDays;
      liElement.remove();
      btnNextStepRef.disabled = false;
    }
    //reference to the continue  button
    continueBtn.addEventListener('click', onContinueClick);
    function onContinueClick() {
      let liElementConfirm = document.createElement('li');
      liElementConfirm.setAttribute('class', 'ticket-content');

      // Assign the reference of articleElement to articleReservation
      let confirmInfo = articleELement;

      let confirmBtn = document.createElement('button');
      confirmBtn.setAttribute('class', 'confirm-btn');
      confirmBtn.textContent = 'Confirm';

      let cancelBtn = document.createElement('button');
      cancelBtn.setAttribute('class', 'cancel-btn');
      cancelBtn.textContent = 'Cancel';

      liElementConfirm.appendChild(confirmInfo);
      liElementConfirm.appendChild(confirmBtn);
      liElementConfirm.appendChild(cancelBtn);
      liElement.remove();
      confirmTicketsRef.appendChild(liElementConfirm);

      cancelBtn.addEventListener('click', onCancelClick);
      function onCancelClick() {
        liElementConfirm.remove();
        btnNextStepRef.disabled = false;
      }
      confirmBtn.addEventListener('click', onConfirmClick);
      function onConfirmClick() {
        mainDiv.remove();
        let h1Element = document.createElement('h1');
        h1Element.setAttribute('id', 'thank-you');
        h1Element.textContent = 'Thank you, have a nice day!';

        let backBtn = document.createElement('button');
        backBtn.setAttribute('id', 'back-btn');
        backBtn.textContent = 'Back';

        body.appendChild(h1Element);
        body.appendChild(backBtn);
        // append the h1 element and the back btn

        backBtn.addEventListener('click', () => location.reload());
      }
    }
  }
}
