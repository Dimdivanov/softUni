function students() {
  const formRef = document.getElementById('form');

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
  }

  async function extractStudents(ev) {
    const response = await fetch(url);
    const data = await response.json();
    debugger;
    return data;
  }
  extractStudents();
}
students();
