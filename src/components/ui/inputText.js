import createCustomElement from "../utils/container";

export default function createInputText(inputId, inputPlaceholder, className) {
  const inputContainer = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-3"
  );

  const inputElement = document.createElement("input");
  inputElement.classList.add("form-input", className);
  inputElement.type = "text";
  inputElement.id = inputId;
  inputElement.placeholder = inputPlaceholder;

  inputContainer.appendChild(inputElement);

  return inputContainer;
}
