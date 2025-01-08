import createCustomElement from "../utils/container";

export default function createInputRadio(
  radioName,
  radioValue,
  radioId,
  radioLabelTitle,
  radioLabelTextContent,
  icon
) {
  const radioGroup = createCustomElement("div", "form-radio");

  const label = document.createElement("label");
  label.htmlFor = radioId;

  const headerElement = document.createElement("div");
  headerElement.innerHTML = icon;

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = radioName;
  radioInput.value = radioValue;
  radioInput.id = radioId;

  const labelTitle = createCustomElement("strong");
  labelTitle.textContent = radioLabelTitle;

  const labelTextContent = createCustomElement("p");
  labelTextContent.innerHTML = radioLabelTextContent;

  headerElement.appendChild(labelTitle);
  label.append(headerElement, labelTextContent);
  radioGroup.append(radioInput, label);

  return radioGroup;
}
