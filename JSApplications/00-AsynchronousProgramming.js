//Asynchronous programming in JS - refers to execution of code that doesn't run
//sequantially from top to bottom, instead it allows certain operations
//to be deffered and executed independently of the main program flow - when dealing with tasks that require some time to complete.

//key concepts and mechanisms used in asynchronous programming in JS:

//CALLBACKS
//= Callbacks are function that are passed as arguments by other functions
//== which will be invoked after completion of particular task - used to define what to happen after task finishes
function fetchData(callback) {
  //asynchronous operation
  setTimeout(() => {
    const data = 'Some fetched data';
    callback(data);
  }, 1000);
}
fetchData((result) => console.log(result));

//PROMISES
//= cleaner and more structured way to handle asynchronous operations
//== promises represent value that may be available - now, in future or never
//== it has 'resolve' and 'reject' functions that are used to indicate the success or failure of an async operation
