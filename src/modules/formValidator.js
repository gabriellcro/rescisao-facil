import { icons } from "../icons/icons.js";
import createCustomElement from "../components/utils/container";
import { MONTH_LIST } from "../constants/monthsList.js";
import createDropdown from "../components/ui/dropdown.js";

export default class FormValidator {
  builder() {
    const arrayInputsDate = document.querySelectorAll(".form-input-date");
    const arrayInputsText = document.querySelectorAll(".form-input");
    const arrayInputsRadios = document.querySelectorAll(".radio-input-simple");
    const options = document.querySelectorAll(
      'input[name="proportional-vacation-status"]'
    );

    this.isValidInputNumber(arrayInputsText);
    this.isValidDate(arrayInputsDate[0], arrayInputsDate[1]);
    this.activateButtonOnRadioSelect(arrayInputsRadios);
    this.isValidSelected(options);
  }

  activateButtonOnRadioSelect(inputRadios) {
    if (!(inputRadios instanceof NodeList)) {
      console.error("O elemento fornecido não é um NodeList:", inputRadios);
      return;
    }

    inputRadios.forEach((inputRadio) => {
      inputRadio.addEventListener("change", () => {
        if (inputRadio.checked) {
          this.toggleStageButton(inputRadio, false);
        }
      });
    });
  }

  isHTMLElement(element) {
    return element instanceof HTMLElement;
  }

  isValidInputNumber(inputs) {
    if (!(inputs instanceof NodeList)) {
      console.error("O elemento fornecido não é um NodeList:", inputs);
      return;
    }

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        let value = Number(input.value.replace(/\D/g, ""));

        if (!value) {
          this.addErrorMessage(input, "Digite um valor numérico válido.");
          this.toggleStageButton(input, true);
        } else {
          this.clearErrorMessage(input);
          this.toggleStageButton(input, false);
        }
      });
    });
  }

  isValidDate(startDateInput, endDateInput) {
    if (!startDateInput || !endDateInput) return;

    startDateInput.addEventListener("change", () => {
      this.verifyStartDateOrder(startDateInput, endDateInput);
    });

    endDateInput.addEventListener("change", () => {
      this.verifyStartDateOrder(startDateInput, endDateInput);
    });
  }

  toggleStageButton(input, stage) {
    const step = input.closest(".step");
    const buttonNext =
      step.querySelector(".btn-next") || step.querySelector(".btn-calc");

    if (buttonNext) buttonNext.disabled = stage;
  }

  verifyStartDateOrder(startDateInput, endDateInput) {
    const dateStart = new Date(startDateInput.value);
    const dateFinish = new Date(endDateInput.value);

    if (!dateStart || !dateFinish) return;

    if (dateStart >= dateFinish) {
      this.addErrorMessage(
        startDateInput,
        "Data inicial não pode ser após a final."
      );
      this.toggleStageButton(startDateInput, true);
    } else {
      this.clearErrorMessage(startDateInput);
      this.toggleStageButton(startDateInput, false);
    }
  }

  isValidSelected(options) {
    if (!options) {
      console.warn(
        `input[name="proportional-vacation-status"] não foi encontrado!`
      );
      return;
    }

    let dropdownElement = createDropdown(
      MONTH_LIST,
      "month-list",
      "Quantidade de meses",
      "Selecione a quantidade de meses"
    );

    options.forEach((option) => {
      const step = option.closest(".container-fluid");

      option.addEventListener("change", () => {
        if (option.checked && option.value === "hasProportionalVacation") {
          step.appendChild(dropdownElement);
          this.toggleStageButton(option, true);
          this.isValidOption();
        } else {
          if (step.contains(dropdownElement)) {
            this.clearDropdown();
            dropdownElement.remove();
          }
        }
      });
    });
  }

  isValidOption() {
    const radios = document.querySelectorAll(".dropdown-label-item");

    if (!radios) {
      console.log("Elemento radios não encontrado!");
      return;
    }

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.toggleStageButton(radio, false);
      });
    });
  }

  clearDropdown() {
    const radios = document.querySelectorAll(".dropdown-input-item");

    if (!radios) {
      console.log("Elemento radios não encontrado!");
      return;
    }

    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.textContent = "Selecione a quantidade de meses";

    radios.forEach((radio) => (radio.checked = false));
  }

  addErrorMessage(input, message) {
    if (!this.isHTMLElement(input)) {
      console.error("O elemento fornecido não é um HTMLElement:", input);
      return;
    }

    const hasError =
      (input.nextElementSibling &&
        input.nextElementSibling.classList.contains("form-invalid")) ||
      input.classList.contains("form-input-invalid");

    if (hasError) return;

    const formGroup = input.parentElement;

    if (!formGroup) {
      console.error("O elemento pai do input não foi encontrado.");
      return;
    }

    const textContentContainer = createCustomElement("div", "form-invalid");

    const iconElement = document.createElement("span");
    iconElement.innerHTML = icons.xCircleSolid;

    const textContentElement = createCustomElement("span", "form-text-invalid");
    textContentElement.textContent = message;

    textContentContainer.append(iconElement, textContentElement);

    input.classList.add("form-input-invalid");

    formGroup.appendChild(textContentContainer);
  }

  clearErrorMessage(input) {
    if (!this.isHTMLElement(input)) {
      console.error("O elemento fornecido não é um HTMLElement:", input);
      return;
    }

    if (!input.classList.contains("form-input-invalid")) return;

    const errorElement = input.nextElementSibling;

    if (errorElement && errorElement.classList.contains("form-invalid")) {
      errorElement.remove();
    }

    input.classList.remove("form-input-invalid");
  }
}
