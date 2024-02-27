//Asynchronous programming in JS - refers to execution of code that doesn't run
//sequantially from top to bottom, instead it allows certain operations
//to be deffered and executed independently of the main program flow - when dealing with tasks that require some time to complete.

//Key concepts and mechanisms used in asynchronous programming:

//CALLBACKS
//= Callbacks are function that are passed as arguments by other functions
//== which will be invoked after completion of particular task
button.addEventListener('click', callbackFn);
function callbackFn() {
  console.log('best examples are evenListeners');
}
//PROMISES
//= cleaner and more structured way to handle asynchronous operations
//== promises represent value that may be available - now, in future or never
//== it has 'resolve' and 'reject' functions that are used to indicate the success or failure of an async operation
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve(`Yes! Resolved the promise!`);
  } else {
    reject(`No! Rejected the promise!`);
  }
});

myPromise
  .then((value) => {
    return value + 100;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error); //No! Rejected the promise!
  });

//= States:
//==Pending - operation is running still - unfinished)
//==Fulfilled - operation finished(result available)
//==Failed - operation failed(error)
//= Promises use Promise class - new Promise(executor);
console.log('Promise Example: Hello');

const p = new Promise(executor);
p.then(onSuccess).catch(onError);

console.log('there!');
function executor(resolve, reject) {
  console.log('executing the executor');
  setTimeout(resolve, 100, 'Bye!'); // 3rd is data in resolve function
}
function onSuccess(data) {
  console.log(data);
}
function onError(error) {
  console.log('Encountered error:', error);
}
console.log('=================');

//FETCH
// method that allows making network requests
//= uses Promises
//= enables simple and cleaner API
//= makes code more readable and maintainable
//== the response of fetch() is a readableSTREAM object
//== the reading of the stream happens asynchronosly

let url = 'https://api.github.com/users/testnakov/repos';
//1. fetch function used to make a GET request to the url
fetch(url)
  .then((response) => {
    //2. first then() checks if response is successful if not error
    // Check if the request was successful (status code 200-299)
    // response.ok - ok is the method of the body of the readableStream
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    //3. second then() parses the response as JSON.
    // Process the retrieved data
    console.log('Data:', data);
  })
  .catch((error) => {
    //4. catch() handles any error that may occur during fetch
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

//Async functions and keyword 'await'
//Example:
async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  } catch (error) {
    console.log(error);
  }
}
