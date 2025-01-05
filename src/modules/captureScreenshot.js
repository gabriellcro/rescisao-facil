import * as rasterizeHTML from "rasterizehtml";

export default function captureScreenshot() {
  // Selecione o elemento com a classe .holerite-container
  const elementToCapture = document.querySelector(
    ".calculation-result-container"
  );

  if (!elementToCapture) {
    console.error("Elemento .calculation-result-containernão encontrado.");
    return;
  }

  // Adicionar o título "Rescisão Fácil" no início do conteúdo capturado
  const titleElement = document.createElement("h1");
  titleElement.textContent = "Rescisão Fácil";
  elementToCapture.insertBefore(titleElement, elementToCapture.firstChild);

  // Remover ou ocultar todos os botões e SVGs
  const buttons = elementToCapture.querySelectorAll("button");
  const svgs = elementToCapture.querySelectorAll("svg");

  buttons.forEach((button) => (button.style.display = "none")); // Oculta os botões
  svgs.forEach((svg) => (svg.style.display = "none")); // Oculta os SVGs

  // Crie o canvas onde o conteúdo será desenhado
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas); // Adiciona o canvas à página (opcional)

  // Defina as dimensões do canvas com base nas dimensões do elemento
  const rect = elementToCapture.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  // Defina o contexto do canvas
  const ctx = canvas.getContext("2d");

  // Defina a cor de fundo do canvas (cor de fundo do tema claro)
  ctx.fillStyle = "#ffffff"; // Cor de fundo branca
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche o canvas com a cor de fundo

  // Usa rasterizeHTML.js para desenhar o conteúdo do elemento selecionado no canvas
  rasterizeHTML.drawHTML(elementToCapture.outerHTML, canvas).then(function () {
    // Converte o canvas em uma imagem PNG
    const img = canvas.toDataURL("image/png");

    // Cria um link para baixar a imagem gerada
    const link = document.createElement("a");
    link.href = img;
    link.download = "holerite.png";
    link.click();

    // Opcional: remove o canvas do DOM após a captura
    document.body.removeChild(canvas);
    titleElement.remove();

    // Restaurar os botões e SVGs (se necessário)
    buttons.forEach((button) => (button.style.display = "")); // Restaura a visibilidade dos botões
    svgs.forEach((svg) => (svg.style.display = "")); // Restaura a visibilidade dos SVGs
  });
}
