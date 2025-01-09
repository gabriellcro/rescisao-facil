import createStep from "../components/ui/step";
import createCustomElement from "../components/utils/container";
import createCustomText from "../components/utils/text";
import createLink from "../components/ui/link";
import createInputText from "../components/ui/inputText";
import createButton from "../components/ui/button";

export default function createFgtsBalanceSection() {
  const sectionTitle = createCustomText(
    "h2",
    "Consulte o Saldo do seu FGTS",
    "text-lg",
    "animate-slide-right-200"
  );

  const fgtsLink = createLink(
    "Acessar o Aplicativo FGTS",
    "https://www.caixa.gov.br/beneficios-trabalhador/fgts/extrato-fgts/Paginas/default.aspx",
    "Clique aqui para consultar o saldo do seu FGTS.",
    "animate-slide-right-300"
  );

  const description = createCustomText(
    "p",
    "Por favor, insira o valor do seu FGTS",
    "secondary-color",
    "animate-slide-right-400"
  );

  const sectionContainer = createCustomElement(
    "div",
    "container-fluid",
    "flex-col",
    "space-8"
  );

  const inputSection = createInputText(
    "available-fgts-balance-input",
    "R$ 0,00",
    "animate-slide-right-600"
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

  sectionContainer.append(fgtsLink, description);
  buttonGroup.append(buttonPrev, buttonNext);

  return createStep(sectionTitle, sectionContainer, inputSection, buttonGroup); // Cria e retorna o card
}
