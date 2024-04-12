import apiFetch from '@wordpress/api-fetch';
import { PostProduct, Product } from '../models/interfaces/product';

const getProductList = async ():Promise<Product[]> => {
  // Will be better to use pagination, but skip it for the test task
  return await apiFetch<Product[]>( { path:  '/wp/v2/product?_embed=1'} );
}

const getProduct = async (id: number): Promise<Product> => {
  return await apiFetch({ path: `/wp/v2/product/${id}?context=edit` })
}

const deleteProduct = async (id: number): Promise<void> => {
  await apiFetch({ path: `/wp/v2/product/${id}`, method: 'DELETE' })
}

const updateProduct = async (id: number, data: PostProduct): Promise<Product> => {
  return await apiFetch({ path: `/wp/v2/product/${id}`, method: 'POST', data })
}

const createProduct = async (data: PostProduct): Promise<Product> => {
  return await apiFetch({ path: '/wp/v2/product', method: 'POST', data })
}

const productService = {
  getProductList,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct
}

export default productService;
