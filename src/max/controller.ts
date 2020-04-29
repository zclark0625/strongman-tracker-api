import express, { Response, Request } from "express";
import cors from "cors";
import MaxService from "./service";

const maxController = express();

maxController.use(express.json());

if (process.env.CLIENT_ORIGIN) maxController.use(cors({origin: process.env.CLIENT_ORIGIN}));

// TODO: Implement singleton properly instead of this
const maxService = new MaxService();

maxController.get("/maxes", async (req: Request, res: Response) => {
    try {
        res.send(await maxService.index());
    } catch (e) {
        res.status(500);
    }
});

maxController.post("/max", async (req: Request, res: Response) => {
    try {
        const product = await maxService.create(req.body);
        res.send(product);
    } catch (e) {
        res.status(500);
    }
});

export default maxController;
