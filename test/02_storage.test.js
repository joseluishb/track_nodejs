const request = require("supertest");
const app = require("../app");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const { storageModel } = require("../models");
let JWT_TOKEN = "";
const filePath = `${__dirname}/dump/test_dump_track.mp3`;

/**
 * Necesitamos obtener el JWT Token de session antes que todos
 */
beforeAll(async () => {
  const user = usersModel.findOne({ email: "test@test.com" });
  JWT_TOKEN = await tokenSign(user);
  console.log(JWT_TOKEN);
});

/**
 * [POST STORAGE] Test for upload file
 */
describe("[STORAGE] Upload file", () => {
  test("should uplaod file", async () => {
    const res = await request(app)
      .post("/api/storage")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .attach("myfile", filePath);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    expect(body).toHaveProperty("data");
    //expect(body).toHaveProperty("data.url");
  });
});

/**
 * [GET STORAGE LIST] Test get List items
 */
describe("[STORAGE] Return all files", () => {
  test("should uplaod file", async () => {
    const res = await request(app)
      .get("/api/storage")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .attach("myfile", filePath);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    const {data} = body;
    expect(body).toHaveProperty("data");
    //expect(body).toHaveProperty("data.url");
  });
});

/**
 * [GET STORAGE ITEM] Test get detail item
 */
describe("[STORAGE] Return one item", () => {
  let id = '';
  test("Debería retornar el id de un item", async () => {
    const {_id} = await storageModel.findOne();
    id = _id.toString();
  })


  test("Debe retornar todo el detalle del item", async () => {
    const res = await request(app)
      .get(`/api/storage/${id}`)
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .attach("myfile", filePath);
    const { body } = res;
    expect(res.statusCode).toEqual(200);
    const {data} = body;
    expect(body).toHaveProperty("data");    
  });
});
