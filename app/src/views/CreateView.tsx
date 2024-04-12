import React from 'react';
import CardLayout from '../layouts/CardLayout';
import ProductForm from '../components/ProductForm';
import { PostProduct } from '../models/interfaces/product';
import productService from '../services/productService';
import { useNavigate } from 'react-router-dom';
import { useState } from '@wordpress/element';
import { Animate, Notice } from '@wordpress/components';

const CreateView: React.FC = () => {
  const navigate = useNavigate();
  const [showNotice, setShowNotice] = useState(false);
  
  const createProduct = async (product: PostProduct): Promise<void> => {
    const response = await productService.createProduct(product);
    setShowNotice(true);
    await setTimeout(() => {
      setShowNotice(false);
      navigate(`/edit/${response.id}`);
    }, 3000);
  }
  
  return (
    <CardLayout
      title="Create new product"
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
              <p>Product created successfully.</p>
            </Notice>
          ) }
        </Animate>
      )}
      <ProductForm
        submitText="Create"
        submitAction={createProduct}
      />
    </CardLayout>
  );
}

export default CreateView;
