//Requesting Post - Example 1
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  //we take the values of the inputs
  const url = 'random/url';

  try {
    const request = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        /*the values here*/
      }),
    });
    if (!request.ok) {
      const err = await request.json();
      throw new Error(err.message);
    }
    const response = request.json();
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
}
//Example 2 FormData
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(formElement); //gives us iterable element- масив с всички стойности

  const email = data.get('email'); // Read single value - ако знаем имената на полетата
  const entries = [...data.entries()]; // Get array of values

  const { person, phone } = Object.fromEntries(formData.entries());
});
