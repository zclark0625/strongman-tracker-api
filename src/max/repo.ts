import { logError } from "../utils";
import { MaxModel, Max } from "./schema";

class MaxRepo {
    public async index(): Promise<Max[]> {
        return MaxModel.find({});
    }

    public async create(max: Max): Promise<Max | undefined> {
        try {
            return await MaxModel.create(max);
        } catch (error) {
            logError(error, "Max Create Failed");
            throw error;
        }
    }
}

export default MaxRepo;
