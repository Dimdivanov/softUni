window.addEventListener('load', solve);

function solve() {
  const snowmanNameRef = document.getElementById('snowman-name');
  const heightRef = document.getElementById('snowman-height');
  const locationRef = document.getElementById('location');
  const creatorRef = document.getElementById('creator-name');
  const atributeRef = document.getElementById('special-attribute');

  const btnAddRef = document.querySelector('.add-btn');

  const previewRef = document.querySelector('.snowman-preview');
  const snowManContentRef = document.querySelector('.snow-list');

  const mainElementRef = document.getElementById('hero');
  const bodyRef = document.querySelector('.body');
  const imgRef = document.getElementById('back-img');

  btnAddRef.addEventListener('click', onAddClick);
  function onAddClick(e) {
    e.preventDefault();
    if (
      !snowmanNameRef.value ||
      !heightRef.value ||
      !locationRef.value ||
      !creatorRef.value ||
      !atributeRef.value ||
      atributeRef.value === ''
    ) {
      return;
    }
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'snowman-info');

    const articleElement = document.createElement('article');

    const p1Element = document.createElement('p');
    p1Element.textContent = `Name: ${snowmanNameRef.value}`;

    const p2Element = document.createElement('p');
    p2Element.textContent = `Height: ${heightRef.value}`;

    const p3Element = document.createElement('p');
    p3Element.textContent = `Location: ${locationRef.value}`;

    const p4Element = document.createElement('p');
    p4Element.textContent = `Creator: ${creatorRef.value}`;

    const p5Element = document.createElement('p');
    p5Element.textContent = `Attribute: ${atributeRef.value}`;

    //create buttons
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = 'Next';

    //start appending to build structure
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);
    articleElement.appendChild(p3Element);
    articleElement.appendChild(p4Element);
    articleElement.appendChild(p5Element);

    liElement.appendChild(articleElement);

    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('class', 'btn-container');
    liElement.appendChild(btnContainer);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    previewRef.appendChild(liElement);

    //save values
    const newSnowmanNameRef = snowmanNameRef.value;
    const newHeightRef = heightRef.value;
    const newLocationRef = locationRef.value;
    const newCreatorRef = creatorRef.value;
    const newAtributeRef = atributeRef.value;

    snowmanNameRef.value = '';
    heightRef.value = '';
    locationRef.value = '';
    creatorRef.value = '';
    atributeRef.value = '';

    btnAddRef.disabled = true;

    editBtn.addEventListener('click', onEditClick);
    function onEditClick() {
      snowmanNameRef.value = newSnowmanNameRef;
      heightRef.value = newHeightRef;
      locationRef.value = newLocationRef;
      creatorRef.value = newCreatorRef;
      atributeRef.value = newAtributeRef;

      liElement.remove();
      btnAddRef.disabled = false;
    }

    nextBtn.addEventListener('click', onNextBtnClick);
    function onNextBtnClick() {
      const liContentEl = document.createElement('li');
      liContentEl.setAttribute('class', 'snowman-content');
      //all paragraphs here
      const contentArticleEl = articleElement;

      const sendBtn = document.createElement('button');
      sendBtn.setAttribute('class', 'send-btn');
      sendBtn.textContent = 'Send';

      contentArticleEl.appendChild(sendBtn);
      liContentEl.appendChild(contentArticleEl);

      liElement.remove();
      snowManContentRef.appendChild(liContentEl);

      sendBtn.addEventListener('click', sendingClick);

      function sendingClick() {
        mainElementRef.remove();

        imgRef.removeAttribute('hidden');

        const backBtn = document.createElement('button');
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';

        bodyRef.appendChild(backBtn);

        backBtn.addEventListener('click', reloadPage);
        function reloadPage() {
          location.reload();
        }
      }
    }
  }
}

//backBtn.addEventListener('click', () => location.reload());
