import { PictureProvider, PictureApiResponse } from "../pictures.types";

export class MockPictureProvider implements PictureProvider {
  #data: Map<string, PictureApiResponse>;

  constructor() {
    this.#data = new Map<string, PictureApiResponse>();
  }

  fetchUrl(date: string): Promise<string> {
    return Promise.resolve(this.#data.get(date)!.url);
  }

  seed() {
    const seedData: PictureApiResponse[] = [
      {
        url: "https://google.com/1.png",
        copyright: "url-collector",
        date: "2021-01-01",
        explanation: "Mocked image 001",
        hdurl: "https://google.com/1_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 001",
      },
      {
        url: "https://google.com/2.png",
        copyright: "url-collector",
        date: "2021-01-02",
        explanation: "Mocked image 002",
        hdurl: "https://google.com/2_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 002",
      },
      {
        url: "https://google.com/3.png",
        copyright: "url-collector",
        date: "2021-01-03",
        explanation: "Mocked image 003",
        hdurl: "https://google.com/3_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 003",
      },
      {
        url: "https://google.com/4.png",
        copyright: "url-collector",
        date: "2021-01-04",
        explanation: "Mocked image 004",
        hdurl: "https://google.com/4_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 004",
      },
      {
        url: "https://google.com/5.png",
        copyright: "url-collector",
        date: "2021-01-05",
        explanation: "Mocked image 005",
        hdurl: "https://google.com/5_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 005",
      },
      {
        url: "https://google.com/6.png",
        copyright: "url-collector",
        date: "2021-01-06",
        explanation: "Mocked image 006",
        hdurl: "https://google.com/6_hd.png",
        media_type: "image",
        service_version: "v1",
        title: "Amazing mock image 006",
      },
    ];

    seedData.forEach((image) => {
      this.#data.set(image.date, image);
    });
  }
}
