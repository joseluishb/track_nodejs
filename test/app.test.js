//Prueba unitaria demo
describe("[APP] Esta es una prueba hello", ()  => {
  test("", () => {
    const a = 4;
    const b = 4;
    const t = a + b;
    expect(t).toEqual(8);
  })
});