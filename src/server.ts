import cors from "cors";
import express from "express";

import { ENV } from "./configs/env.configs.js";

function init() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.listen(ENV.PORT, async () => {
    try {
      console.log(`Server is runnin on port: ${ENV.PORT}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
}

init();
