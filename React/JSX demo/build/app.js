//getting root element
var rootHtmlEl = document.getElementById('root');
//root react element
var rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
var reactElementHeader = React.createElement(
  'header',
  null,
  React.createElement(
    'h1',
    null,
    'Hello from JSX REACT'
  ),
  React.createElement(
    'h2',
    null,
    'JSX is awesome les go'
  ),
  React.createElement(
    'p',
    null,
    'lorem bla bla text'
  )
); //children example
//render
rootReactEl.render(reactElementHeader);