import html from './events.html';
import './events.css'

const element = document.createElement('div')
element.innerHTML = html;

const formElement = element.querySelector('form');
//const middleElement = document.getElementById('middle-element')
const middleElement = element.querySelector('[id="middle-element"]')
const buttonElement = formElement.querySelector('button')

//formElement.addEventListener('mouseenter', () => console.log('mouseenter'))
//formElement.addEventListener('mouseleave', () => console.log('mouseleave'))

middleElement.addEventListener('click', (e) => {
    console.log('bubbling', e.target, e.currentTarget)
    e.stopPropagation();
})

middleElement.addEventListener('click', (e) => {
    console.log('capturing', e.target, e.currentTarget)
    //e.stopPropagation();
}, true)
//
// formElement.addEventListener('click', (e) => {
//     console.log(e.target, e.currentTarget)
// })
//
// buttonElement.addEventListener('click', (e) => {
//     console.log(e.target, e.currentTarget)
//     //e.stopPropagation();
// });

// middleElement.addEventListener(
//     'click',
//     (e) => {
//         console.log(e.target, e.currentTarget)
//     },
//     true)
//
//
// formElement.addEventListener('click', (e) => {
//     console.log(e.target, e.currentTarget)
//     e.stopPropagation()
// }, true)
//
// buttonElement.addEventListener('click', (e) => {
//     console.log(e.target, e.currentTarget)
// }, true);


// Remove Listener
// const onButtonClick = e => console.log('button has been clicked');
// buttonElement.addEventListener('click', onButtonClick)
// setTimeout(() => buttonElement.removeEventListener('click', onButtonClick), 2000)


export default () => element;