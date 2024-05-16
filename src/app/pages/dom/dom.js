import html from './dom.html';
import './dom.css';
import items from './items';

const element = document.createElement('div');
element.innerHTML = html;

// find, create, change, add, remove

const rootElement = element;

// Search Elements

const divWrapperElement = rootElement.querySelector('div');
// const divWrapperElement = rootElement.querySelector('.dom-wrapper');
// const divWrapperElement = rootElement.querySelector('[role="table"]');
const tHeadElement = divWrapperElement.querySelector('thead');
const tBodyElement = divWrapperElement.querySelector('tbody');
const templateHeadRow = rootElement.querySelector("template[id='template-head-column']")
const templateRowHead = rootElement.querySelector("template[id='template-row-head']")
const templateRowColumn = rootElement.querySelector("template[id='template-row-column']")

// Create Element
const headRowElement = document.createElement('tr');

for(const column of ['Product Name', 'Color', 'Category', 'Price']) {
    // Clone element
    const columnElement = templateHeadRow.content.children[0].cloneNode(true);

    // Set element content
    columnElement.innerHTML = column;

    // Append Element to another element
    headRowElement.appendChild(columnElement)
}

tHeadElement.appendChild(headRowElement)

const createRowColumn = (content) => {
    const rowColumn = templateRowColumn.content.children[0].cloneNode();
    rowColumn.innerHTML = content;
    return rowColumn;
}

for(const item of items) {
    const bodyRowElement = document.createElement('tr');

    // add css class
    bodyRowElement.classList.add('dom-table-row')

    const rowHead = templateRowHead.content.children[0].cloneNode();

    bodyRowElement.appendChild(rowHead)
    bodyRowElement.appendChild(createRowColumn(item.name));
    bodyRowElement.appendChild(createRowColumn(item.color));
    bodyRowElement.appendChild(createRowColumn(item.price));
    rowHead.innerHTML = item.name;

    tBodyElement.appendChild(bodyRowElement)
}


// change style
// divWrapperElement.style.borderBottom = '1px';
// divWrapperElement.style.borderBottomStyle = 'solid';
// divWrapperElement.style.borderBottomColor = 'var(--main-color)';

// divWrapperElement.style = 'border-bottom: 1px solid var(--main-color);';

// Remove Element
const lastRow = divWrapperElement.querySelector('tbody>tr:last-child');
// setTimeout(() => lastRow.remove(), 4000);
// setTimeout(() => tBodyElement.removeChild(lastRow), 4000);

// setTimeout(() => {
//   const classAttribute = lastRow.getAttribute('class');
//   lastRow.setAttribute('class', classAttribute + ' highlight');
// }, 2000);

// setTimeout(() => lastRow.removeAttribute('class'), 4000);

export default () => element;