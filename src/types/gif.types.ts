export interface GifFromApi {
  id: string;
  title: string;
  images: {
    fixed_width_downsampled: {
      url: string;
    };
  };
}

export type Gif = Pick<GifFromApi, 'id' | 'title'> & {
  url: string;
};
