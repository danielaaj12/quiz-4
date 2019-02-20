const tabsContainer = document.querySelectorAll('.tab-content');
const tabsElements = document.querySelectorAll('.tab');
tabsContainer[0].className = 'showing';

function clear() {
  for (const iterator of tabsContainer) {
    iterator.className = 'tab-content'
  }
}

function visibleTab() {
  tabsElements.forEach(element => {
    const idTab = element.getAttribute('href');
    element.addEventListener('click', () => {
      let itemTab = document.querySelector(idTab);
      clear();
      itemTab.className = 'visible';
      element.className = 'action-visible'

    });
  })
}
visibleTab()
