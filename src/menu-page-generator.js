import Content from './dom-generator.js';
import {createContentCard} from './dom-generator.js';


function MenuPage (){
  const content = Content()
  const menuContent = content.content;
  const contentBody = content.contentBody;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Menu';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);
  
  contentBody.appendChild(createMenuCard("Food Item A", 10.99));
  contentBody.appendChild(createMenuCard("Food Item B - Special Edition", 1092.99));
  contentBody.appendChild(createMenuCard("Food Item E", 1.99));
  contentBody.appendChild(createMenuCard("Drink M", 0.99));
  
  return {menuContent};
}


function createMenuCard(foodDesc, foodPrice){
  const menuCard = createContentCard();
  menuCard.cardLeftSide.classList.add('menu-card');
  
  const food = document.createElement('span');
  food.classList.add('card-food');
  food.innerText = foodDesc;
  
  const price = document.createElement('span');
  price.classList.add('card-price');
  price.innerText = '$' + foodPrice;
  
  menuCard.cardLeftSide.appendChild(food);
  menuCard.cardLeftSide.appendChild(price);
  menuCard.cardRightSide.innerText = 'Placeholder Food Image';
  
  return menuCard.cardWrapper;
}

export default MenuPage;