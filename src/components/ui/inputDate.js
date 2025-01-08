import createCustomElement from "../utils/container";

export default function createInputDate(labelText, inputId) {
  const formGroup = createCustomElement(
    "div",
    "flex-col",
    "w-100",
    "space-3",
  );

  const labelElement = document.createElement("label");
  labelElement.textContent = labelText;
  labelElement.htmlFor = inputId;
  labelElement.className = "form-label";

  const containerInput = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-3",
    "justify-content-start",
    "align-items-start"
  );

  const inputElement = document.createElement("input");
  inputElement.id = inputId;
  inputElement.type = "date";
  inputElement.classList.add("form-input-date");

  formGroup.append(labelElement, containerInput);
  containerInput.appendChild(inputElement);

  return formGroup;
}
