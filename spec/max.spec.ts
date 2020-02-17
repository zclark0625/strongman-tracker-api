import api from "../src/api";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require("supertest");

describe("max", () => {
    describe("GET /maxes", () => {
        it("should return array of all maxes", async (done) => {
            request(api)
                .get("/api/maxes")
                .expect(200, [{deadlift1RM: 400}], done);
        });
    });
});
