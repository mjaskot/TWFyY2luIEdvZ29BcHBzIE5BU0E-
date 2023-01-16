import { AxiosInstance } from "axios";

import { PictureApiResponse } from "../pictures.types";
import { PictureProvider } from "../pictures.types";
import { getEnv, Envs } from "../../core/env";
import StatusError from "../../errors/statusError";

export class NASAPicturesProvider implements PictureProvider {
  #apiHost: string;
  #apiEndpoint: string;
  #apiKey: string;
  #httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.#apiHost = getEnv(Envs.API_HOST);
    this.#apiEndpoint = getEnv(Envs.API_ENDPOINT);
    this.#apiKey = getEnv(Envs.API_KEY);
    this.#httpClient = httpClient;
  }

  async fetchUrl(date: string): Promise<string> {
    try {
      const url = `${this.#apiHost}/${this.#apiEndpoint}?api_key=${
        this.#apiKey
      }&date=${date}`;

      const result = await this.#httpClient.get<PictureApiResponse>(url);

      return result.data.url;
    } catch (err: any) {
      throw new StatusError(429, "Too many requests");
    }
  }
}
