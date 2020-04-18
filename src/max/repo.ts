import { MaxModel, Max } from "./schema";

class MaxRepo {
    public async index(): Promise<Max[]> {
        return MaxModel.find({});
    }

    public async create(max: Max): Promise<Max | undefined> {
        let ret: undefined | Max = undefined;
        await MaxModel.create(max)
            .then(product => ret = product)
            .catch(err => console.error("Max Save Failed with error: ", err));
        return ret;
    }
}

export default MaxRepo;
