import express, { Express } from "express";
const cors = require('cors')
import CONFIG from "./src/config";

const port = CONFIG.PORT;

const startServer = () => {
  const app: Express = express();

  app.use(cors())

  app.listen(port, () => {
    console.log(`[*]  Server successfully started at: ${port}`);
  });

  app.get('/', function (req, res) {
    res.send('Hello World')
  })
};

startServer();
