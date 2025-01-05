import createCustomText from "../components/utils/text";
import createButton from "../components/ui/button";
import createCustomElement from "../components/utils/container";
import { icons } from "../icons/icons";

export default function createMainElement() {
  const container = createCustomElement("main", "main");

  const titleContainer = createCustomElement(
    "main",
    "container-md",
    "text-center"
  );
  const titleTextContent = `Simule sua Rescisão Contratual de forma <span class="gradient-pink-yellow">simples</span> e <span class="gradient-purple-cyan">prática</span>`;

  const titleElement = createCustomText(
    "h2",
    titleTextContent,
    "text-xl",
    "gradient-primary",
    "animate-slide-right-600"
  );

  const paragraphElement = createCustomText(
    "p",
    "Preencha seus dados e descubra os valores da sua rescisão em poucos cliques. Cada cálculo segue um fluxo de formulário exclusivo para garantir precisão.",
    "text-sm",
    "secondary-color",
    "animate-slide-up"
  );

  const buttonStartedText = `Iniciar ${icons.chevronRight}`;
  const buttonStarted = createButton(
    buttonStartedText,
    false,
    "btn-pill",
    "btn-primary",
    "mt-5",
    "btn-started",
    "animate-fade-in"
  );

  titleContainer.append(titleElement);
  container.append(titleContainer, paragraphElement, buttonStarted);

  return container;
}
