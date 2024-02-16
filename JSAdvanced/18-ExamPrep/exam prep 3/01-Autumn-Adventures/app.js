window.addEventListener('load', solve);

function solve() {
  //input ref
  const timeRef = document.getElementById('time');
  const dateRef = document.getElementById('date');
  const placeRef = document.getElementById('place');
  const eventRef = document.getElementById('event-name');
  const emailRef = document.getElementById('email');
  //add btn ref
  const addEventBtn = document.getElementById('add-btn');
  //sections ref directly in the 'ul'
  const lastCheckFieldRef = document.getElementById('check-list');
  const upcomingFieldRef = document.getElementById('upcoming-list');
  const finishedFieldRef = document.getElementById('finished-list');
  //clear btn
  const clearBtnRef = document.getElementById('clear');
  //add event
  addEventBtn.addEventListener('click', onAddEventClick);
  function onAddEventClick() {
    //if value doesnt exist return
    if (
      !timeRef.value ||
      !dateRef.value ||
      !placeRef.value ||
      !eventRef.value ||
      !emailRef.value
    ) {
      return;
    }
    //building the HTML structure
    // li element
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'event-content');
    // arcitle element
    const articleElement = document.createElement('article');
    // p elements
    const p1Element = document.createElement('p');
    p1Element.textContent = `Begins: ${dateRef.value} at: ${timeRef.value}`;
    const p2Element = document.createElement('p');
    p2Element.textContent = `In: ${placeRef.value}`;
    const p3Element = document.createElement('p');
    p3Element.textContent = `Event: ${eventRef.value}`;
    const p4Element = document.createElement('p');
    p4Element.textContent = `Contact: ${emailRef.value}`;
    //button 1
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';
    //button 2
    const continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';
    // start appending follow the structure path p1,p2,p3,p4
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);
    articleElement.appendChild(p3Element);
    articleElement.appendChild(p4Element);
    // append the complete article
    liElement.appendChild(articleElement);
    //append the buttons
    liElement.appendChild(editBtn);
    liElement.appendChild(continueBtn);
    //append the complete structure + with the buttons
    lastCheckFieldRef.appendChild(liElement);

    //save value data in new varibles
    const newTimeRef = timeRef.value;
    const newDateRef = dateRef.value;
    const newPlaceRef = placeRef.value;
    const newEventRef = eventRef.value;
    const newEmailRef = emailRef.value;
    //set values to '' after clicking the add event
    timeRef.value = '';
    dateRef.value = '';
    placeRef.value = '';
    eventRef.value = '';
    emailRef.value = '';
    // and disable the button add event
    addEventBtn.disabled = true;

    editBtn.addEventListener('click', onEditBtnClick);
    function onEditBtnClick() {
      timeRef.value = newTimeRef;
      dateRef.value = newDateRef;
      placeRef.value = newPlaceRef;
      eventRef.value = newEventRef;
      emailRef.value = newEmailRef;

      liElement.remove();
      addEventBtn.disabled = false;
    }

    continueBtn.addEventListener('click', onContinueBtnClick);
    function onContinueBtnClick() {
      const newLiElement = document.createElement('li');
      //we copy the full article
      const newArticle = articleElement;

      const finishBtn = document.createElement('button');
      finishBtn.setAttribute('class', 'finished-btn');
      finishBtn.textContent = 'Move to Finished';

      newLiElement.appendChild(newArticle);
      newLiElement.appendChild(finishBtn);

      liElement.remove();
      upcomingFieldRef.appendChild(newLiElement);
      addEventBtn.disabled = false;

      finishBtn.addEventListener('click', onFinishClick);
      function onFinishClick() {
        const finishLiElement = document.createElement('li');

        const finishArticle = newArticle;

        newLiElement.remove();
        finishLiElement.appendChild(finishArticle);
        finishedFieldRef.appendChild(finishLiElement);

        clearBtnRef.addEventListener('click', onClear);
        function onClear() {
          finishLiElement.remove();
        }
      }
    }
  }
}
