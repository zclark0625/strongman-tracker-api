// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require("supertest");
import app from "../src/app";

describe("app", () => {
    describe("GET /", () => {
        it("returns hello world", (done) => {
            request(app)
                .get("/")
                .expect(200, "Hello World!", done);
        });
    });
});
