// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop

import html from './drag-and-drop.html'
import './drag-and-drop.css';

export default () => {
    const element = document.createElement('div');
    element.innerHTML = html;
    const dragZone = element.querySelector('div');

    const loadImage = file => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            element.querySelector('figure').classList.remove('hidden');
            element.querySelector('img').src = fileReader.result;
            element.querySelector('figcaption').innerHTML = file.name
        }

        fileReader.readAsDataURL(file);
    }

    element.querySelector('input').addEventListener('change', e => {
        const file = e.target.files[0]
        loadImage(file)
    })


    dragZone.addEventListener('drop', e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]
        loadImage(file);
        element.querySelector('label').classList.remove('file-over')
    })


    dragZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    dragZone.addEventListener('dragenter', () => {
        element.querySelector('label').classList.add('file-over')
    })

    dragZone.addEventListener('dragleave', () => {
        element.querySelector('label').classList.remove('file-over')
    })

    return element
}