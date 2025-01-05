import { icons } from "../../icons/icons";

export default function createLink(
  linkText,
  linkHref,
  ariaLabelText,
  ...className
) {
  const linkElement = document.createElement("a");
  linkElement.classList.add("btn-link", "tooltip", className);
  linkElement.href = linkHref;
  linkElement.ariaLabel = ariaLabelText;
  linkElement.target = "_blank";
  linkElement.innerHTML = `${icons.link} ${linkText}`;

  return linkElement;
}
