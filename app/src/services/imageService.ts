import apiFetch from '@wordpress/api-fetch';
import type { WP_REST_API_Attachment } from 'wp-types';

const getImage = async (id: number): Promise<WP_REST_API_Attachment> => {
  return await apiFetch({ path: `/wp/v2/media/${id}` })
}

const createImage = async (data: FormData): Promise<WP_REST_API_Attachment> => {
  return await apiFetch({
    path: `/wp/v2/media`,
    method: 'POST',
    body: data,
  })
}

const imageService = {
  getImage,
  createImage
}

export default imageService;
