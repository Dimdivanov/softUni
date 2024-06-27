//getting root element
const rootHtmlEl = document.getElementById('root');
//root react element
const rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
const reactElementOne = React.createElement('h1', null, 'This is JSX, React element 1');
const reactElementTwo = React.createElement('h2', null, 'React element 2');

const reactElementHeader = React.createElement('header', null, reactElementOne, reactElementTwo); //children example
//render
rootReactEl.render(reactElementHeader);
