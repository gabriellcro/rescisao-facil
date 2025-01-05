export default function createCustomText(tag, textContent, ...classNames) {
  const element = document.createElement(tag); 
  element.innerHTML = textContent; 
  element.classList.add(...classNames); 

  return element; 
}
