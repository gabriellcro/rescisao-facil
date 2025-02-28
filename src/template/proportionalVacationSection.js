import { proportionalVacationInfo } from "../article/proportionalVacationInfo";
import { MONTH_LIST } from "../constants/monthsList";
import createStep from "../components/ui/step";
import createCustomElement from "../components/utils/container";
import createDialog from "../components/ui/dialog";
import createDropdown from "../components/ui/dropdown";
import createInputRadioSimple from "../components/ui/inputRadioSimple";
import createButton from "../components/ui/button";
import createCustomText from "../components/utils/text";
import { icons } from "../icons/icons";

export default function createProportionalVacationSection() {
  const sectionTitle = createCustomText(
    "h2",
    "Tem Férias Proporcionais?",
    "text-lg",
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
    "Clique aqui para saber mais sobre férias proporcionais"
  );

  const dialogElement = createDialog(proportionalVacationInfo);

  const sectionDescription = createCustomText(
    "p",
    "Por favor, escolha uma opção.",
    "secondary-color",
    "animate-slide-right-400"
  );
  const sectionContainer = createCustomElement("div", "form-group");

  const hasProportionalVacationRadio = createInputRadioSimple(
    "proportional-vacation-status",
    "hasProportionalVacation",
    "proportional-vacation-yes",
    "Sim, tenho férias proporcionais",
    "animate-slide-right-600",
    false
  );

  const noProportionalVacationRadio = createInputRadioSimple(
    "proportional-vacation-status",
    "noProportionalVacation",
    "proportional-vacation-no",
    "Não, não tenho férias proporcionais",
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

  const buttonNext = createButton(
    "Próximo",
    true,
    "btn",
    "btn-primary",
    "btn-next"
  );
  const buttonGroup = createCustomElement("div", "btn-group", "animate-fade-in");
  buttonGroup.append(buttonPrev, buttonNext);

  sectionContainer.append(buttonOpenDialog, dialogElement, sectionDescription);
  formSection.append(hasProportionalVacationRadio, noProportionalVacationRadio);

  buttonOpenDialog.addEventListener("click", () => dialogElement.showModal());

  return createStep(sectionTitle, sectionContainer, formSection, buttonGroup);
}
