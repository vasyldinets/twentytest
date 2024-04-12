import React from 'react';
import { FormFileUpload } from '@wordpress/components';
import imageService from '../../services/imageService';
import { useEffect, useState } from '@wordpress/element';
import type { WP_REST_API_Attachment } from 'wp-types';

interface IImageBlockForm {
  currentImgId?: number;
  setNewImage: (id: number) => void;
}

const ImageFormBlock: React.FC<IImageBlockForm> = ({currentImgId, setNewImage}) => {
  const [productImg, setProductImg] = useState<WP_REST_API_Attachment>();
  
  useEffect(() => {
    if (currentImgId) {
      imageService.getImage(currentImgId).then(
        (image) => setProductImg(image)
      ).catch(e => console.error(e));
    }
  }, [currentImgId]);
  
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if  (file) {
      const data = new window.FormData();
      data.append('file', file, file.name || file.type.replace('/', '.'));
      
      const image = await imageService.createImage(data);
      setProductImg(image);
      setNewImage(image.id);
    }
  }
  
  return (
    <>
      {productImg && (
        <img src={productImg.source_url} alt={productImg.alt_text} width={230}/>
      )}
      <FormFileUpload accept="image/*" onChange={uploadImage}>
        Click for select new product image
      </FormFileUpload>
    </>
  );
}

export default ImageFormBlock;
