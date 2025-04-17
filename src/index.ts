import "dotenv/config";
import { app } from "./app";
import { Express } from "./classes/index";

const server = new Express(app);

server.listen(0, (port) => console.log(`Server is running on port ${port}`));
server.connect(() => console.log("Connected to the database"));
