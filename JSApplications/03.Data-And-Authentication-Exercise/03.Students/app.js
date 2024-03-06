window.addEventListener('load', extractStudents);

const formRef = document.getElementById('form');
const firstNameRef = document.querySelector('input[name="firstName"]');
const lastNameRef = document.querySelector('input[name="lastName"]');
const facultyNumRef = document.querySelector('input[name="facultyNumber"]');
const gradeRef = document.querySelector('input[name="grade"]');

const url = 'http://localhost:3030/jsonstore/collections/students';

formRef.addEventListener('submit', onSubmit);
async function onSubmit(ev) {
  ev.preventDefault();

  const formData = new FormData(formRef);

  const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(
    formData.entries()
  );

  await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
  });
  extractStudents();
}

async function extractStudents(ev) {
  const response = await fetch(url);

  let data = await response.json();
  Object.values(data).forEach((element) => {
    if (!element.hasOwnProperty('firstName')) {
      return;
    }
    const modifiedElement = removeLastKeyAndValue(element);
    tdCreator(modifiedElement);
  });
}
function removeLastKeyAndValue(obj) {
  const newObj = {};
  const keys = Object.keys(obj);
  const lastKey = keys.pop();

  keys.forEach((key) => {
    newObj[key] = obj[key];
  });

  return newObj;
}
function tdCreator(data) {
  const tbodyRef = document.querySelector('tbody');
  const trElement = document.createElement('tr');

  Object.values(data).forEach((el) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = el;
    trElement.appendChild(tdElement);
  });

  tbodyRef.appendChild(trElement);
}
