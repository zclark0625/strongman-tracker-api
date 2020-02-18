import { Max, MaxSchema } from "./schema";

class MaxRepo {
    public constructor() {
        Max.create({deadlift1RM: 400} as MaxSchema);
    }

    public index = () => {
        console.log(Max.find());
        return Max.find();
    }
}

export default MaxRepo;
