export default function setupFormNavigation() {
  const btnPrev = document.querySelectorAll(".btn-prev");
  const btnNext = document.querySelectorAll(".btn-next");

  btnPrev.forEach((btn) => {
    btn.addEventListener("click", () => navigateToStep(btn, "previous"));
  });
  btnNext.forEach((btn) => {
    btn.addEventListener("click", () => navigateToStep(btn, "next"));
  });
}

function navigateToStep(button, direction) {
  const currentStep = button.closest(".step");

  const targetStep =
    direction === "next"
      ? currentStep.nextElementSibling
      : currentStep.previousElementSibling;

  if (!currentStep || !targetStep) {
    console.error("Erro ao recuperar a etapa atual ou anterior do formulário.");
    return;
  }

  toggleStepVisibility(currentStep, targetStep);
}

function toggleStepVisibility(currentStep, targetStep) {
  currentStep.classList.remove("step-active");
  targetStep.classList.add("step-active");
}
