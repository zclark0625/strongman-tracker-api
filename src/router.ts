import express from "express";
import { Response, Request } from "express";
import maxController from "./controllers/max";

const router = express.Router();

router.get("/", (req: Request, res: Response) => res.send("Hello World!"));

router.use(maxController);

export default router;
