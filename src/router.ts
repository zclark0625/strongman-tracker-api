import express from "express";
import { Response, Request } from "express";
import maxController from "./max/controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => res.send("Hello World!"));

router.use(maxController);

export default router;
