import { logError } from "../utils";
import { MaxModel, Max } from "./schema";

class MaxRepo {
    public async index(): Promise<Max[]> {
        return MaxModel.find({});
    }

    public async create(max: Max): Promise<Max> {
        try {
            return await MaxModel.create(max);
        } catch (error) {
            logError(error, "Max Create Failed");
            throw error;
        }
    }

    public async update(max: Max): Promise<Max | null> {
        try {
            return await MaxModel.findByIdAndUpdate(max._id, max, {new: true});
        } catch (error) {
            logError(error, "Max Update Failed");
            throw error;
        }
    }
}

export default MaxRepo;
