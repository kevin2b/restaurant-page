import Content, { createContentCard } from './dom-generator.js';

function HomePage() {
  const content = Content();
  const homeContent = content.content;
  const { contentBody } = content;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Home';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);

  const welcomeCard = createContentCard();
  welcomeCard.card.classList.add('home-card');
  welcomeCard.cardLeftSide.innerText = 'Welcome to Spooky Restaurant. Spooky Restaurant has been serving the community for over 50 years providing quality food and a spooky experience.';
  welcomeCard.cardRightSide.innerText = 'Image Placeholder';
  contentBody.appendChild(welcomeCard.cardWrapper);

  return { homeContent };
}

export default HomePage;
