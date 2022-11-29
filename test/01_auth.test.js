const request = require("supertest");
const app = require("../app");

const testAuthLogin = {
  email: "test1@example.com",
  password: "12345678",
};

const testAuthRegister = {
  name: "Papo",
  age: 30,
  email: "papo@gmal.com",
  password: "stri12345678ng",
};

describe("[AUTH] esta es la prueba de /api/auth", () => {
  test("Esto debería retornar 404", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(testAuthLogin);
    expect(response.statusCode).toEqual(404);
  });

  test("Esto debería retornar 201", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(testAuthRegister);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("data.token");
    expect(response.body).toHaveProperty("data.user");
  });
});
