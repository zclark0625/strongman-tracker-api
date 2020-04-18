import express from "express";
import maxController from "./max/controller";

const api = express();

api.use("/api", maxController);

export default api;
