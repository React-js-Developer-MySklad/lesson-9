import {APP_URL} from "../../../config/config";
import {createRoute, loadPage} from "../../router/router";

const loadTemplate = () => fetch(`${APP_URL}/static/menu.template.html`)
    .then(response =>
        response.text());

const loadMenuData = () => fetch(`${APP_URL}/static/menu.json`)
    .then(response => response.json())

const loadMenu = () => Promise.all([
    loadTemplate(),
    loadMenuData()
])


const createMenu = (selector) => {
    loadMenu().then(([template, menuItems]) => {
        createRoute(menuItems);

        const templateElement = window.document.createElement('div');
        templateElement.innerHTML = template;
        const menuTemplateElement = templateElement.querySelector('[data-menu]')
        const menuTemplateItem = menuTemplateElement.querySelector('[data-menu-item]');

        for(const itemData of menuItems) {

            const menuItemElement = menuTemplateItem.cloneNode(true);
            const aElement = menuItemElement.querySelector('a');
            aElement.href = itemData.href;
            aElement.innerHTML = itemData.name;
            menuTemplateElement.append(menuItemElement)

            aElement.addEventListener('click', (e) => {
                window.history.pushState(itemData, '', itemData.href)
                e.preventDefault();
            })
        }

        window.document.querySelector(selector).append(menuTemplateElement);

        loadPage();
    })
}

export { createMenu }