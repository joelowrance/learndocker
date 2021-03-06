"use strict"

var request = require("supertest"),
    app = require("../app").getApp;

describe("GET /", function() {
    it("expects http response 200", function(done) {
        request(app)
            .get("/")
            .expect(200, done);
    });
});