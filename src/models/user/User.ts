import { model, Schema } from "mongoose";
import type { IUser } from "../../typings/models";

const UserSchema = new Schema<IUser>({
  firebaseUid: { type: "string", required: true, unique: true },
  hashedId: { type: "string", required: true, unique: true },
  hashedPassword: { type: "string", required: true },
});
export default model<IUser>("User", UserSchema);
