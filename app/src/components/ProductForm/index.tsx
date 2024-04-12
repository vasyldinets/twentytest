import React from 'react';
import { PostProduct, Product } from '../../models/interfaces/product';
import {
  __experimentalInputControl as InputControl, Button,
  CardBody, CheckboxControl,
  Flex,
  FlexBlock,
  FlexItem,
  TextareaControl
} from '@wordpress/components';
import CategoryFormBlock from '../CategoryFormBlock';
import ImageFormBlock from '../ImageFormBlock';
import { Link } from 'react-router-dom';
import { useEffect, useState } from '@wordpress/element';
import productService from '../../services/productService';
import { getEmptyPostProduct } from '../../utils/getEmptyPostProduct';

interface IProductForm {
  productId?: string;
  submitText: string;
  submitAction: (product: PostProduct) => Promise<void>;
}

const ProductForm: React.FC<IProductForm> = ({productId, submitText, submitAction}) => {
  const [product, setProduct] = useState(getEmptyPostProduct());
  const [sending, setSending] = useState(false);
  
  useEffect(() => {
    if (productId) {
      productService.getProduct(Number(productId))
        .then(updateProductFromResponse)
        .catch(e => console.error(e));
    }
  }, [productId]);
  
  const updateProductFromResponse = (item: Product) => {
    setProduct({
      title: item.title.raw ?? '',
      content: item.content.raw,
      status: item.status,
      featured_media: item.featured_media,
      category: item.category,
      price: item.price,
      sale_price: item.sale_price,
      is_on_sale: Boolean(item.is_on_sale),
      youtube_embed_url: item.youtube_embed_url,
    })
  }
  
  const fieldChange = (inputName: string) => (value?: string | number | number[] | boolean) => {
    setProduct({...product, [inputName]: value});
  }
  
  const submitForm = async(event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setSending(true);
    try {
      await submitAction(product);
      setSending(false);
    } catch (e) {
      console.error(e);
    }
  }

  const isSubmitEnabled = !sending && product.title && product.price;

  return (
    <CardBody>
      <form onSubmit={submitForm}>
        <Flex justify="right">
          <Button variant="link">
            <Link to="/">Cancel</Link>
          </Button>
          <Button
            disabled={!isSubmitEnabled}
            style={{
              marginLeft: '15px',
            }}
            variant="secondary"
            type="submit"
          >
            {submitText}
          </Button>
        </Flex>
  
        <Flex
          align="top"
          style={{
            marginBottom: '10px'
          }}
        >
          <FlexItem style={{ marginRight: '10px' }}>
            <ImageFormBlock
              currentImgId={product?.featured_media}
              setNewImage={fieldChange('featured_media')}
            />
          </FlexItem>
          <FlexBlock>
            <InputControl
              label="Title"
              onChange={fieldChange('title')}
              placeholder="Enter product title"
              value={product?.title}
              required
              style={{
                marginBottom: '10px'
              }}
            />
            <Flex
              align="top"
              style={{
                marginBottom: '10px'
              }}
            >
              <FlexBlock>
                <InputControl
                  label="Price"
                  onChange={fieldChange('price')}
                  placeholder="Enter product price"
                  type="number"
                  required
                  value={product?.price?.toString()}
                  style={{
                    marginBottom: '10px'
                  }}
                />
                <InputControl
                  label="Sale price"
                  onChange={fieldChange('sale_price')}
                  placeholder="Enter product sale price"
                  type="number"
                  value={product?.sale_price?.toString()}
                  style={{
                    marginBottom: '10px'
                  }}
                />
                <CheckboxControl
                  checked={product?.is_on_sale}
                  help="Is product on sale?"
                  label="Is on sale"
                  onChange={fieldChange('is_on_sale')}
                />
              </FlexBlock>
              <FlexBlock
                style={{
                  paddingLeft: '5px',
                  marginBottom: '10px'
                }}
              >
                <CategoryFormBlock
                  categoryIds={product?.category}
                  setSelectedCategory={fieldChange('category')}
                />
              </FlexBlock>
            </Flex>
            <InputControl
              label="Youtube embed URL"
              onChange={fieldChange('youtube_embed_url')}
              placeholder="Enter youtube embed URL"
              value={product?.youtube_embed_url}
              type="url"
            />
          </FlexBlock>
        </Flex>
        <TextareaControl
          help="Enter product description"
          label="Description"
          onChange={fieldChange('content')}
          value={product?.content ?? ''}
        />
      </form>
    </CardBody>
  )
}

export default ProductForm;
