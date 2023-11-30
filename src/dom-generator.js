const RESTAURANT_NAME = "Spooky Restaurant"

function Content(){
  const content = document.createElement('div');
  content.classList.add('content-wrapper');
  
  const contentBody = document.createElement('div');
  contentBody.classList.add('content-body');
  content.appendChild(contentBody);
  
  const restaurantName = document.createElement('div');
  contentBody.classList.add('content-title');
  contentBody.appendChild(restaurantName);
  restaurantName.innerText = RESTAURANT_NAME;
  
  return {content, contentBody};
}

export default Content;