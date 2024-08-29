import cors from "cors";
import express from "express";

function init() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.listen(8080, async () => {
    try {
      console.log(`Server is runnin on port: ${8080}`);
    } catch(error) {
      console.log(error);
      process.exit(1);
    }
  });
}

init();
