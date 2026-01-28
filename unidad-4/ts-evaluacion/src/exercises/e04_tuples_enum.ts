import { Role } from "../models";

/**
 * E04 – Tuples y enum
 */

export type JwtParts = [header: string, payload: string, signature: string];

export function splitJwt(token: string): JwtParts {
  // "a.b.c" => [a,b,c] exactamente 3 partes, si no => Error
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new Error("Invalid token");
  }
  const jwtParts: JwtParts = tokenParts as JwtParts;
  return jwtParts;
}

export function roleFromString(value: string): Role {
  // "ADMIN"|"USER" (case-insensitive) => Role; si no => Error
  const valueUpper = value.toUpperCase();
  if (valueUpper === "ADMIN") {
    return Role.ADMIN;
  }
  if (valueUpper === "USER") {
    return Role.USER;
  }
  throw new Error("Invalid role");
}

export function formatUserTag(username: string, role: Role): string {
  // "juan", ADMIN => "juan#ADMIN" (username trim, no vacío)
  const trimmed = username.trim();
  if (trimmed === "") {
    throw new Error("Username cannot be empty");
  }
  return `${trimmed}#${role.toUpperCase()}`;
}
