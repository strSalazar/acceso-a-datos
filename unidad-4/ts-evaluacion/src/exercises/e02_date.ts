/**
 * E02 – Date: parseo YYYY-MM-DD, validación y diferencias en días.
 */

export function isValidISODate(iso: string): boolean {
  // regex yyyy-mm-dd + Date válida + conserva componentes (evita 2026-02-30)
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(iso)) {
    return false;
  }

  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function nightsBetween(entrada: string, salida: string): number {
  // intervalo [entrada, salida) => noches. Error si salida<=entrada o fechas inválidas
  if (!isValidISODate(entrada) || !isValidISODate(salida)) {
    throw new Error("Fechas inválidas");
  }

  const start = new Date(entrada);
  const end = new Date(salida);

  if (end.getTime() <= start.getTime()) {
    throw new Error("La fecha de salida debe ser posterior a la de entrada");
  }

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export function toIsoDateOnly(date: Date): string {
  // "YYYY-MM-DD" desde Date (UTC). Error si date inválida.
  if (isNaN(date.getTime())) {
    throw new Error("Fecha inválida");
  }
  return date.toISOString().split("T")[0];
}
