import createCustomElement from "../utils/container";

export default function createInputRadio(
  radioName,
  radioValue,
  radioId,
  radioLabelText,
  className,
  disabled
) {
  const radioContainer = createCustomElement(
    "span",
    "flex-row",
    "align-items-center",
    "justify-content-center"
  );

  const radioInput = document.createElement("input");
  radioInput.type = "radio";
  radioInput.className = "radio-input-simple";
  radioInput.name = radioName;
  radioInput.value = radioValue;
  radioInput.id = radioId;
  radioInput.disabled = disabled;

  const label = document.createElement("label");
  label.classList.add("radio-label-simple", className);
  label.htmlFor = radioId;
  label.textContent = radioLabelText;

  radioContainer.append(radioInput);
  label.append(radioContainer);

  return label;
}
