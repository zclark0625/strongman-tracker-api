import { DocumentType } from "@typegoose/typegoose";
import MaxRepo from "../../src/max/repo";
import { Max, MaxModel } from "../../src/max/schema";
import { fakeMax } from "../fakeData";
import * as utils from "../../src/utils";

describe("MaxRepo", () => {
    const sut = new MaxRepo();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe("index", () => {
        it("should return array of all Max Documents", () => {
            const findSpy = jest.spyOn(MaxModel, "find").mockResolvedValue([fakeMax] as DocumentType<Max>[]);

            expect(sut.index()).toStrictEqual(new Promise(() => [fakeMax]));
            expect(findSpy).toHaveBeenCalledWith({});
        });
    });

    describe("create", () => {
        it("should throw error and log to console if save fails", async () => {
            const error = new Error("Bad Things");
            jest.spyOn(MaxModel, "create").mockRejectedValue(error);
            const logErrorSpy = jest.spyOn(utils, "logError").mockImplementation();

            let message;
            try { await sut.create(fakeMax); } catch (e) { message = e.message; }
            expect(message).toBe("Bad Things");
            expect(logErrorSpy).toHaveBeenCalledWith(error, "Max Create Failed");
        });

        it("should return max if save succeeds", () => {
            jest.spyOn(MaxModel, "create").mockResolvedValue(fakeMax as DocumentType<Max>);
            expect(sut.create(fakeMax)).toStrictEqual(new Promise(() => fakeMax));
        });
    });
});
