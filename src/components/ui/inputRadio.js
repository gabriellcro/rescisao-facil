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

  const iconElement = document.createElement("div");
  iconElement.innerHTML = icon;
  iconElement.className = "badge-secondary";

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.name = radioName;
  radioInput.value = radioValue;
  radioInput.id = radioId;

  const labelTitle = createCustomElement("strong");
  labelTitle.textContent = radioLabelTitle;

  const labelTextContent = createCustomElement("p");
  labelTextContent.innerHTML = radioLabelTextContent;

  label.append(iconElement, labelTitle, labelTextContent);
  radioGroup.append(radioInput, label);

  return radioGroup;
}
