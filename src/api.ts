import express from "express";
import router from "./router";

const api = express();

api.use("/api", router);

export default api;
