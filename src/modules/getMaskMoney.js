export default function getMaskMoney() {
  const inputs = document.querySelectorAll(".form-input");

  if (!inputs) {
    console.error("Erro ao localizar inputs.");
    return;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      let formattedValue = input.value.replace(/\D/g, "");
      formattedValue = (formattedValue / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      input.value = formattedValue;
    });
  });
}
