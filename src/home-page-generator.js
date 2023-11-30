import Content from './dom-generator.js';


function HomePage (){
  const content = Content()
  const homeContent = content.content;
  const contentBody = content.contentBody;
  
  const subTitle = document.createElement('div');
  subTitle.textContent = 'Home';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);
  
  return {homeContent};
}

export default HomePage;