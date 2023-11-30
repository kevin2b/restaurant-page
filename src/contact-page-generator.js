import Content from './dom-generator.js';


function ContactPage (){
  const content = Content()
  const contactContent = content.content;
  const contentBody = content.contentBody;

  const subTitle = document.createElement('div');
  subTitle.textContent = 'Contact';
  subTitle.classList.add('content-subtitle');
  contentBody.appendChild(subTitle);
  
  return {contactContent};
}

export default ContactPage;