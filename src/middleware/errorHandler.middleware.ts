import { ErrorRequestHandler } from "express";
import ResponseService from "../utils/ResponseService";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  ResponseService.error(
    res,
    err.status || 500,
    err.message || "Something went wrong"
  );
};

export default errorHandlerMiddleware;
