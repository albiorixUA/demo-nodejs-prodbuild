import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

const CONFIG = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
};

export default CONFIG;
