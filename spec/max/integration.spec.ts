import request from "supertest";
import api from "../../src/api";
import { fakeMax } from "../fakeData";
import * as dbHandler from "../inMemoryDB";

// jest.mock("../../src/max/repo", () => {
//     return jest.fn().mockImplementation(() => ({
//         index: jest.fn().mockReturnValue([{deadlift1RM: 400}]),
//         create: jest.fn().mockImplementation(data => {
//             if (JSON.stringify(data) === "{}") {
//                 const e = new Error("Max validation failed");
//                 e.name = "ValidationError";
//                 throw e;
//             }
//             return data;
//         })
//     }));
// });

describe("max integration spec", () => {

    beforeAll(async () => await dbHandler.connect());

    afterEach(async () => await dbHandler.clearDatabase());

    afterAll(async () => await dbHandler.closeDatabase());

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
        it("should create max in body and return saved max with 200", async (done) => {
            request(api)
                .post("/api/max")
                .send(fakeMax)
                .expect(200)
                .expect((res) => {
                    expect(res.body.deadlift1RM).toBe(fakeMax.deadlift1RM);
                })
                .end(done);
        });

        it("should return error message with 400 when validation fails", async (done) => {
            request(api)
                .post("/api/max")
                .send({})
                .expect(400, "Max Misshapen", done);
        });
    });

    describe("PUT /max", () => {
        it("should update max in body and return new max with 200", async (done) => {
            request(api)
                .put("/api/max")
                .send({_id: 1, deadlift1RM: 675})
                .expect(200, JSON.stringify(fakeMax), done);
        });
    });
});
