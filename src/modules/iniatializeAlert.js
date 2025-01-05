import { appendAlert, clearAlert, createAlert } from "../components/ui/alert";
import { icons } from "../icons/icons";

export default function initializeAlert(selectedRadio) {
  const noticeOfTerminationRadios = document.querySelectorAll(
    'input[name="notice-of-termination"]'
  );
  const withdrawalMethodRadios = document.querySelectorAll(
    'input[name="withdrawal-method"]'
  );

  if (selectedRadio.value === "resignation" && noticeOfTerminationRadios) {
    noticeOfTerminationRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "no") {
          const inputSalaryValue =
            document.getElementById("salary-input").value;

          const noticeOfTerminationMsg = `Será descontado um valor de <strong>${inputSalaryValue}</strong> do total a ser recebido.`;

          const noticeOfTerminationAlert = createAlert(
            icons.exclamationTriangleSolid,
            noticeOfTerminationMsg,
            "alert-danger"
          );

          appendAlert(radio, noticeOfTerminationAlert);
        } else {
          clearAlert(radio);
        }
      });
    });
  }

  if (selectedRadio.value === "laid-off" && withdrawalMethodRadios) {
    withdrawalMethodRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.value === "birthday-withdrawal") {
          const inputFGTSValue = document.getElementById(
            "available-fgts-balance-input"
          ).value;

          const withdrawalMethodMsg = `Você não terá direito ao saque de um valor de <strong>${inputFGTSValue}</strong> do seu Fundo de Garantia.`;

          const withdrawalMethodAlert = createAlert(
            icons.exclamationTriangleSolid,
            withdrawalMethodMsg,
            "alert-warning"
          );

          appendAlert(radio, withdrawalMethodAlert);
        } else {
          clearAlert(radio);
        }
      });
    });
  }
}
