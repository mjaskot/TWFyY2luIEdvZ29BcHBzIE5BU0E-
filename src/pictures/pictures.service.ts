import { PictureProvider } from "./pictures.types";
import { getDatesInRange } from "./_helpers/getDatesInRange";
import { trimDate } from "./_helpers/trimDate";

export class PictureService {
  #provider: PictureProvider;

  constructor(provider: PictureProvider) {
    this.#provider = provider;
  }

  async fetchPictures(from: Date, to: Date) {
    const dates = getDatesInRange(from, to).map(trimDate);

    const urlPromises = dates.map((d) => this.#provider.fetchUrl(d));

    return await Promise.all(urlPromises);
  }
}
