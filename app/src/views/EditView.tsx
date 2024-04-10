import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@wordpress/components';
import CardLayout from '../layouts/CardLayout';
import ProductForm from '../components/ProductForm';


const EditView: React.FC = () => {
  const { id } = useParams();
  const btnLink = (
    <Button variant="primary">
      Save
    </Button>
  );
  
  console.log(id);
  
  return (
    <CardLayout
      title="Add product"
      button={btnLink}
    >
      <ProductForm/>
    </CardLayout>
  );
}

export default EditView;
