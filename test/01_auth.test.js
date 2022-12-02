const request = require("supertest");
const app = require("../app");
const { usersModel } = require("../models");

/**
 * Se va a ejecutar antes de las pruebas
 */
beforeAll(async () => {
  await usersModel.deleteMany({});
});

afterAll(async () => {});

const testAuthLogin = {
  email: "test1@test.com",
  password: "1234567",
};

const testAuthLogin2 = {
  email: "test@test.com",
  password: "12345678",
};

const testAuthRegister = {
  name: "Papo",
  age: 30,
  email: "test@test.com",
  password: "12345678",
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

  test("Esto debería retornar 401", async () => {
    const newTestAuthLogin = { ...testAuthLogin2, password: "22222222" };
    const response = await request(app)
      .post("/api/auth/login")
      .send(newTestAuthLogin);
    expect(response.statusCode).toEqual(401);
  });
});
