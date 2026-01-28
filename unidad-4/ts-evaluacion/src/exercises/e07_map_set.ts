import { Role, Task } from "../models";

/**
 * E07 – Map / Set
 */

export function indexTasksById(tasks: Task[]): Map<string, Task> {
  // key=id, value=task (última gana si repetido)
  const map = new Map<string, Task>();
  for (const task of tasks) {
    map.set(task.id, task);
  }
  return map;
}

export function uniqueRoles(roles: Role[]): Set<Role> {
  // devuelve Set sin duplicados
  return new Set(roles);
}

export function touchSession(sessions: Map<string, Date>, token: string, now: Date): Date | undefined {
  // devuelve fecha previa si existía y actualiza token->now
  const prevDate = sessions.get(token);
  sessions.set(token, now);
  return prevDate;
}
