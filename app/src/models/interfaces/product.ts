import { WP_REST_API_Post } from 'wp-types';

export interface Product extends WP_REST_API_Post {
  category: number[];
  price: number;
  sale_price?: number;
  is_on_sale?: boolean;
  youtube_embed_url?: string;
}

export interface PostProduct {
  title: string;
  content?: string;
  featured_media?: number;
  category?: number[];
  price?: number;
  sale_price?: number;
  is_on_sale?: boolean;
  youtube_embed_url?: string;
  status: string;
}
