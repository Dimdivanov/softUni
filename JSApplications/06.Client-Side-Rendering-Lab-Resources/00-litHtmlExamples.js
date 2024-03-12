import { html, render } from 'lit-html';
//Example 1 by render() template
let sayHello = (name) =>
  html`<h1>Hello ${name}</h1>
    <div></div> `;
render(sayHello('World'), document.body);

// Example 2 by tagged template - TAG
function greet() {
  console.log(arguments[0]); // array
  console.log(arguments[1]); // name
  console.log(arguments[2]); // age
}
greet`I'm ${name1}. I'm ${age} years old.`;

// Example 3 by attribute binding - CLASS
const myTemplate1 = (data) => html`<div class=${data.cssClass}>Stylish text.</div>`;
//class=${data.cssClass} - можем да задаваме класове

// ? prefix for a boolean attribute binding - булеви атрибути - ATTRIBUTES
//== ако ?disabled е true ще постави елемента ако е false ще се появи disabled
const myTemplate2 = (data) => html`<div?disabled=${!data.active}>Stylish text.</div>`;

// Example 4 property binding - You can also bind to a node's JavaScript properties using the '.' prefix and the property name - PROPERTY
//= .value = ${} в HTML-a няма да видим сетнат атрибут с някаква стойност ако сетваме пропърти махаме точката, за стойност я слагаме
const myTemplate3 = (data) => html`<input.value=${data.value}></input>`;

// Example 5 handling events - @ adding event listeners
const appRootTemplate = (ctx) => html`<div><h1 @click=${ctx.handleClick}>${ctx.title}</h1></div>`;
//== @click{func(просто функция)=> alert('button has been clicked')}

// Example 6 conditional statements
//= lit-html has no built-in control-flow constructs we can use TERNARY operator
html`${user.isloggedIn ? html`Welcome ${user.name}` : html`Please log in`}`;

// bonus if we put ${null} - ако искаме нещо да го няма може да ползваме null - nothing directive - като екстеншън

// Example 7 list rendering
//= ${items.map((item) => html`<li>${item}</li>`)} - директно мапваме - лит взима всеки елемент и си го прави

// Directives: classes and classMap
// classMap directive lets you set a group of classes based on an object
/* 
директива е като декоратор функция от библиотеката
import { classMap } from './node_modules/lithtml/directives/class-map.js'; 
const itemTemplate = (item) => {
по кратък начин да управляваме елементи с множество класове
 const classes = { selected(ще вземе този ключ и ще го зададе като клас): item.selected(ако това е true) };
 return html`<div class="menu-item
${classMap(classes)}">Classy text</div>`;
} 
*/
// styles and styleMap - пак като клас ако имаме много стилове на даден елемент правим обект
/* const styles = {
    color: red,
    backgroundColor: hightlight ? blue : black
}
html`<div style=${styleMap(styles)}>Classy text</div>` 
*/

//Repeat - малко по адванс мап - по-ефективно откъм ъпдейти да ползва базата данни
// partial rendering
