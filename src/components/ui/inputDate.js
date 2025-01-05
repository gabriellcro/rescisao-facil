import createCustomElement from "../utils/container";

export default function createInputDate(labelText, inputId) {
  const formGroup = createCustomElement("div", "input-group");

  const labelElement = document.createElement("label");
  labelElement.textContent = labelText; 
  labelElement.htmlFor = inputId; 
  labelElement.className = "form-label"; 

  const containerInput = createCustomElement(
    "div", 
    "container-fluid", 
    "flex-col", 
    "space-3"
  );

  const inputElement = document.createElement("input");
  inputElement.id = inputId; 
  inputElement.type = "date"; 
  inputElement.classList.add("form-input-date");

  formGroup.append(labelElement, containerInput);
  containerInput.appendChild(inputElement);

  return formGroup;
}
