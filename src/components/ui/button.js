export default function createButton(
  buttonText,
  disabled,
  ...buttonClassNames
) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.disabled = disabled;
  btn.innerHTML = buttonText;
  btn.classList.add(...buttonClassNames);
  btn.setAttribute("aria-label", buttonText);

  return btn;
}

