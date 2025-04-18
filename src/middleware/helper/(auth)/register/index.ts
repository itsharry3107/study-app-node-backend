import { generateToken } from "./../../../../functions/core/jwt/(jwt_id)/index";
import { generateHashedId } from "./../../../../functions/helpers/auth/uuid/index";
import { hashPassword } from "./../../../../functions/helpers/auth/password/index";
import type {
  RegisterUserInput,
  RegisterUserResponse,
} from "./../../../../types/auth/index";
import {
  createUser,
  findUserByFirebaseUid,
} from "../../../../functions/db/user";

export const registerUser = async (
  body: RegisterUserInput
): Promise<RegisterUserResponse> => {
  const { uid, password } = body;

  if (!uid || !password) {
    throw new Error("UID and password are required.");
  }

  const existingUser = await findUserByFirebaseUid(uid);
  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedId = generateHashedId(uid);
  const hashedPassword = await hashPassword(password);

  await createUser({
    firebaseUid: uid,
    hashedId,
    hashedPassword,
  });

  const token = generateToken(uid);

  return {
    token,
    user: {
      uid,
      hashedId,
    },
  };
};
