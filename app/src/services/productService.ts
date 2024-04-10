import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { Product } from '../models/interfaces/product';

const getProductList = async ():Promise<Product[]> => {
  const queryParams = {
    _embed: 1,
  };
  
  // Will be better to use pagination, but skip it for the test task
  return await apiFetch<Product[]>( { path: addQueryArgs( '/wp/v2/product', queryParams ) } );
}

const deleteProduct = async (id: number): Promise<any> => {
  return await apiFetch({ path: `/wp/v2/product/${id}`, method: 'DELETE' })
}

const productService = {
  getProductList,
  deleteProduct
}

export default productService;
