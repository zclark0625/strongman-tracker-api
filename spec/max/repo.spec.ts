import { DocumentType } from "@typegoose/typegoose";
import MaxRepo from "../../src/max/repo";
import { Max, MaxModel } from "../../src/max/schema";

describe("MaxRepo", () => {
    const repo = new MaxRepo();
    const fakeMax = {deadlift1RM: 400};

    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe("index", () => {
        it("should return array of all Max Documents", () => {
            const findSpy = jest.spyOn(MaxModel, "find").mockResolvedValue([fakeMax] as DocumentType<Max>[]);

            expect(repo.index()).toStrictEqual(new Promise(() => [fakeMax]));
            expect(findSpy).toHaveBeenCalledWith({});
        });
    });

    describe("create", () => {
        it("should error to console if save fails", async () => {
            const error = new Error("Bad Things");
            jest.spyOn(MaxModel, "create").mockRejectedValue(error);
            const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

            await repo.create(fakeMax);
            expect(consoleErrorSpy).toHaveBeenCalledWith("Max Save Failed with error: ", error);
        });

        it("should return max if save succeeds", () => {
            jest.spyOn(MaxModel, "create").mockResolvedValue(fakeMax as DocumentType<Max>);
            expect(repo.create(fakeMax)).toStrictEqual(new Promise(() => fakeMax));
        });
    });
});