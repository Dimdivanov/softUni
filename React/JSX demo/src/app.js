//getting root element
const rootHtmlEl = document.getElementById('root');
//root react element
const rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
const reactElement = React.createElement('h1', null, 'This is JSX, React element');
//render
rootReactEl.render(reactElement);
