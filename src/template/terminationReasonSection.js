import createInputRadio from "../components/ui/inputRadio";
import createButton from "../components/ui/button";
import createCustomElement from "../components/utils/container";
import formFlow from "../modules/formFlow";
import {
  createProgressBar,
  resetProgressBar,
} from "../components/ui/progressBars";
import createCustomText from "../components/utils/text";
import FormValidator from "../modules/formValidator";
import setupFormNavigation from "../modules/formNavigation";

import {
  RESIGNATION_FEEDBACK,
  JUST_CAUSE_FEEDBACK,
  DISMISSAL_FEEDBACK,
} from "../constants/terminationTypesConstants";
import { icons } from "../icons/icons";
import initializeAlert from "../modules/iniatializeAlert";
import getMaskMoney from "../modules/getMaskMoney";
import { resetStep } from "../modules/formReset";

const formValidator = new FormValidator();

let selectedRadio;

export default function createTerminationReasonSection() {
  const container = createCustomElement("section", "flex-col", "space-10");
  const header = createCustomElement("header", "flex-col", "space-3");
  const sectionTitle = createCustomText("h2", "Motivo da Rescisão", "text-md");
  const sectionDescription = createCustomText(
    "p",
    "Para começar, selecione o motivo da sua rescisão de contrato.",
    "secondary-color"
  );
  const radioGroup = createCustomElement("div", "radio-group");

  const resignationRadio = createInputRadio(
    "termination-type",
    "resignation",
    "termination-resignation",
    "Autodemissão",
    RESIGNATION_FEEDBACK,
    icons.arrowLeftEndOnRectangle
  );

  const laidOffRadio = createInputRadio(
    "termination-type",
    "laid-off",
    "termination-laid-off",
    "Demitido",
    DISMISSAL_FEEDBACK,
    icons.documentText
  );

  const firedForCauseRadio = createInputRadio(
    "termination-type",
    "fired-for-cause",
    "termination-fired-for-cause",
    "Demitido por justa causa",
    JUST_CAUSE_FEEDBACK,
    icons.exclamationTriangle
  );

  const buttonContainer = createCustomElement(
    "div",
    "container-fluid",
    "flex-row",
    "justify-content-center",
    "align-items-center"
  );

  const buttonCreateFlowFormText = `Criar fluxo de formulário ${icons.chevronRight}`;
  const buttonCreateFlowForm = createButton(
    buttonCreateFlowFormText,
    true,
    "btn-pill",
    "btn-primary",
    "btn-create-form",
    "animate-fade-in"
  );

  buttonContainer.appendChild(buttonCreateFlowForm);
  header.append(sectionTitle, sectionDescription);
  radioGroup.append(resignationRadio, laidOffRadio, firedForCauseRadio);
  container.append(header, radioGroup, buttonContainer);

  buttonCreateFlowForm.addEventListener("click", setupButtonStartedEvent);

  return container;
}

function setupButtonStartedEvent() {
  const inputRadios = document.querySelectorAll(
    'input[name="termination-type"]'
  );

  selectedRadio = Array.from(inputRadios).find(
    (inputRadio) => inputRadio.checked
  );

  if (selectedRadio) {
    const mainElement = document.querySelector("main");
    const formElement = formFlow(selectedRadio.value);

    mainElement.innerHTML = "";
    mainElement.appendChild(formElement);

    const steps = document.querySelectorAll(".step");
    const progressBars = createProgressBar(steps);

    mainElement.prepend(progressBars);

    getMaskMoney();
    setupFormNavigation(selectedRadio.value);
    initializeAlert(selectedRadio);
    toggleFirstStepActiveState();
    resetStep();

    formValidator.builder();
  }
}

function toggleFirstStepActiveState() {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    if (index === 0) step.classList.add("step-active");
  });

  resetProgressBar();
}
