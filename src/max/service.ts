import MaxRepo from "./repo";

// TODO: Implement singleton properly instead of this
const maxRepo = new MaxRepo();

class MaxService {
    public index = () => {
        return maxRepo.index();
    }
}

export default MaxService;
