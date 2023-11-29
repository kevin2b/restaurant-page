import './style.css';
import NavBar from './nav-bar.js';

const root = document.querySelector('body');
const navBar = NavBar();
init();

function init(){
  navBar.addNavElement('Home');
  navBar.addNavElement('Menu');
  navBar.addNavElement('Contact');
  root.appendChild(navBar.domBar);
}