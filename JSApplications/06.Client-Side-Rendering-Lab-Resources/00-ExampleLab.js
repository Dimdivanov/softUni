import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives';
import { styleMap } from 'lit-html/directives';

// directives - това са части от библиотеката html
const articles = ['Article 1', 'Article 2', 'Article 3'];

let disabled = true;

const classes = {
  red: true,
  underline: true,
};
const styles = {
  backgroundColor: 'orange', //тук подаваме стрингове
  padding: '16px',
};
const template = (name, value, articles) => html`
  <!-- classMap -->
  <h1 class=${classMap(classes)}>Hello, ${name}</h1>
  <p style=${styleMap(styles)}>This part should not update</p>
  <!-- if disabled is true button will be disabled-->
  <button ?disabled=${disabled}>Experimental button</button>
  <!-- @ adds event listener and we pass a func-->
  <button @click=${onClick}>Experimental button</button>
  <!-- we set the value to 5 (textcontent) -->
  <input .value=${value} />
  <ul>
    <!-- можем да подадем директно масив вместо да мапваме-->
    <!-- list rendering -->
    ${articles.map((el) => html`<li>${el}</li>`)}
  </ul>
  <!-- ако искаме нещо да го няма Null -->
  <p>${null}</p>
`;

const root = document.querySelector('main');

document.querySelector('button').addEventListener('click', () => {
  render(template('Dynamic content'), root);
});

render(template('lit-html', 5, articles), root); //(function with 2 params, root)

function onClick(event) {
  //global reference вкарано
  alert('button has been clicked');
}

/*примерен обект
    const class = {color(key): red{стойност}} 
    и така не ни се налага да пишем 20 реда код в class=${}
    като задаваме класове на 
*/
//classMap(обект)
//styleMap същото като classMap
//repeat - при елементи с id-та
