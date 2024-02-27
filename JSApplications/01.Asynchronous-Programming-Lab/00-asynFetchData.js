async function fetchData() {
  console.log('Start fetching data');

  // Asynchronously fetch data
  const response = await fetch('https://api.github.com/users/testnakov/repos');

  // The program will pause here until the fetch operation is complete
  console.log('Data fetched:', response);

  // Continue with other parts of the code
  console.log('Continue with other tasks');
}

fetchData();
