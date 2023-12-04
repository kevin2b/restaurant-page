function NavBar() {
  const item = [];
  const domBar = document.createElement('div');
  const SELECTED = 'selected';
  domBar.classList.add('nav');

  function createNavElement(name) {
    const navElement = document.createElement('div');
    navElement.classList.add('nav-element');
    navElement.textContent = name;
    return navElement;
  }

  function addNavElement(navElement) {
    if (item.length === 0) {
      navElement.classList.add(SELECTED);
    }
    item.push(navElement);
    domBar.appendChild(navElement);
  }

  function clearSelected() {
    item.forEach((ele) => ele.classList.remove(SELECTED));
  }

  function switchSelected(selectedElement) {
    clearSelected();
    selectedElement.classList.add(SELECTED);
  }

  return {
    domBar, createNavElement, addNavElement, switchSelected,
  };
}

export default NavBar;
