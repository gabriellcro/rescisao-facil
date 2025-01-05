import createButton from "./button"; 
import createCustomElement from "../utils/container"; 
import { icons } from "../../icons/icons";

export default function createDialog(dialogContent) {
  const dialog = document.createElement("dialog");
  dialog.className = "dialog"; 

  const dialogContainer = createCustomElement("div", "dialog-container");

  const btnClose = createButton(icons.xMark, false, "btn-close");

  const dialogHeader = createCustomElement("div", "dialog-header");

  const dialogBody = createCustomElement("div", "dialog-body");
  dialogBody.innerHTML = dialogContent;

  dialogContainer.append(dialogHeader, dialogBody);

  dialogHeader.appendChild(btnClose);

  dialog.appendChild(dialogContainer);

  btnClose.addEventListener("click", () => dialog.close());

  return dialog;
}
