import createInputDate from "../components/ui/inputDate";
import createCustomElement from "../components/utils/container";
import createButton from "../components/ui/button";
import createStep from "../components/ui/step";
import createCustomText from "../components/utils/text";

export default function createEmploymentDateRangeSection() {
  const sectionTitle = createCustomText(
    "h2",
    "Datas de Início e Saída da Empresa",
    "text-lg",
    "animate-slide-right-200"
  );

  const sectionDescription = createCustomText(
    "p",
    "Por favor, selecione as datas de início e saída da sua empresa",
    "secondary-color",
    "animate-slide-right-300"
  );

  const inputDateStart = createInputDate("Data de início", "start-date");
  const inputDateFinish = createInputDate("Data do término", "end-date");

  const formSection = createCustomElement(
    "div",
    "input-date-group",
    "animate-slide-right-500"
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
  const buttonGroup = createCustomElement(
    "div",
    "btn-group",
    "animate-fade-in"
  );

  formSection.append(inputDateStart, inputDateFinish);
  buttonGroup.append(buttonPrev, buttonNext);

  return createStep(sectionTitle, sectionDescription, formSection, buttonGroup);
}
