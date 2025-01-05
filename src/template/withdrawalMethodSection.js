// import { icons } from "../icons/icons";
import { withdrawalMethodInfo } from "../article/withdrawalMethodInfo";
import createStep from "../components/ui/step";
import createCustomElement from "../components/utils/container";
import createDialog from "../components/ui/dialog";
import createInputRadioSimple from "../components/ui/inputRadioSimple";
import createButton from "../components/ui/button";
import createCustomText from "../components/utils/text";
import { icons } from "../icons/icons";

export default function createWithdrawalMethodSection() {
  const sectionTitle = createCustomText(
    "h2",
    "Selecione a Modalidade de Saque",
    "text-md",
    "animate-slide-right-200"
  );
  const sectionDescription = createCustomText(
    "p",
    "Por favor, escolha uma opção.",
    "secondary-color",
    "animate-slide-right-300"
  );

  const buttonOpenDialogText = `${icons.informationCircle} Saiba mais`;

  const buttonOpenDialog = createButton(
    buttonOpenDialogText,
    false,
    "btn-link",
    "tooltip",
    "animate-slide-right-400"
  );

  buttonOpenDialog.setAttribute(
    "aria-label",
    "Clique aqui para saber mais sobre as modalidades de saque rescisão"
  );

  const dialogElement = createDialog(withdrawalMethodInfo);

  const severancePayRadio = createInputRadioSimple(
    "withdrawal-method",
    "severance-pay",
    "severance-pay",
    "Saque rescisão",
    "animate-slide-right-600",
    false
  );

  const birthdayWithdrawalRadio = createInputRadioSimple(
    "withdrawal-method",
    "birthday-withdrawal",
    "birthday-withdrawal",
    "Saque aniversário",
    "animate-slide-right-700",
    false
  );

  const sectionContainer = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-5"
  );
  const formSection = createCustomElement("div", "form-group");

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
  formSection.append(severancePayRadio, birthdayWithdrawalRadio);

  buttonOpenDialog.addEventListener("click", () => dialogElement.showModal());

  return createStep(sectionTitle, sectionContainer, formSection, buttonGroup);
}
