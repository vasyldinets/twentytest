import React from 'react';
import { Button } from '@wordpress/components';
import CardLayout from '../layouts/CardLayout';
import ProductForm from '../components/ProductForm';

const CreateView: React.FC = () => {
  const btnLink = (
    <Button variant="primary">
      Create
    </Button>
  );
  
  return (
    <CardLayout
      title="Add product"
      button={btnLink}
    >
      <ProductForm/>
    </CardLayout>
  );
}

export default CreateView;
