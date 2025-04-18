import crypto from "crypto";

export const generateHashedId = (firebaseUid: string): string => {
  return crypto.createHash("sha256").update(firebaseUid).digest("hex");
};
