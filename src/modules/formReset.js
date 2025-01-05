import activeButtonCreateForm from "../template/activeButtonCreateForm";
import createTerminationReasonSection from "../template/terminationReasonSection";

export function resetStep() {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    index === 0
      ? step.classList.add("step-active")
      : step.classList.remove("step-active");
  });
}

export function resetForm() {
  const terminationReasonSection = createTerminationReasonSection();
  const mainElement = document.querySelector("main");

  mainElement.innerHTML = "";
  mainElement.appendChild(terminationReasonSection);
  activeButtonCreateForm();
}
