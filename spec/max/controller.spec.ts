import request from "supertest";
import api from "../../src/api";
import { fakeMax } from "../fakeData";

jest.mock("../../src/max/service", () => {
    return jest.fn().mockImplementation(() => ({
        index: jest.fn().mockReturnValue([{deadlift1RM: 400}]),
        create: jest.fn().mockImplementation(data => data)
    }));
});

describe("maxController", () => {
    describe("GET /maxes", () => {
        it("should return array that comes back form maxService", async (done) => {
            request(api)
                .get("/api/maxes")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200, [{deadlift1RM: 400}], done);
        });
    });

    describe("POST /max", () => {
        it("should add max in body to repo", async (done) => {
            request(api)
                .post("/api/max")
                .send(fakeMax)
                .expect(200, JSON.stringify(fakeMax), done);
        });
    });
});
