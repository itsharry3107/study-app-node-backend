import type { StringValue } from "./../../../../@types/jsonwebtoken/string/StringValue";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (
  firebaseUid: string,
  expiration: string = "1h"
): string => {
  return jwt.sign({ uid: firebaseUid }, JWT_SECRET, {
    expiresIn: expiration as StringValue,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
