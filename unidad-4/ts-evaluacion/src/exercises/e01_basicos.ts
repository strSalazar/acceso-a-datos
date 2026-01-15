/**
 * E01 – Tipos básicos: string/number/boolean/null/undefined
 */

export function normalizeBearer(authHeader: string): string {
  // trim + "Bearer <token>" (case-insensitive), colapsa espacios a 1, Error si inválido
  let trimHeader = authHeader.trim();
  if (trimHeader == null || trimHeader == "" || !authHeader.toLowerCase().includes("bearer")) {
    throw new Error("no es valido");
  }
  let splitHeader = trimHeader.split(new RegExp(/\s+/))
  let primera = splitHeader[0].charAt(0).toUpperCase() + splitHeader[0].slice(1);
  let salida:string = primera; 
  for (let index = 1; index < splitHeader.length; index++) {
    salida += " " + splitHeader[index];
    
  }
  return salida;
}

export function clamp01(value: number): number {
  // Devuelve value limitado a [0,1]. Error si NaN o no finito.
  if (isNaN(value) || !isFinite(value)) {
    throw new Error("no es un numero valido");
  }
  if (value < 0) {
    return 0;
  } else if (value > 1) {
    return 1;
  } else {
    return value;
  }
}

export function safeBool(value: boolean | null | undefined): boolean {
  // null/undefined => false; boolean => mismo valor
  if (value == null || value == undefined) {
    return false;
  } 
  return value;
}
