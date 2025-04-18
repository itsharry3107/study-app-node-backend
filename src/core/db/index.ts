import mongoose from "mongoose";

export interface DataBaseConnectionProps {
  callback?: () => void | any;
}

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Maximum number of connections in the connection pool
  serverSelectionTimeoutMS: 5000, // Timeout for server selection
  socketTimeoutMS: 45000, // Timeout for socket operations
  family: 4, // Use IPv4, skip trying IPv6
  ssl: true, // Enable SSL
  sslValidate: true, // Validate SSL certificates
};

export function connectDB<T extends DataBaseConnectionProps>(
  options: T
): mongoose.Connection | Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Add error handling for connection
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected. Attempting to reconnect...");
  });

  return mongoose
    .connect(process.env.MONGODB_URL as string, dbOptions)
    .then((mongooseInstance) => {
      console.log("Successfully connected to MongoDB");
      if (options.callback) {
        options.callback();
      }
      return mongooseInstance;
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit process on connection failure
      throw error; // Re-throw the error after logging
    });
}
