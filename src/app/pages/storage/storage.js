// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria

import html from './storage.html'


export default () => {
    const element = document.createElement('div');



    localStorage.setItem('key', '1')
    localStorage.getItem('key')
    return element;
}