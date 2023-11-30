import './style.css';
import NavBar from './nav-bar.js';
import HomePage from './home-page-generator.js';
import MenuPage from './menu-page-generator.js';
import ContactPage from './contact-page-generator.js';

init();

function init(){
  const root = document.querySelector('body');
  const navBar = NavBar();
  const homePage = HomePage().homeContent;
  const menuPage = MenuPage().menuContent;
  const contactPage = ContactPage().contactContent;

  const homeElement = navBar.createNavElement('Home');
  navBar.addNavElement(homeElement);
  homeElement.addEventListener('click', () => {
    navBar.switchSelected(homeElement);
    if (navBar.domBar.nextElementSibling != null){
      root.removeChild(navBar.domBar.nextElementSibling);
      root.appendChild(homePage);
    }
  });
  
  const menuElement = navBar.createNavElement('Menu');
  navBar.addNavElement(menuElement);
  menuElement.addEventListener('click', () => {
    navBar.switchSelected(menuElement);
    if (navBar.domBar.nextElementSibling != null){
      root.removeChild(navBar.domBar.nextElementSibling);
      root.appendChild(menuPage);
    }
  });
  
  const contactElement = navBar.createNavElement('Contact');
  navBar.addNavElement(contactElement);
  contactElement.addEventListener('click', () => {
    navBar.switchSelected(contactElement);
    if (navBar.domBar.nextElementSibling != null){
      root.removeChild(navBar.domBar.nextElementSibling);
      root.appendChild(contactPage);
    }
  });
  
  root.appendChild(navBar.domBar);
  root.appendChild(HomePage().homeContent);
}