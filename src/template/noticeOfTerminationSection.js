import createStep from "../components/ui/step";
import createCustomElement from "../components/utils/container";
import createButton from "../components/ui/button";
import createInputRadioSimple from "../components/ui/inputRadioSimple";
import createCustomText from "../components/utils/text";

export default function createNoticeOfTerminationSection(
  optionNoText,
  disabledDiss
) {
  const sectionTitle = createCustomText(
    "h2",
    "Aviso Prévio: Está Cumprindo?",
    "text-md",
    "animate-slide-right-200"
  );
  const sectionDescription = createCustomText(
    "p",
    "Por favor, selecione a opção que melhor descreve sua situação.",
    "secondary-color",
    "animate-slide-right-300"
  );

  const optionYes = createInputRadioSimple(
    "notice-of-termination",
    "yes",
    "notice-of-termination-yes",
    "Sim, o aviso prévio está sendo cumprido corretamente.",
    "animate-slide-right-500",
    false
  );

  const optionNo = createInputRadioSimple(
    "notice-of-termination",
    "no",
    "notice-of-termination-no",
    optionNoText,
    "animate-slide-right-600",
    false
  );

  const optionDiss = createInputRadioSimple(
    "notice-of-termination",
    "diss",
    "notice-of-termination-diss",
    "Não, fui dispensado de cumprir o aviso prévio.",
    "animate-slide-right-700",
    disabledDiss
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
  formSection.append(optionYes, optionNo, optionDiss);

  return createStep(sectionTitle, sectionDescription, formSection, buttonGroup);
}
