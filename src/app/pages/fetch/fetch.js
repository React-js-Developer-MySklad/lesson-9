// fetch call
// response object

import html from './fetch.html'

const loadExample = () => {
    const element = document.createElement('div');
    element.innerHTML = html;

    fetch('https://dummyjson.com/http/500/products/1')
        .then(response => {
            console.log(response)
            if (response.status !== 200) {
                throw new Error('Server is dead.')
            }
            return response.json();
        })
        .then(json => {
            element.querySelector('img').src = json.thumbnail;
            element.querySelector('h5').innerHTML = json.title;
            element.querySelector('p').innerHTML = json.description;
        })
        .catch(e => console.error(e))
        .finally(() => console.log('finally'))

    return element;
};
export default loadExample;