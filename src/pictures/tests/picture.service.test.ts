import { PictureService } from "../pictures.service";
import { MockPictureProvider } from "../providers/MockPictureProvider";

describe("Pictures Service", () => {
  const provider = new MockPictureProvider();
  const service = new PictureService(provider);

  beforeAll(() => {
    provider.seed();
  });

  test("should correctly execute function and return valid urls", async () => {
    const from = new Date("2021-01-02");
    const to = new Date("2021-01-06");

    const want = [
      "https://google.com/2.png",
      "https://google.com/3.png",
      "https://google.com/4.png",
      "https://google.com/5.png",
      "https://google.com/6.png",
    ];
    await expect(service.fetchPictures(from, to)).resolves.toEqual(want);
  });

  test("hould throw error if TO date is earlier than FROM date", async () => {
    const from = new Date("2021-01-06");
    const to = new Date("2021-01-02");

    await expect(service.fetchPictures(from, to)).rejects.toEqual(
      new Error("TO date cannot be earlier then FROM date")
    );
  });
});
