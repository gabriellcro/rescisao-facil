import toggleTheme from "../components/ui/themeToggle";
import createCustomElement from "../components/utils/container";
import createCustomText from "../components/utils/text";

export default function createHeaderElement() {
  const headerElement = createCustomElement(
    "header",
    "flex-row",
    "container-xl",
    "space-between",
    "blur",
    "position-fixed",
    "p-5",
    "z-index-2",
  );
  const titleElement = createCustomText("h1", "Rescisão Fácil", "title-header");
  const toggleThemeElement = toggleTheme();

  headerElement.append(titleElement, toggleThemeElement);
  return headerElement;
}
