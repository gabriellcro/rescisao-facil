import { createAlert } from "../components/ui/alert";
import {
  createAlertDialog,
  showAlertDialog,
} from "../components/ui/alertDialog";
import createButton from "../components/ui/button";
import createCustomElement from "../components/utils/container";
import createCustomText from "../components/utils/text";
import { icons } from "../icons/icons";
import captureScreenshot from "./captureScreenshot";
import { resetForm } from "./formReset";
import SeveranceCalculator from "./severanceCalculator";

const severanceCalculator = new SeveranceCalculator();

export default function renderCalculationResult(selectedRadio) {
  // elements
  const mainElement = document.querySelector("main");

  const containerElement = createCustomElement(
    "div",
    "flex-col",
    "align-items-center",
    "justify-content-stat",
    "flex-fluid",
    "space-5"
  );
  const successCheckCircle = createCustomElement(
    "span",
    "success-check-circle"
  );
  successCheckCircle.innerHTML = icons.check;
  const textSuccess = createCustomText(
    "span",
    "Cálculo realizado com sucesso!",
    "animate-fade-in",
    "secondary-color"
  );
  const calculationResultContainer = createCustomElement(
    "div",
    "calculation-result-container"
  );
  const textContentCalculation = createCustomText(
    "p",
    "Segue abaixo o cálculo realizado com base nas informações fornecidas.",
    "mb-4",
    "text-sm"
  );
  const buttonGroup = createButtonGroup(mainElement);

  // inputs
  const salaryInput = document.getElementById("salary-input");
  const fgtsBalanceInput = document.getElementById(
    "available-fgts-balance-input"
  );
  const expiredVacationInput = document.querySelectorAll(
    'input[name="vacation-status"]'
  );
  const noticeOfTerminationInput = document.querySelectorAll(
    'input[name="notice-of-termination"]'
  );
  const proportionalVacationInput = document.querySelectorAll(
    'input[name="proportional-vacation-status"]'
  );
  const withdrawalMethodInput = document.querySelectorAll(
    'input[name="withdrawal-method"]'
  );
  const salaryInputFormatted = formatInput(salaryInput.value);
  const hasExpiredVacation = getCheckedInputValue(expiredVacationInput);

  // flag
  let total = 0;

  calculationResultContainer.appendChild(textContentCalculation);

  // section laid-off
  if (selectedRadio === "laid-off") {
    // Multa rescisória
    const withdrawalMethodValue = getCheckedInputValue(withdrawalMethodInput);
    const fgtsBalanceInputFormatted = formatInput(fgtsBalanceInput.value);
    const fineTerminationValue = severanceCalculator.fineTermination(
      fgtsBalanceInputFormatted
    );
    const fineTerminationText = createFormattedCurrencyText(
      "Multa rescisória",
      fineTerminationValue
    );
    const fineTerminationEl = createCustomText(
      "p",
      fineTerminationText,
      "secondary-color"
    );
    total += fineTerminationValue;
    calculationResultContainer.appendChild(fineTerminationEl);

    // FGTS
    if (withdrawalMethodValue.value === "severance-pay") {
      const fgtsText = createFormattedCurrencyText(
        "FGTS",
        fgtsBalanceInputFormatted
      );
      const fgtsEl = createCustomText("p", fgtsText, "secondary-color");
      total += fgtsBalanceInputFormatted;
      calculationResultContainer.appendChild(fgtsEl);
    }

    // Seguro desemprego
    displayUnemploymentBenefitInfo(
      calculationResultContainer,
      salaryInputFormatted
    );
  }

  if (selectedRadio !== "fired-for-cause") {
    // Aviso Prévio
    const noticeOfTerminationValue = getCheckedInputValue(
      noticeOfTerminationInput
    );

    if (
      selectedRadio === "laid-off" &&
      noticeOfTerminationValue.value === "no"
    ) {
      const noticeIndemnityText = createFormattedCurrencyText(
        "Aviso Prévio",
        salaryInputFormatted
      );

      const noticeIndemnityEl = createCustomText(
        "p",
        noticeIndemnityText,
        "secondary-color"
      );

      total += salaryInputFormatted;
      calculationResultContainer.appendChild(noticeIndemnityEl);
    } else if (
      selectedRadio === "resignation" &&
      noticeOfTerminationValue.value === "no"
    ) {
      total -= salaryInputFormatted;
    }

    // 13 salário
    const thirteenthSalaryAmountValue =
      severanceCalculator.thirteenthSalaryAmount(salaryInputFormatted);

    const thirteenthSalaryAmountText = createFormattedCurrencyText(
      "13º Salário",
      thirteenthSalaryAmountValue
    );

    const thirteenthSalaryAmountEl = createCustomText(
      "p",
      thirteenthSalaryAmountText,
      "secondary-color"
    );

    total += thirteenthSalaryAmountValue;
    calculationResultContainer.appendChild(thirteenthSalaryAmountEl);

    // Férias Proporcionais
    const hasProportionalVacation = getCheckedInputValue(
      proportionalVacationInput
    );

    if (hasProportionalVacation.value === "hasProportionalVacation") {
      const proportionalVacationInput = document.querySelectorAll(
        ".dropdown-input-item"
      );
      const proportionalVacationValue = getCheckedInputValue(
        proportionalVacationInput
      );

      const proportionalLeaveValue = severanceCalculator.proportionalLeave(
        proportionalVacationValue.value,
        salaryInputFormatted
      );
      const proportionalLeaveText = createFormattedCurrencyText(
        "Férias proporcionais",
        proportionalLeaveValue
      );

      const proportionalLeaveEl = createCustomText(
        "p",
        proportionalLeaveText,
        "secondary-color"
      );

      total += proportionalLeaveValue;
      calculationResultContainer.appendChild(proportionalLeaveEl);
    }
  }

  // Férias
  if (hasExpiredVacation.value === "hasVacationDue") {
    const expiredVacationValue =
      severanceCalculator.expiredVacation(salaryInputFormatted);

    const expiredVacationText = createFormattedCurrencyText(
      "Férias",
      expiredVacationValue
    );

    const expiredVacationEl = createCustomText(
      "p",
      expiredVacationText,
      "secondary-color"
    );

    total += expiredVacationValue;
    calculationResultContainer.appendChild(expiredVacationEl);
  }

  clearElementContent(mainElement);

  const totalTextContent = createFormattedCurrencyText("Total", total);
  const totalElement = createCustomText("h1", totalTextContent, "text-md");

  calculationResultContainer.appendChild(totalElement);

  containerElement.append(
    successCheckCircle,
    textSuccess,
    calculationResultContainer
  );
  mainElement.append(containerElement, buttonGroup);

  addAnimationClassNames(containerElement);
}

