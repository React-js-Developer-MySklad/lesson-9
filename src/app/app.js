import html from "./app.html";
import './app.css'
import {createMenu} from "./components/menu";

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

createMenu('.top-menu')
