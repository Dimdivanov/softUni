function solve() {
  const taskRef = document.getElementById('task');
  const descRef = document.getElementById('description');
  const dateRef = document.getElementById('date');
  const addBtn = document.getElementById('add');
  const openSect = document
    .querySelectorAll('section')[1]
    .querySelectorAll('div')[1];
  const progSect = document
    .querySelectorAll('section')[2]
    .querySelectorAll('div')[1];
  const completeSect = document
    .querySelectorAll('section')[3]
    .querySelectorAll('div')[1];

  addBtn.addEventListener('click', addTask);

  function addTask(e) {
    e.preventDefault();
    const task = taskRef.value;
    const description = descRef.value;
    const date = dateRef.value;
    // console.log(task, description, date);

    if (!task || !description || !date) {
      return;
    }

    createArticle('OpenTask', 'green', 'red', task, description, date);
  }

  function createArticle(type, btnClass1, btnClass2, task, description, date) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = task;
    const p1 = document.createElement('p');
    p1.textContent = `Description: ${description}`;
    const p2 = document.createElement('p');
    p2.textContent = `Due Date: ${date}`;

    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);

    if (type === 'OpenTask') {
      const divEl = document.createElement('div');
      divEl.className = 'flex';
      const btn1 = document.createElement('button');
      btn1.textContent = 'Start';
      btn1.className = btnClass1;
      btn1.addEventListener('click', () => {
        deleteTask(article);
        createArticle('ProgressTask', 'red', 'orange', task, description, date);
      });

      const btn2 = document.createElement('button');
      btn2.textContent = 'Delete';
      btn2.className = btnClass2;
      btn2.addEventListener('click', () => deleteTask(article));

      divEl.appendChild(btn1);
      divEl.appendChild(btn2);
      article.appendChild(divEl);
      openSect.appendChild(article);
    } else if (type === 'ProgressTask') {
      const divEl = document.createElement('div');
      divEl.className = 'flex';
      const btn1 = document.createElement('button');
      btn1.textContent = 'Delete';
      btn1.className = btnClass1;
      btn1.addEventListener('click', () => {
        deleteTask(article);
      });

      const btn2 = document.createElement('button');
      btn2.textContent = 'Finish';
      btn2.className = btnClass2;
      btn2.addEventListener('click', () => {
        deleteTask(article);
        createArticle('CompleteTask', null, null, task, description, date);
      });

      divEl.appendChild(btn1);
      divEl.appendChild(btn2);
      article.appendChild(divEl);
      progSect.appendChild(article);
    } else if (type === 'CompleteTask') {
      completeSect.appendChild(article);
    }

    function deleteTask(article) {
      article.remove();
    }
  }
}
