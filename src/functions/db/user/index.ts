import { User } from "../../../models/index";
import type { IUser } from "../../../typings/models/index";

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};

export const updateUserByHashedId = async (
  hashedId: string,
  updates: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findOneAndUpdate({ hashedId }, updates, { new: true });
};

export const deleteUserByHashedId = async (
  hashedId: string
): Promise<IUser | null> => {
  return await User.findOneAndDelete({ hashedId });
};

export const findUserByFirebaseUid = async (
  firebaseUid: string
): Promise<IUser | null> => {
  return await User.findOne({ firebaseUid });
};
