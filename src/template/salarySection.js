import createStep from "../components/ui/step";
import createInputText from "../components/ui/inputText";
import createButton from "../components/ui/button";
import createCustomElement from "../components/utils/container";
import createCustomText from "../components/utils/text";
import { icons } from "../icons/icons";
import { resetForm } from "../modules/formReset";
import {
  showAlertDialog,
  createAlertDialog,
} from "../components/ui/alertDialog";

export default function createSalarySection() {
  const sectionTitle = createCustomText("h2", "Informe Seu Salário", "text-md");

  const sectionContainer = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-5",
    "animate-slide-right-200"
  );

  const sectionDescription = createCustomText(
    "p",
    "Por favor, insira o valor do seu salário",
    "secondary",
    "animate-slide-right-400"
  );

  const salaryInput = createInputText(
    "salary-input",
    "R$ 0.00",
    "animate-slide-right-600"
  );

  const buttonReset = createButton(
    "Reiniciar",
    false,
    "btn",
    "btn-outline",
    "btn-reset"
  );
  const buttonNext = createButton(
    "Próximo",
    true,
    "btn",
    "btn-primary",
    "btn-next"
  );
  const buttonGroup = createCustomElement(
    "div",
    "btn-group",
    "animate-fade-in"
  );

  const alertDialog = createAlertDialog(
    icons.exclamationTriangle,
    "dialog-warning",
    "Tem certeza de que deseja reiniciar o formulário?",
    "Você perderá todos os dados inseridos e será redirecionado para a tela de escolha do fluxo.",
    () => resetForm()
  );

  buttonReset.addEventListener("click", () => {
    showAlertDialog(alertDialog);
  });

  sectionContainer.append(sectionDescription);
  buttonGroup.append(buttonReset, buttonNext);

  return createStep(sectionTitle, sectionContainer, salaryInput, buttonGroup);
}
