import apiFetch from '@wordpress/api-fetch';
import { PostProductCategory } from '../models/interfaces/productCategory';
import type { WP_REST_API_Taxonomy } from 'wp-types';

const getProductCategories = async (): Promise<WP_REST_API_Taxonomy[]> => {
  return await apiFetch({ path: '/wp/v2/category'});
}

const createProductCategory = async (data: PostProductCategory): Promise<WP_REST_API_Taxonomy> => {
  return await apiFetch({
    path: '/wp/v2/category',
    method: 'POST',
    data
  });
}

const productCategoryService = {
  getProductCategories,
  createProductCategory
}

export default productCategoryService;
