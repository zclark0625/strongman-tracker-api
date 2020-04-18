import MaxRepo from "./repo";
import { Max } from "./schema";

// TODO: Implement singleton properly instead of this
const maxRepo = new MaxRepo();

class MaxService {
    public async index(): Promise<Max[]> {
        return await maxRepo.index();
    }

    public async create(max: Max): Promise<Max | undefined> {
        return await maxRepo.create(max);
    }
}

export default MaxService;
