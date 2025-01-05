import { expiredVacationInfo } from "../article/expiredVacationInfo";
import createStep from "../components/ui/step";
import createCustomElement from "../components/utils/container";
import createDialog from "../components/ui/dialog";
import createButton from "../components/ui/button";
import createInputRadioSimple from "../components/ui/inputRadioSimple";
import createCustomText from "../components/utils/text";
import { icons } from "../icons/icons";
import {
  createAlertDialog,
  showAlertDialog,
} from "../components/ui/alertDialog";
import renderCalculationResult from "../modules/renderCalculationResult";

export default function createExpiredVacationSection(selectedRadio) {
  const sectionTitle = createCustomText(
    "h2",
    "Tem Férias Vencidas?",
    "text-md",
    "animate-slide-right-200"
  );

  const buttonOpenDialogText = `${icons.informationCircle} Saiba mais`;
  const buttonOpenDialog = createButton(
    buttonOpenDialogText,
    false,
    "btn-link",
    "tooltip",
    "animate-slide-right-300"
  );
  buttonOpenDialog.setAttribute(
    "aria-label",
    "Clique aqui para saber mais sobre férias vencidas"
  );

  const dialogElement = createDialog(expiredVacationInfo);

  const sectionDescription = createCustomText(
    "p",
    "Por favor, escolha uma opção.",
    "text-secondary",
    "animate-slide-right-400"
  );

  const sectionContainer = createCustomElement("div", "form-group");

  const hasVacationDueRadio = createInputRadioSimple(
    "vacation-status",
    "hasVacationDue",
    "vacation-due-yes",
    "Sim, tenho férias vencidas",
    "animate-slide-right-600",
    false
  );
  const noVacationDueRadio = createInputRadioSimple(
    "vacation-status",
    "noVacationDue",
    "vacation-due-no",
    "Não, não tenho férias vencidas",
    "animate-slide-right-700",
    false
  );

  const formSection = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-5"
  );

  const buttonPrev = createButton(
    "Voltar",
    false,
    "btn",
    "btn-outline",
    "btn-prev"
  );
  const buttonCalc = createButton(
    "Calcular",
    true,
    "btn",
    "btn-primary",
    "btn-calc"
  );
  const buttonGroup = createCustomElement(
    "div",
    "btn-group",
    "animate-fade-in"
  );

  const alertDialog = createAlertDialog(
    icons.exclamationTriangle,
    "dialog-warning",
    "Tem certeza de que deseja realizar o cálculo?",
    "Por favor, revise todas as informações do formulário antes de prosseguir.",
    () => renderCalculationResult(selectedRadio)
  );

  buttonGroup.append(buttonPrev, buttonCalc);
  sectionContainer.append(buttonOpenDialog, dialogElement, sectionDescription);
  formSection.append(hasVacationDueRadio, noVacationDueRadio);

  buttonCalc.addEventListener("click", () => showAlertDialog(alertDialog));
  buttonOpenDialog.addEventListener("click", () => dialogElement.showModal());

  return createStep(sectionTitle, sectionContainer, formSection, buttonGroup);
}
