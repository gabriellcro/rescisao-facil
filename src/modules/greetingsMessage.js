export default function getGreeting(hourOfDay) {
  let message;

  // Verifica o intervalo de horas e atribui uma saudação correspondente
  if (hourOfDay >= 5 && hourOfDay < 12) {
    message = "Bom dia!"; // Se for de manhã
  } else if (hourOfDay >= 12 && hourOfDay < 18) {
    message = "Boa tarde!"; // Se for à tarde
  } else if (
    (hourOfDay >= 18 && hourOfDay < 24) ||
    (hourOfDay >= 0 && hourOfDay < 5)
  ) {
    message = "Boa noite!"; // Se for à noite
  } else {
    message = "Visitante"; // Se a hora não estiver dentro dos intervalos conhecidos
  }

  return message; // Retorna a saudação gerada
}
