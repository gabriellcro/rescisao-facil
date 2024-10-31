export default class Calc {
  workPeriod(startDateInput, endDateInput) {
    // Converte os valores dos campos de entrada para objetos Date
    let startDate = new Date(startDateInput.value);
    let endDate = new Date(endDateInput.value);

    // Extrai mês e ano das datas de início e término
    let startMonth = startDate.getMonth();
    let startYear = startDate.getFullYear();
    let endMonth = endDate.getMonth();
    let endYear = endDate.getFullYear();

    // Calcula o número total de meses entre as duas datas
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    return totalMonths;
  }

  installmentCount(startDateInput, endDateInput) {
    // Converte os valores dos campos de entrada em objetos Date
    let startDate = new Date(startDateInput.value);
    let endDate = new Date(endDateInput.value);

    // Extrai os meses e anos das datas de início e término
    let startMonth = startDate.getMonth();
    let startYear = startDate.getFullYear();
    let endMonth = endDate.getMonth();
    let endYear = endDate.getFullYear();

    // Calcula o número total de meses entre as duas datas
    const totalMonthsApart =
      (endYear - startYear) * 12 + (endMonth - startMonth);

    let installmentQuantity = 0;

    // Define o número de parcelas com base na diferença total em meses
    if (totalMonthsApart >= 6 && totalMonthsApart < 12) {
      installmentQuantity = 3;
    } else if (totalMonthsApart >= 12 && totalMonthsApart < 24) {
      installmentQuantity = 4;
    } else if (totalMonthsApart >= 24) {
      installmentQuantity = 5;
    }

    return installmentQuantity;
  }

  proportionalLeave(leaveMonths, monthlySalary) {
    // Utiliza um switch-case para determinar o cálculo com base nos meses de férias proporcionais
    switch (leaveMonths) {
      case "one":
        return (monthlySalary / 12) * 1 + ((monthlySalary / 12) * 1) / 3; // Calcula 1/12 do salário + 1/3 do 1/12
      case "two":
        return (monthlySalary / 12) * 2 + ((monthlySalary / 12) * 2) / 3; // Calcula 2/12 do salário + 1/3 do 2/12
      case "three":
        return (monthlySalary / 12) * 3 + ((monthlySalary / 12) * 3) / 3; // Calcula 3/12 do salário + 1/3 do 3/12
      case "four":
        return (monthlySalary / 12) * 4 + ((monthlySalary / 12) * 4) / 3; // Calcula 4/12 do salário + 1/3 do 4/12
      case "five":
        return (monthlySalary / 12) * 5 + ((monthlySalary / 12) * 5) / 3; // Calcula 5/12 do salário + 1/3 do 5/12
      case "six":
        return (monthlySalary / 12) * 6 + ((monthlySalary / 12) * 6) / 3; // Calcula 6/12 do salário + 1/3 do 6/12
      case "seven":
        return (monthlySalary / 12) * 7 + ((monthlySalary / 12) * 7) / 3; // Calcula 7/12 do salário + 1/3 do 7/12
      case "eight":
        return (monthlySalary / 12) * 8 + ((monthlySalary / 12) * 8) / 3; // Calcula 8/12 do salário + 1/3 do 8/12
      case "nine":
        return (monthlySalary / 12) * 9 + ((monthlySalary / 12) * 9) / 3; // Calcula 9/12 do salário + 1/3 do 9/12
      case "ten":
        return (monthlySalary / 12) * 10 + ((monthlySalary / 12) * 10) / 3; // Calcula 10/12 do salário + 1/3 do 10/12
      case "eleven":
        return (monthlySalary / 12) * 11 + ((monthlySalary / 12) * 11) / 3; // Calcula 11/12 do salário + 1/3 do 11/12
      default:
        return undefined; // Retorna indefinido para opções inválidas
    }
  }

  thirteenthSalaryAmount(monthIndex, monthlySalary) {
    // Utiliza um switch-case para determinar o cálculo com base no mês
    switch (monthIndex) {
      case 0: // Janeiro
        return monthlySalary / 12; // Divide o salário mensal por 12
      case 1: // Fevereiro
        return (monthlySalary / 12) * 2; // Calcula proporcionalmente para fevereiro
      case 2: // Março
        return (monthlySalary / 12) * 3; // Calcula proporcionalmente para março
      case 3: // Abril
        return (monthlySalary / 12) * 4; // Calcula proporcionalmente para abril
      case 4: // Maio
        return (monthlySalary / 12) * 5; // Calcula proporcionalmente para maio
      case 5: // Junho
        return (monthlySalary / 12) * 6; // Calcula proporcionalmente para junho
      case 6: // Julho
        return (monthlySalary / 12) * 7; // Calcula proporcionalmente para julho
      case 7: // Agosto
        return (monthlySalary / 12) * 8; // Calcula proporcionalmente para agosto
      case 8: // Setembro
        return (monthlySalary / 12) * 9; // Calcula proporcionalmente para setembro
      case 9: // Outubro
        return (monthlySalary / 12) * 10; // Calcula proporcionalmente para outubro
      case 10: // Novembro
        return (monthlySalary / 12) * 11; // Calcula proporcionalmente para novembro
      case 11: // Dezembro
        return monthlySalary; // O salário completo para dezembro
      default:
        return undefined; // Retorna indefinido para entradas inválidas de mês
    }
  }

  unemploymentBenefit(monthlySalary) {
    // Verifica se o salário mensal (monthlySalary) é menor ou igual a 1907.77.
    if (monthlySalary <= 1907.77) {
      // Se for menor ou igual a 1907.77, retorna 80% do salário.
      return monthlySalary * 0.8;
    } else if (monthlySalary <= 3179.45) {
      // Se o salário estiver entre 1907.77 e 3179.45, retorna um valor fixo de 1526.22
      // mais 50% do valor que excede 1907.77.
      return 1526.22 + (monthlySalary - 1907.77) * 0.5;
    } else {
      // Se o salário for maior que 3179.45, retorna um valor fixo de 1911.7.
      return 1911.7;
    }
  }
}
