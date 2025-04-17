import mongoose from "mongoose";

export interface DataBaseConnectionProps {
  callback?: () => void | any;
}

export function connectDB<T extends DataBaseConnectionProps>(
  options: T
): mongoose.Connection | Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  return mongoose
    .connect(process.env.MONGODB_URL as string)
    .then(options.callback);
}
