export default function createCustomElement(tag, ...classNames) {
  const element = document.createElement(tag); 
  element.classList.add(...classNames); 
  return element; 
}
