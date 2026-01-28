/**
 * E08 – Genéricos
 */

export function first<T>(items: T[]): T {
  // devuelve primer elemento, Error si vacío
  if (items.length === 0) {
    throw new Error("Array is empty");
  }
  return items[0];
}

export function unique<T>(items: T[]): T[] {
  // devuelve array sin duplicados preservando orden (usa Set internamente)
  return [...new Set(items)];
}

export function groupBy<T, K extends string | number>(items: T[], keyFn: (item: T) => K): Record<K, T[]> {
  // agrupa por clave y devuelve Record (arrays nuevos)
  const result = {} as Record<K, T[]>;
  for (const item of items) { 
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}
