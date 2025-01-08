import createCustomElement from "../components/utils/container";
import createFgtsBalanceSection from "../template/availableFgtsBalanceSection";
import createEmploymentDateRangeSection from "../template/employmentDateRangeSection";
import createExpiredVacationSection from "../template/expiredVacationSection";
import createNoticeOfTerminationSection from "../template/noticeOfTerminationSection";
import createProportionalVacationSection from "../template/proportionalVacationSection";
import createSalarySection from "../template/salarySection";
import createWithdrawalMethodSection from "../template/withdrawalMethodSection";

export default function formFlow(selectedRadio) {
  const fgtsBalanceSection = createFgtsBalanceSection();
  const employmentDateRangeSection = createEmploymentDateRangeSection();
  const expiredVacationSection = createExpiredVacationSection(selectedRadio);
  const proportionalVacationSection = createProportionalVacationSection();
  const salarySection = createSalarySection();
  const withdrawalMethodSection = createWithdrawalMethodSection();

  if (typeof selectedRadio !== "string" || !selectedRadio) {
    console.error(
      `Erro: O valor "${selectedRadio}" não corresponde a nenhuma das opções válidas de rescisão. Verifique a entrada e tente novamente.`
    );
  }
  const formElement = createCustomElement("form", "form");

  if (selectedRadio === "laid-off") {
    const noticeOfTerminationSection = createNoticeOfTerminationSection(
      "Não, a empresa não cumpriu o aviso prévio corretamente.",
      true
    );

    formElement.append(
      salarySection,
      fgtsBalanceSection,
      withdrawalMethodSection,
      employmentDateRangeSection,
      noticeOfTerminationSection,
      proportionalVacationSection,
      expiredVacationSection
    );
  } else if (selectedRadio === "fired-for-cause") {
    formElement.append(salarySection, expiredVacationSection);
  } else {
    const noticeOfTerminationSection = createNoticeOfTerminationSection(
      "Não, não irei cumprir o aviso prévio.",
      false
    );

    formElement.append(
      salarySection,
      noticeOfTerminationSection,
      proportionalVacationSection,
      expiredVacationSection
    );
  }

  return formElement;
}
