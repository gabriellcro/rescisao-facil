export default function activeButtonCreateForm() {
  const inputRadios = document.querySelectorAll(
    'input[name="termination-type"]'
  );
  const button = document.querySelector(".btn-create-form");

  inputRadios.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) button.disabled = false;
    });
  });
}
