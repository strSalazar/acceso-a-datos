/**
 * E01 – Tipos básicos: string/number/boolean/null/undefined
 */

export function normalizeBearer(authHeader: string): string {
  // trim + "Bearer <token>" (case-insensitive), colapsa espacios a 1, Error si inválido
  let trimHeader = authHeader.trim();
  if (trimHeader == null || trimHeader == "") {
    throw new Error("no es valido");
  }
  let splitHeader = trimHeader.split(new RegExp(/\s+/))
  let primera = splitHeader[0].charAt(0).toUpperCase();
  let salida:string = primera; 
  for (let index = 1; index < trimHeader.length; index++) {
    salida += trimHeader[index];
    
  }
  return salida;
}

export function clamp01(value: number): number {
  // Devuelve value limitado a [0,1]. Error si NaN o no finito.
  throw new Error("TODO");
}

export function safeBool(value: boolean | null | undefined): boolean {
  // null/undefined => false; boolean => mismo valor
  throw new Error("TODO");
}
