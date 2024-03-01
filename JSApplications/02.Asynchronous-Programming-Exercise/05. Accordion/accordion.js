async function solution() {
  const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
  const response = await fetch(url);
  const data = await response.json();
  for (let el of data) {
    let { _id, title } = el;
    creatingStructure(_id, title);
  }
}

function creatingStructure(id, title) {
  const mainDiv = document.getElementById('main');

  let divAccordionRef = document.createElement('div');
  divAccordionRef.setAttribute('class', 'accordion');

  let divHead = document.createElement('div');
  divHead.setAttribute('class', 'head');

  let spanHead = document.createElement('span');
  spanHead.textContent = title;

  let btn = document.createElement('button');
  btn.setAttribute('class', 'button');
  btn.id = id;
  btn.textContent = 'More';

  let divExtra = document.createElement('div');
  divExtra.setAttribute('class', 'extra');
  divExtra.setAttribute('hidden', true);

  let p = document.createElement('p');
  divExtra.appendChild(p);

  divHead.appendChild(spanHead);
  divHead.appendChild(btn);

  divAccordionRef.appendChild(divHead);
  divAccordionRef.appendChild(divExtra);

  mainDiv.appendChild(divAccordionRef);
  btn.addEventListener('click', onClickMore);
  async function onClickMore(ev) {
    const btn = ev.target;
    const currentId = btn.id;
    const divExtra = btn.parentNode.nextElementSibling;

    if (divExtra.style.display === '' || divExtra.style.display === 'none') {
      const urlDetails =
        'http://localhost:3030/jsonstore/advanced/articles/details/';
      const response = await fetch(urlDetails + currentId);
      const data = await response.json();

      p.textContent = data.content;
      divExtra.style.display = 'inline-block';
      btn.textContent = 'Less';
    } else {
      divExtra.style.display = 'none';
      btn.textContent = 'More';
    }
  }
}

solution();
