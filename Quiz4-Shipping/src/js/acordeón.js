const shippingContainer = document.querySelectorAll('.ui-shipping-container');
shippingContainer.forEach((shippingElements) => {
  const elementsContainer = shippingElements;
  const tabsElements = shippingElements.querySelectorAll('ul > li > a');
  const hiddenContent = shippingElements.querySelectorAll('div .tab-content-hidden');
  
  function clearClass() {
    hiddenContent.forEach((hiddenElement) => {
      const cleanHideElement = hiddenElement;
      cleanHideElement.className = 'tab-content-hidden';
    });
    
  }
  function Href(event) {
    clearClass();
    const clickedElement = event;
    const elementHref = clickedElement.target.getAttribute('href');
    const tabsContent = elementsContainer.querySelector(elementHref);
    tabsContent.className = 'tab-content-showing';
  }

  tabsElements.forEach((element) => {
    element.addEventListener('click', Href);
  });
});

