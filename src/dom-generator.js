const RESTAURANT_NAME = 'Spooky Restaurant';

function Content() {
  const content = document.createElement('div');
  content.classList.add('content-wrapper');

  const contentBody = document.createElement('div');
  contentBody.classList.add('content-body');
  content.appendChild(contentBody);

  const restaurantName = document.createElement('div');
  restaurantName.classList.add('content-title');
  contentBody.appendChild(restaurantName);
  restaurantName.innerText = RESTAURANT_NAME;

  return { content, contentBody };
}

// Create a card with two sides
function createContentCard() {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('content-card-wrapper');

  const card = document.createElement('div');
  card.classList.add('content-card');

  const cardLeftSide = document.createElement('div');
  cardLeftSide.classList.add('content-card-left');

  const cardRightSide = document.createElement('div');
  cardRightSide.classList.add('content-card-right');

  cardWrapper.appendChild(card);
  card.appendChild(cardLeftSide);
  card.appendChild(cardRightSide);
  return {
    cardWrapper, card, cardLeftSide, cardRightSide,
  };
}

export default Content;
export { createContentCard };
