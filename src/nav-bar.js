

function NavBar () {
  const item = [];
  const domBar = document.createElement('div');
  const SELECTED = 'selected';
  domBar.classList.add('nav');
  
  function addNavElement(name){
    const navElement = document.createElement('div');
    navElement.classList.add('nav-element');
    navElement.textContent = name;
    if (item.length === 0){
      navElement.classList.add(SELECTED);
    }
    item.push(navElement);
    
    navElement.addEventListener('click', () => {
      clearSelected();
      navElement.classList.add(SELECTED);
    });
    
    domBar.appendChild(navElement);
  }
  
  
  function clearSelected (){
    item.forEach((ele) => ele.classList.remove(SELECTED));
  }
  
  return {domBar, addNavElement};
}

export default NavBar;