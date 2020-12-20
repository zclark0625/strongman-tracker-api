import MaxRepo from "./repo";
import { Max } from "./schema";

// TODO: Implement singleton properly instead of this
const maxRepo = new MaxRepo();

class MaxService {
    public async index(): Promise<Max[]> {
        return await maxRepo.index();
    }

    public async create(max: Max): Promise<Max | undefined> {
        let ret;
        // Catching and rethrowing seems to be the only way to get a repo error to pass up to the controller
        // eslint-disable-next-line no-useless-catch
        try {
            ret = await maxRepo.create(max);
        } catch (e) {
            throw e;
        }
        return ret;
    }
}

export default MaxService;
