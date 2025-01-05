import createCustomElement from "../utils/container"; // Função para criar elementos personalizados

export default function createStep(
  cardTitleText,
  cardParagraphText,
  cardFormSection,
  cardButtonGroup
) {
  const card = createCustomElement("section", "step");

  if (
    !(cardTitleText instanceof HTMLElement) ||
    !(cardParagraphText instanceof HTMLElement) ||
    !(cardFormSection instanceof HTMLElement) ||
    !(cardButtonGroup instanceof HTMLElement)
  ) {
    console.error(
      "Erro: Um ou mais elementos não são instâncias de HTMLElement.\n" +
        `cardTitleText: ${
          cardTitleText instanceof HTMLElement ? "Válido" : "Inválido"
        }\n` +
        `cardParagraphText: ${
          cardParagraphText instanceof HTMLElement ? "Válido" : "Inválido"
        }\n` +
        `cardFormSection: ${
          cardFormSection instanceof HTMLElement ? "Válido" : "Inválido"
        }\n` +
        `cardButtonGroup: ${
          cardButtonGroup instanceof HTMLElement ? "Válido" : "Inválido"
        }`
    );
  }

  card.append(
    cardTitleText,
    cardParagraphText,
    cardFormSection,
    cardButtonGroup
  );

  return card;
}
