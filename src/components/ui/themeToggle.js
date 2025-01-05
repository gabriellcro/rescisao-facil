import { icons } from "../../icons/icons";

export default function toggleTheme() {
  const darkThemeIcon = icons.moon;
  const lightThemeIcon = icons.sun;

  const userTheme = getStoredTheme() || getSystemTheme();

  const toggleThemeElement = document.createElement("div");
  toggleThemeElement.className = "toggle-theme";

  const themeToggleInput = document.createElement("input");
  themeToggleInput.type = "checkbox";
  themeToggleInput.id = "toggle-theme";
  themeToggleInput.checked = userTheme === "dark";

  const themeToggleLabel = document.createElement("label");
  themeToggleLabel.innerHTML =
    userTheme === "dark" ? darkThemeIcon : lightThemeIcon;
  themeToggleLabel.htmlFor = "toggle-theme";

  toggleThemeElement.append(themeToggleInput, themeToggleLabel);

  applySystemTheme(userTheme);

  themeToggleInput.addEventListener("change", () => {
    handleThemeToggle(
      themeToggleInput,
      themeToggleLabel,
      darkThemeIcon,
      lightThemeIcon
    );
  });

  return toggleThemeElement;
}

function setStoredTheme(theme) {
  localStorage.setItem("data-theme", JSON.stringify(theme));
}

function applySystemTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getSystemTheme() {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDarkScheme ? "dark" : "light";
}

function getStoredTheme() {
  return JSON.parse(localStorage.getItem("data-theme"));
}

function handleThemeToggle(input, label, darkThemeIcon, lightThemeIcon) {
  const theme = input.checked ? "dark" : "light";
  const icon = input.checked ? darkThemeIcon : lightThemeIcon;

  applySystemTheme(theme);
  setStoredTheme(theme);
  label.innerHTML = icon;
}