function createButtonGroup(element) {
  const buttonGroup = createCustomElement(
    "div",
    "flex-col",
    "space-3",
    "container-sm"
  );

  const buttonDownloadScreenshotText = `${icons.arrowDownTray} Download do resultado`;
  const buttonDownloadScreenshot = createButton(
    buttonDownloadScreenshotText,
    false,
    "btn",
    "btn-primary",
    "animate-fade-in",
    "w-100"
  );

  const buttonResetText = `${icons.arrowPath} Reiniciar formulário`;
  const buttonReset = createButton(
    buttonResetText,
    false,
    "btn",
    "btn-outline",
    "animate-fade-in",
    "w-100"
  );

  const alertDialog = createAlertDialog(
    icons.exclamationTriangle,
    "dialog-warning",
    "Deseja realmente reiniciar?",
    "Esta ação não pode ser desfeita.",
    () => resetForm() // callback
  );

  buttonDownloadScreenshot.addEventListener("click", () => captureScreenshot());

  buttonReset.addEventListener("click", () => {
    showAlertDialog(alertDialog);
  });

  buttonGroup.append(buttonReset, buttonDownloadScreenshot);
  return buttonGroup;
}

function displayUnemploymentBenefitInfo(container, salaryInput) {
  const employmentDateRangeInput =
    document.querySelectorAll('input[type="date"]');

  const installmentCountValue = severanceCalculator.installmentCount(
    employmentDateRangeInput[0],
    employmentDateRangeInput[1]
  );
  const unemploymentBenefitValue =
    severanceCalculator.unemploymentBenefit(salaryInput);

  const unemploymentBenefitValueFormatted =
    unemploymentBenefitValue.toLocaleString("pr-BR", {
      style: "currency",
      currency: "BRL",
    });

  const installmentLabel =
    unemploymentBenefitValue > 1 ? "parcelas" : "parcela";

  // const
  const alertTextContent = `Você receberá um total de <strong>${installmentCountValue} ${installmentLabel}</strong> do seguro desemprego, cada uma no valor de <strong>${unemploymentBenefitValueFormatted}</strong>`;

  const alertElement = createAlert(
    icons.informationCircle,
    alertTextContent,
    "alert-info"
  );

  container.prepend(alertElement);
}

function clearElementContent(element) {
  element.innerHTML = "";
}

function getCheckedInputValue(array) {
  return Array.from(array).find((input) => input.checked);
}

function createFormattedCurrencyText(textContent, value) {
  return `<strong>${textContent}: </strong>${value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
}

function formatInput(input) {
  let inputFormatted = input.replace(/\D/g, "");
  return (inputFormatted = Number(inputFormatted / 100));
}

function addAnimationClassNames(container) {
  const paragraphs = container.querySelectorAll("p");
  const header = container.querySelector("h1");

  const totalElements = paragraphs.length;

  paragraphs.forEach((paragraph, index) => {
    paragraph.classList.add(`animate-slide-right-${index + 3}00`);
  });

  header.classList.add(`animate-slide-right-${totalElements + 3}00`);
}
