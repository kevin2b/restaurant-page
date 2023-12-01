import Content from './dom-generator.js';
import {createContentCard} from './dom-generator.js';


function ContactPage (){
  const content = Content()
  const contactContent = content.content;
  const contentBody = content.contentBody;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Contact';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);
  
  contentBody.appendChild(createContactCard('324 A Road St., ABC ABC, CITY, PROVINCE', '+1-(XXX)-XXX-XXXX' , 'AnyEmail@email.com'));
  contentBody.appendChild(createContactCard('3 Street St., AAC CCC, CITY, PROVINCE', '+1-(XXX)-XXX-XXXX' , 'AnyEmail231@email.com'));
  
  return {contactContent};
}

function createContactCard(loc, tel, email){
  const contactCard = createContentCard();
  contactCard.card.classList.add('contact-card');
  
  const locElement = document.createElement('div');
  locElement.classList.add('contact-card-loc');
  locElement.innerText = 'Location: ' + loc;
  
  const telElement = document.createElement('div');
  telElement.classList.add('contact-card-tel');
  telElement.innerText = 'Tel: ' + tel;
  
  const emailElement = document.createElement('div');
  emailElement.classList.add('contact-card-email');
  emailElement.innerText = 'E-mail: ' + email;
  
  contactCard.cardLeftSide.appendChild(locElement);
  contactCard.cardLeftSide.appendChild(telElement);
  contactCard.cardLeftSide.appendChild(emailElement);
  contactCard.cardRightSide.innerText = 'Placeholder Restaurant Image';
  
  return contactCard.cardWrapper;
}

export default ContactPage;