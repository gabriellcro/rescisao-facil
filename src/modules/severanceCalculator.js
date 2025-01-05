import {
  LOWER_LIMIT,
  MID_LIMIT,
  MAX_BENEFIT,
} from "../constants/unemploymentConstants";

class SeveranceCalculator {
  workPeriod(startDateInput, endDateInput) {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endYear = endDate.getFullYear();

    return (endYear - startYear) * 12 + (endMonth - startMonth);
  }

  installmentCount(startDateInput, endDateInput) {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endYear = endDate.getFullYear();

    const totalMonthsApart =
      (endYear - startYear) * 12 + (endMonth - startMonth);

    if (totalMonthsApart >= 6 && totalMonthsApart < 12) {
      return 3;
    } else if (totalMonthsApart >= 12 && totalMonthsApart < 24) {
      return 4;
    } else {
      return 5;
    }
  }

  expiredVacation(monthlySalary) {
    return Number(monthlySalary + monthlySalary / 3);
  }

  fineTermination(fgts) {
    return Number((fgts / 100) * 40);
  }

  proportionalLeave(leaveMonths, monthlySalary) {
    if (!leaveMonths || !monthlySalary) return undefined;

    const leaveMonthsValue = Number(leaveMonths);
    return Number(
      (monthlySalary / 12) * leaveMonthsValue +
        ((monthlySalary / 12) * leaveMonths) / 3
    );
  }

  thirteenthSalaryAmount(monthlySalary) {
    const dateCurrent = new Date();
    const monthIndex = dateCurrent.getMonth() + 1;
    const value = monthlySalary / 12;

    return Number(value * monthIndex);
  }

  unemploymentBenefit(monthlySalary) {
    if (monthlySalary <= LOWER_LIMIT) {
      return monthlySalary * 0.8;
    } else if (monthlySalary <= MID_LIMIT) {
      return 1526.22 + (monthlySalary - LOWER_LIMIT) * 0.5;
    } else {
      return MAX_BENEFIT;
    }
  }
}

export default SeveranceCalculator;
