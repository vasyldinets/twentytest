import React from 'react';
import { Button } from '@wordpress/components';
import { Link } from 'react-router-dom';
import CardLayout from '../layouts/CardLayout';
import ProductList from '../components/ProductList';

const MainView: React.FC = () => {
  const btnLink = (
    <Button variant="link">
      <Link to="/create">
        Create new product
      </Link>
    </Button>
  );
  
  return (
    <CardLayout
      title="Product list"
      button={btnLink}
    >
      <ProductList/>
    </CardLayout>
  );
}

export default MainView;
