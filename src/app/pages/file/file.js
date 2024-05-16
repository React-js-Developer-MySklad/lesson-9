// create progress element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement
// show loading of file and updating progress element


import html from './file.html';
export default () => {
    const element = document.createElement('div');
    element.innerHTML = html;

    const inputElement = element.querySelector('input');
    inputElement.addEventListener('change', (e) => {
        const files = e.target.files;
        const file = files[0];
        console.log('Files count is: ' + files.length);
        console.log(file.name, file.size, file.type);

        file.text().then((data) => {
            const textContainerElement = element.querySelector('p');
            textContainerElement.innerHTML = data;
        });
    });



    const uploadButton = element.querySelector('button')
    uploadButton.addEventListener('click', () => inputElement.click())

    return element;
}