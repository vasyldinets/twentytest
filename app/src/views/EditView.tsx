import React from 'react';
import { useState } from '@wordpress/element';
import { useParams } from 'react-router-dom';
import CardLayout from '../layouts/CardLayout';
import ProductForm from '../components/ProductForm';
import { PostProduct, Product } from '../models/interfaces/product';
import productService from '../services/productService';
import { Animate, Notice } from '@wordpress/components';

const EditView: React.FC = () => {
  const { id } = useParams();
  const [showNotice, setShowNotice] = useState(false);
  
  const updateProduct = async (product: PostProduct): Promise<void> => {
      await productService.updateProduct(Number(id), product);
      setShowNotice(true);
      setTimeout(() => setShowNotice(false), 3000);
  }
  
  return (
    <CardLayout
      title="Update product"
    >
      {showNotice && (
        <Animate
          options={{
            origin: 'top left'
          }}
          type="appear"
        >
          { ( { className } ) => (
            <Notice className={ className } status="success" isDismissible={false}>
              <p>Product updated successfully.</p>
            </Notice>
          ) }
        </Animate>
      )}
      <ProductForm
        productId={id}
        submitText="Update"
        submitAction={updateProduct}
      />
    </CardLayout>
  );
}

export default EditView;
