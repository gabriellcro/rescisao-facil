import createTerminationReasonSection from "./template/terminationReasonSection";
import createHeaderElement from "./template/headerElement";
import createMainElement from "./template/mainElement";

import root from "./styles/root.css";
import typography from "./styles/typography.css";
import toggleTheme from "./styles/toggleTheme.css";
import flexbox from "./styles/flexbox.css";
import spacing from "./styles/spacing.css";
import layout from "./styles/layout.css";
import filters from "./styles/filters.css";
import buttons from "./styles/buttons.css";
import inputRadio from "./styles/inputRadio.css";
import inputRadioSimple from "./styles/inputRadioSimple.css";
import step from "./styles/step.css";
import form from "./styles/form.css";
import progressBars from "./styles/progressBars.css";
import dialog from "./styles/dialog.css";
import dropdown from "./styles/dropdown.css";
import alert from "./styles/alert.css";
import tooltip from "./styles/tooltip.css";
import animation from "./styles/animation.css";
import result from "./styles/result.css";
import mediaScreen from "./styles/mediaScreen.css";
import activeButtonCreateForm from "./template/activeButtonCreateForm";

const bodyElement = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  initializeHomePage();
  setupbuttonStarted();
});

function initializeHomePage() {
  const headerElement = createHeaderElement();
  const mainElement = createMainElement();

  bodyElement.append(headerElement, mainElement);
}

function initializeApp() {
  const mainElement = document.querySelector("main");
  const terminationReasonSection = createTerminationReasonSection();

  mainElement.innerHTML = "";
  mainElement.appendChild(terminationReasonSection);

  activeButtonCreateForm();
}

function setupbuttonStarted() {
  const buttonStarted = document.querySelector(".btn-started");
  if (buttonStarted) {
    buttonStarted.addEventListener("click", initializeApp);
  }
}
