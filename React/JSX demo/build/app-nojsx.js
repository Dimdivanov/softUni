//getting root element
var rootHtmlEl = document.getElementById('root');
//root react element
var rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
var reactElementOne = React.createElement('h1', null, 'This is JSX, React element 1');
var reactElementTwo = React.createElement('h2', null, 'React element 2');

var reactElementHeader = React.createElement('header', null, reactElementOne, reactElementTwo); //children example
//render
rootReactEl.render(reactElementHeader);