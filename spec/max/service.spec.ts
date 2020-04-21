import MaxService from "../../src/max/service";
import MaxRepo from "../../src/max/repo";
import { fakeMax } from "../fakeData";

jest.mock("../../src/max/repo");

const mockRepo = MaxRepo as jest.Mock<MaxRepo>;

describe("MaxService", () => {
    const service = new MaxService();

    describe("index", () => {
        it("should call-through maxRepo index", () => {
            service.index();
            expect(mockRepo.mock.instances[0].index).toHaveBeenCalled();
        });
    });

    describe("create", () => {
        it("should call-through maxRepo create", () => {
            service.create(fakeMax);
            expect(mockRepo.mock.instances[0].create).toHaveBeenCalledWith(fakeMax);
        });
    });
});
