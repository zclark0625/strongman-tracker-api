import request from "supertest";
import api from "../../src/api";
import { fakeMax } from "../fakeData";

jest.mock("../../src/max/repo", () => {
    return jest.fn().mockImplementation(() => ({
        index: jest.fn().mockReturnValue([{deadlift1RM: 400}]),
        create: jest.fn().mockImplementation(data => {
            if (JSON.stringify(data) === "{}") {
                const e = new Error("Max validation failed");
                e.name = "ValidationError";
                throw e;
            }
            return data;
        })
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
        it("should add max in body to repo and return saved max with 200", async (done) => {
            request(api)
                .post("/api/max")
                .send(fakeMax)
                .expect(200, JSON.stringify(fakeMax), done);
        });

        it("should return error message with 400 when validation fails", async (done) => {
            request(api)
                .post("/api/max")
                .send({})
                .expect(400, "Max Misshapen", done);
        });
    });
});
