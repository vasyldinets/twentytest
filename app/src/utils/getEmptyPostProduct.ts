import { PostProduct } from '../models/interfaces/product';
import { WP_Post_Status_Name } from 'wp-types';

export const getEmptyPostProduct = (): PostProduct => ({
  title: '',
  status: WP_Post_Status_Name.publish,
  content: '',
  featured_media: undefined,
  category: [],
  price: undefined,
  sale_price: undefined,
  is_on_sale: false,
  youtube_embed_url: '',
});
