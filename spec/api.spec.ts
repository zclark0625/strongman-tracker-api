// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require("supertest");
import api from "../src/api";

describe("api", () => {
    describe("GET /", () => {
        it("should return hello world", (done) => {
            request(api)
                .get("/api/")
                .expect(200, "Hello World!", done);
        });
    });
});
