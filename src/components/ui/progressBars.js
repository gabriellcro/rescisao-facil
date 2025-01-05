import createCustomElement from "../utils/container";

let currentStep = 0;

export function createProgressBar(steps) {
  const container = createCustomElement("div", "progress-bar");
  const indicador = createCustomElement("span", "indicador");
  container.appendChild(indicador);

  steps.forEach((step, index) => {
    const stepElement = createCustomElement("span", "circle");

    if (index === 0) stepElement.classList.add("progress-active");

    container.appendChild(stepElement);
  });

  console.log();

  handleProgressBar();

  return container;
}

const handleProgressBar = () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
  });
};

const updateSteps = (e) => {
  const circles = document.querySelectorAll(".circle");
  const indicador = document.querySelector(".indicador");

  if (
    !e.target.classList.contains("btn") ||
    e.target.classList.contains("btn-reset") ||
    e.target.classList.contains("btn-calc")
  )
    return;

  currentStep = e.target.classList.contains("btn-next")
    ? ++currentStep
    : --currentStep;

  circles.forEach((circle, index) => {
    circle.classList.toggle("completed", index < currentStep);
    circle.classList.toggle("progress-active", index < currentStep + 1);
  });

  indicador.style.width = `${(currentStep / (circles.length - 1)) * 100}%`;
};

export function resetProgressBar() {
  currentStep = 0;
}
