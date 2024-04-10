import { Link } from 'react-router-dom';
import { useEffect, useState } from '@wordpress/element';
import {
  Card,
  CardHeader,
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

const ProductList = (): JSX.Element | null => {
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    productService.getProductList().then((products) => {
      setProductList(products);
    });
  }, []);
  
  return (
    <StyledCard>
      <CardHeader>
        <Flex>
          <FlexBlock>
            <h2>Product list</h2>
          </FlexBlock>
          <FlexItem>
            <Button variant="link">
              <Link to="/create">
                Create new product
              </Link>
            </Button>
          </FlexItem>
        </Flex>
      </CardHeader>
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
          <CardDivider />
        </div>
      ))}
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
    margin-top: 20px;
    margin-right: 20px;
`;
const StyledTitle = styled.h4`
    padding-left: 15px;
`
export default ProductList;
