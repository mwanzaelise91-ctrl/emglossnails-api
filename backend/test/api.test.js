const { expect } = require("chai");
const request = require("supertest");

const BASE_URL = "http://localhost:3001";

describe("Emgloss Nails API Tests", function () {

  let testEmail;
  const testPassword = "TestPassword123!";

  before(function () {
    testEmail = `api.test.${Date.now()}@example.com`;
  });

  // ================= GET / =================

  describe("GET /", function () {

    it("TC-API-01 - should confirm that the API server is running", async function () {
      const response = await request(BASE_URL)
        .get("/");

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("message");
    });

  });

  // ================= POST /signup =================

  describe("POST /signup", function () {

    it("TC-API-02 - should create a new user with valid details", async function () {
      const response = await request(BASE_URL)
        .post("/signup")
        .send({
          firstName: "API",
          lastName: "Tester",
          email: testEmail,
          password: testPassword
        });

      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Account created successfully");
    });

    it("TC-API-03 - should reject signup when required fields are missing", async function () {
      const response = await request(BASE_URL)
        .post("/signup")
        .send({
          email: `missing.${Date.now()}@example.com`
        });

      expect(response.status).to.equal(400);
      expect(response.body.error).to.equal("All fields are required");
    });

    it("TC-API-04 - should reject signup when the email already exists", async function () {
      const response = await request(BASE_URL)
        .post("/signup")
        .send({
          firstName: "API",
          lastName: "Tester",
          email: testEmail,
          password: testPassword
        });

      expect(response.status).to.equal(409);
      expect(response.body.error).to.equal("Email already exists");
    });

  });

  // ================= POST /login =================

  describe("POST /login", function () {

    it("TC-API-05 - should login successfully with valid credentials", async function () {
      const response = await request(BASE_URL)
        .post("/login")
        .send({
          email: testEmail,
          password: testPassword
        });

      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login successful");
      expect(response.body).to.have.property("user");
    });

    it("TC-API-06 - should reject login when email or password is missing", async function () {
      const response = await request(BASE_URL)
        .post("/login")
        .send({
          email: testEmail
        });

      expect(response.status).to.equal(400);
      expect(response.body.error).to.equal("Email and password are required");
    });

    it("TC-API-07 - should reject login with an incorrect password", async function () {
      const response = await request(BASE_URL)
        .post("/login")
        .send({
          email: testEmail,
          password: "WrongPassword123!"
        });

      expect(response.status).to.equal(401);
      expect(response.body.error).to.equal("Invalid email or password");
    });

    it("TC-API-08 - should reject login for a non-existent email", async function () {
      const response = await request(BASE_URL)
        .post("/login")
        .send({
          email: `does.not.exist.${Date.now()}@example.com`,
          password: testPassword
        });

      expect(response.status).to.equal(401);
      expect(response.body.error).to.equal("Invalid email or password");
    });

  });

});
