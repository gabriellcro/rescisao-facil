import createCustomElement from "../utils/container";
import createCustomText from "../utils/text";
import createButton from "../ui/button";

export function createAlertDialog(
  dialogIcon,
  dialogClassName,
  dialogTitleText,
  dialogParagraphText,
  onConfirmCallback
) {
  const dialog = document.createElement("dialog");
  dialog.className = "dialog";

  const dialogContainer = createCustomElement("div", "flex-col", "space-8");

  const dialogBody = createCustomElement(
    "div",
    "flex-row",
    "space-5",
    "justify-content-start",
    "align-items-start"
  );

  const dialogIconElement = createCustomElement("span", dialogClassName);
  dialogIconElement.innerHTML = dialogIcon;

  const dialogTextContent = createCustomElement(
    "div",
    "flex-col",
    "space-1",
    "justify-content-start",
    "align-items-start"
  );

  const dialogTitle = createCustomText("h1", dialogTitleText, "text-sm");

  const dialogParagraph = createCustomText(
    "span",
    dialogParagraphText,
    "secondary-color"
  );

  const btnCancel = createButton("Cancelar", false, "btn", "btn-outline");
  const btnConfirm = createButton("Confirmar", false, "btn", "btn-primary");

  const buttonGroup = createCustomElement("div", "btn-group");

  dialog.appendChild(dialogContainer);
  dialogBody.append(dialogIconElement, dialogTextContent);
  dialogTextContent.append(dialogTitle, dialogParagraph);
  dialogContainer.append(dialogBody, buttonGroup);
  buttonGroup.append(btnCancel, btnConfirm);

  btnCancel.addEventListener("click", () => dialog.close());
  btnConfirm.addEventListener("click", () => {
    onConfirmCallback();
    dialog.remove();
  });

  return dialog;
}

export function showAlertDialog(alertDialog) {
  const mainElement = document.querySelector("main");

  if (!mainElement.contains(alertDialog)) {
    mainElement.appendChild(alertDialog);
  }

  alertDialog.showModal();
}
