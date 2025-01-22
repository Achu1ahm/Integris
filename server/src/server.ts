import express from "express";
import cors from "cors";
import { routes } from "./routes";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use("/", routes);

const server = app.listen(process.env.PORT, () => {
  console.log(`express is listening at ${process.env.PORT}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(`--error:${err.message}`);
  console.log("closing down server due to unhandled rejection");
  server.close(() => {
    process.exit(1);
  });
});
