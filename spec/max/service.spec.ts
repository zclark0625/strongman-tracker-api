import MaxService from "../../src/max/service";
import { Max } from "../../src/max/schema";
import MaxRepo from "../../src/max/repo";

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
            const fakeMax: Max = {deadlift1RM: 135};
            service.create(fakeMax);
            expect(mockRepo.mock.instances[0].create).toHaveBeenCalledWith(fakeMax);
        });
    });
});
