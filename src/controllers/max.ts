import express from "express";
import { Response, Request } from "express";

const maxController = express.Router();

maxController.get("/maxes", (req: Request, res: Response) => {
    res.send([]);
});

export default maxController;
