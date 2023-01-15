export interface PictureProvider {
  fetchUrl(date: string): Promise<string>;
}
