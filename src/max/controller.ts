import express from "express";
import { Response, Request } from "express";
import MaxService from "./service";

const maxController = express.Router();

// TODO: Implement singleton properly instead of this
const maxService = new MaxService();

maxController.get("/maxes", (req: Request, res: Response) => {
    try {
        res.send(maxService.index());
    } catch (e) {
        res.status(500);
    }
});

export default maxController;
