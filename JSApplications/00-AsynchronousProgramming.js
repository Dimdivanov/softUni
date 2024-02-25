//Asynchronous programming in JS - refers to execution of code that doesn't run
//sequantially from top to bottom, instead it allows certain operations
//to be deffered and executed independently of the main program flow - when dealing with tasks that require some time to complete.

//Key concepts and mechanisms used in asynchronous programming:

//CALLBACKS
//= Callbacks are function that are passed as arguments by other functions
//== which will be invoked after completion of particular task
function fetchData(callback) {
  //asynchronous operation
  setTimeout(() => {
    const data = 'Some fetched data';
    callback(data);
  }, 1000);
}
fetchData((result) => console.log(result));

console.log('=================');
//PROMISES
//= cleaner and more structured way to handle asynchronous operations
//== promises represent value that may be available - now, in future or never
//== it has 'resolve' and 'reject' functions that are used to indicate the success or failure of an async operation
//Example1:

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
  setTimeout(resolve, 2000, 'Bye!'); // 3rd is data in reject function
}
function onSuccess(data) {
  console.log(data);
}
function onError(error) {
  console.log('Encountered error:', error);
}
console.log('=================');

//

//FETCH
// method that allows making network requests
//= uses Promises
//= enables simple and cleaner API
//= makes code more readable and maintainable
//== the response of fetch() is a STREAM object
//== the reading of the stream happens asynchronosly
//== in the example bellow when json() method is called a PROMISE is returned ->
//=== the response is checked before parsing the json
let url = 'https://api.github.com/users/testnakov/repos';

// Making a simple GET request using fetch
fetch(url)
  .then((response) => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Process the retrieved data
    console.log('Data:', data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
//1. fetch function used to make a GET request to the url
//2. first then() checks if response is successful if not error
//3. second then() parses the response as JSON.
//4. catch() handles any error that may occur during fetch
