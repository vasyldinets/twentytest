import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from '@wordpress/element';
import {
  Flex,
  FlexBlock,
  Button,
  FlexItem,
  CardBody,
  CardDivider,
} from '@wordpress/components';
import productService from '../../services/productService';
import { Product } from '../../models/interfaces/product';
import styled from 'styled-components';
import ConfirmModal from '../ConfirmModal';


const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [productForDelete, setProductForDelete] = useState<Product | undefined>();
  
  useEffect(() => {
    productService.getProductList().then((products) => {
      setProductList(products);
    });
  }, []);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const deleteProduct = async () => {
    if (productForDelete) {
      await productService.deleteProduct(productForDelete.id);
      setProductList(productList.filter(product => product.id !== productForDelete.id));
    }
    toggleModal();
  };
  
  const btnDeleteClick = (product: Product) => () => {
    setProductForDelete(product);
    toggleModal()
  }
  
  return (
    <>
      {productList?.map((product) => (
        <div key={`product-${product.id}`}>
          <CardBody>
            <Flex>
              <FlexItem>
                <img
                  src={product._embedded['wp:featuredmedia'][0].source_url}
                  alt={product.title.rendered}
                  width={50}
                />
              </FlexItem>
              <FlexBlock>
                <StyledTitle>{product.title.rendered}</StyledTitle>
              </FlexBlock>
              <FlexItem>
                <Flex>
                  <Button
                    style={{
                      margin: '0 4px'
                    }}
                    isDestructive
                    onClick={btnDeleteClick(product)}
                  >
                    Delete
                  </Button>
                  <Button variant="link">
                    <Link to={`edit/${product.id}`}>Edit</Link>
                  </Button>
                </Flex>
              </FlexItem>
            </Flex>
          </CardBody>
          <CardDivider/>
        </div>
      ))}
      <ConfirmModal
        showModal={showModal}
        productTitle={productForDelete?.title.rendered}
        toggleModal={toggleModal}
        deleteProduct={deleteProduct}
      />
    </>
  );
}

const StyledTitle = styled.h4`
    padding-left: 15px;
`;

export default ProductList;
