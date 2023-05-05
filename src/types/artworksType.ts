export interface ArtworkType {
  id: number;
  name: string;
  price: number;
  size: string;
  quality: string;
  artworkType: number;
  artworkStyle: number;
  url: string;
  reviews: any[];
  purchases: any[];
}



export interface FetchArtworksType {
  typeofartwork: number;
  style?: string;
  query?: string;
}

export interface ReviewType {
  id: number;
  date: string;
  message: string;
}
