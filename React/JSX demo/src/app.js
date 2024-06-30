//getting root element
const rootHtmlEl = document.getElementById('root');
//root react element
const rootReactEl = ReactDOM.createRoot(rootHtmlEl);
//create basic react element
const reactElementHeader = (
  <header>
    <h1>Hello from JSX REACT</h1>
    <h2>JSX is awesome les go</h2>
    <p>lorem bla bla text</p>
  </header>
); //children example

//Creating componen without jsx

function Main(props) {
  return React.createElement(
    'main',
    {},
    React.createElement('h3', {}, props.title),
    React.createElement(
      'ul',
      {},
      React.createElement('li', {}, 'The Matrix'),
      React.createElement('li', {}, 'Man of steel')
    )
  );
}
//Adding the main function which creates elements with children
const siteContent = React.createElement(
  'div',
  {},
  reactElementHeader,
  React.createElement(Main, { title: 'Best movies' })
);
const newContent = (
  <div>
    {reactElementHeader}
    <Main title="Best ALABALA" />
  </div>
);
//render
rootReactEl.render(newContent);

//used commands
/* 
Step 1: Run npm init -y (if it fails, here’s a fix)
Step 2: Run npm install babel-cli@6 babel-preset-react-app@3
Step 3: npx babel --watch src --out-dir . --presets react-app/prod
*/
