import { JwtPayload, Role } from "../models";

/**
 * E05 – Union + type guards (unknown) + JWT
 */

export function normalizeId(id: string | number): string {
  // number => String; string => trim; vacío => Error
  if (typeof(id) === "number") {
    return String(id);
  }
  if (typeof(id) === "string") {
    if (id.trim() === "") {
      throw new Error("Invalid id");
    }
    return id.trim();
  }
  throw new Error("Invalid id");
}

export function isJwtPayload(value: unknown): value is JwtPayload {
  // objeto no null con sub string no vacía, role USER/ADMIN, exp number finito >=0
  if (typeof value !== "object" || value === null){
    return false;
  }
  const object = value as Record<string, unknown>;
  if (typeof object.sub !== "string" || !object.sub.trim()){
    return false;
  }
  if (object.role !== Role.USER && object.role !== Role.ADMIN){
    return false;
  }
  if (typeof object.exp !== "number" || !Number.isFinite(object.exp) || object.exp < 0) {
    return false;
  }
  return true;
}

export function requireRole(payload: JwtPayload, role: Role): void {
  // lanza Error si payload.role != role
  if (payload.role !== role) {
    throw new Error("Invalid role");
  }
}
