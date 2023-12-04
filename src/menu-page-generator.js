import Content, { createContentCard } from './dom-generator.js';

function MenuPage() {
  const content = Content();
  const menuContent = content.content;
  const { contentBody } = content;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Menu';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);

  contentBody.appendChild(createMenuCard('Food Item A', 10.99));
  contentBody.appendChild(createMenuCard('Food Item B - Special Edition', 1092.99));
  contentBody.appendChild(createMenuCard('Food Item E', 1.99));
  contentBody.appendChild(createMenuCard('Drink M', 0.99));

  return { menuContent };
}

function createMenuCard(foodDesc, foodPrice) {
  const menuCard = createContentCard();
  menuCard.card.classList.add('menu-card');

  const foodElement = document.createElement('span');
  foodElement.classList.add('menu-card-food');
  foodElement.innerText = foodDesc;

  const priceElement = document.createElement('span');
  priceElement.classList.add('menu-card-price');
  priceElement.innerText = `$${foodPrice}`;

  menuCard.cardLeftSide.appendChild(foodElement);
  menuCard.cardLeftSide.appendChild(priceElement);
  menuCard.cardRightSide.innerText = 'Placeholder Food Image';

  return menuCard.cardWrapper;
}

export default MenuPage;
