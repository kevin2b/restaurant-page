import Content from './dom-generator.js';


function MenuPage (){
  const content = Content()
  const menuContent = content.content;
  const contentBody = content.contentBody;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Menu';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);
  
  return {menuContent};
}

export default MenuPage;