import { icons } from "../../icons/icons";
import createCustomElement from "../utils/container";
import createButton from "./button";

function createAlert(alertIcon, alertMessage, extraClassNames) {
  const alertElement = createCustomElement("div", "alert", extraClassNames);

  const iconWrapper = createCustomElement(
    "span",
    "flex-row",
    "align-items-center",
    "justify-content-center"
  );

  const messageElement = document.createElement("span");

  const alertContainer = createCustomElement(
    "div",
    "flex-row",
    "align-items-center",
    "justify-content-center",
    "space-3"
  );

  const closeButton = createButton(icons.xMark, false, "btn-close");

  iconWrapper.innerHTML = alertIcon;

  messageElement.innerHTML = alertMessage;

  closeButton.addEventListener("click", () => alertElement.remove());

  alertContainer.append(iconWrapper, messageElement);
  alertElement.append(alertContainer, closeButton);

  return alertElement;
}

function clearAlert(element) {
  const container = element.closest(".form-group");
  const alertElement = container.querySelector(".alert");

  if (alertElement) alertElement.remove();
}

function appendAlert(element, alert) {
  const container = element.closest(".form-group");
  if (container) container.appendChild(alert);
}

export { createAlert, clearAlert, appendAlert };
