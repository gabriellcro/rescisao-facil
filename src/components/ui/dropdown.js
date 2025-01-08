import createCustomElement from "../utils/container";
import createButton from "./button";

export default function createDropdown(
  itemsList,
  dropdownName,
  dropdownLabelText,
  dropdownToggleText
) {
  if (!Array.isArray(itemsList)) {
    console.error("O primeiro argumento deve ser um array.");
    return;
  }

  const dropdownContainer = createCustomElement(
    "div",
    "flex-col",
    "space-5",
    "container-fluid",
    "mt-5"
  );

  const dropdownLabel = createDropdownLabel(dropdownLabelText);

  const dropdownToggleContainer = createCustomElement(
    "div",
    "dropdown-toggle-container"
  );

  const dropdownToggleButton = createButton(
    dropdownToggleText,
    false,
    "dropdown-toggle"
  );

  const dropdownMenu = createDropdownMenu(
    itemsList,
    dropdownName,
    dropdownLabelText
  );

  dropdownToggleContainer.append(dropdownToggleButton, dropdownMenu);
  dropdownContainer.append(dropdownLabel, dropdownToggleContainer);

  dropdownToggleButton.addEventListener("click", () =>
    toggleDropdownVisibility(dropdownMenu)
  );

  document.addEventListener("click", (event) =>
    handleClickOutsideMenu(event, dropdownMenu)
  );

  return dropdownContainer;
}

function createDropdownLabel(labelText) {
  const label = document.createElement("p");
  label.textContent = labelText;
  label.className = "dropdown-label";
  return label;
}

function createDropdownMenu(itemsList, dropdownName, dropdownLabelText) {
  const menu = document.createElement("ul");
  menu.classList.add("dropdown-menu");

  itemsList.forEach((item, index) => {
    const menuItem = createDropdownItem(
      item,
      index,
      dropdownName,
      dropdownLabelText,

      menu
    );
    menu.appendChild(menuItem);
  });

  return menu;
}

function createDropdownItem(
  item,
  index,
  dropdownName,
  dropdownLabelText,
  dropdownMenu
) {
  const itemElement = document.createElement("li");
  itemElement.className = "dropdown-Próximoitem";

  const itemLabel = createItemLabel(item);
  const itemInput = createItemInput(
    item,
    index,
    dropdownName,
    dropdownLabelText,
    dropdownMenu
  );

  itemLabel.prepend(itemInput);
  itemElement.append(itemLabel);

  return itemElement;
}

function createItemInput(item, index, dropdownName) {
  const inputElement = document.createElement("input");
  inputElement.type = "radio";
  inputElement.id = item;
  inputElement.value = index + 1;
  inputElement.name = dropdownName;
  inputElement.className = "dropdown-input-item";

  inputElement.addEventListener("click", handleDropdownItemSelection);

  return inputElement;
}

function createItemLabel(item) {
  const labelElement = document.createElement("label");
  labelElement.textContent = item;
  labelElement.htmlFor = item;
  labelElement.className = "dropdown-label-item";
  return labelElement;
}

function toggleDropdownVisibility(dropdownMenu) {
  if (!(dropdownMenu instanceof HTMLElement)) {
    console.error("Elemento de menu dropdown inválido.");
    return;
  }

  dropdownMenu.classList.toggle("dropdown-menu-active");
}

function handleDropdownItemSelection(e) {
  const inputItem = e.target;

  if (!inputItem.classList.contains("dropdown-input-item")) return;

  const dropdownMenu = inputItem.closest(".dropdown-menu");
  const dropdownToggle = dropdownMenu.previousElementSibling;
  const labelTextContent = inputItem.closest(".dropdown-label-item");

  updateDropdownButtonText(labelTextContent, dropdownToggle);
}

function updateDropdownButtonText(labelTextContent, dropdownToggle) {
  if (dropdownToggle.classList.contains("dropdown-toggle"))
    dropdownToggle.innerHTML = labelTextContent.textContent;
}

function handleClickOutsideMenu(event, dropdownMenu) {
  const click = event.target;

  if (!click.classList.contains("dropdown-toggle"))
    dropdownMenu.classList.remove("dropdown-menu-active");
}
