import createCustomText from "../components/utils/text";
import createButton from "../components/ui/button";
import createCustomElement from "../components/utils/container";
import { icons } from "../icons/icons";

export default function createMainElement() {
  const container = document.createElement("main");

  const titleContainer = createCustomElement(
    "div",
    "container-lg",
    "flex-col",
    "p-5",
    "space-5",
    "text-center"
  );
  const titleTextContent = `Simule sua Rescisão Contratual de forma <span class="gradient-pink-yellow">simples</span> e <span class="gradient-purple-cyan">prática</span>`;

  const titleElement = createCustomText(
    "h2",
    titleTextContent,
    "text-xxl",
    "gradient-primary",
    "animate-slide-right-600"
  );

  const paragraphElement = createCustomText(
    "p",
    "Preencha seus dados e descubra os valores da sua rescisão em poucos cliques. Cada cálculo segue um fluxo de formulário exclusivo para garantir precisão.",
    "text-md",
    "secondary-color",
    "animate-slide-up"
  );

  const buttonStartedText = `Iniciar ${icons.chevronRight}`;
  const buttonStarted = createButton(
    buttonStartedText,
    false,
    "btn-pill",
    "btn-primary",
    "btn-started",
    "animate-fade-in"
  );

  titleContainer.append(titleElement, paragraphElement);
  container.append(titleContainer, buttonStarted);

  return container;
}
