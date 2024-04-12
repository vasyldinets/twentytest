import React from 'react';
import {
  __experimentalInputControl as InputControl, __experimentalScrollable as Scrollable,
  BaseControl,
  Button, CheckboxControl,
  SelectControl
} from '@wordpress/components';
import { WP_REST_API_Taxonomy } from 'wp-types';
import productCategoryService from '../../services/productCategoryService';
import { useEffect, useState } from '@wordpress/element';

interface ICreateCategoryBlock {
  categoryIds?: number[];
  setSelectedCategory: (ids: number[]) => void;
}
const CategoryFormBlock: React.FC<ICreateCategoryBlock> = ({categoryIds, setSelectedCategory}) => {
  const [categories, setCategories] = useState<WP_REST_API_Taxonomy[]>();
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [name, setName] = useState<string>();
  const [parent, setParent] = useState('');
  
  useEffect(() => {
    productCategoryService.getProductCategories().then(
      result => setCategories(result)
    ).catch(e => console.error(e));
  }, []);
  
  const toggleCreateCategory = (): void => {
    setShowCreateCategory(!showCreateCategory);
  }
  
  const createCategory = async (): Promise<void> => {
    try {
      const result = await productCategoryService.createProductCategory({
        name: name ?? '',
        parent: Number(parent) || 0
      });
      setCategories([...(categories || []), result]);
      setName('');
      setParent('');
      toggleCreateCategory();
    } catch (e) {
      console.error(e)
    }
  };
  
  const changeSelect = (selectedId: number) => (checked: boolean) => {
    if (checked) {
      setSelectedCategory([...(categoryIds || []), selectedId]);
    } else {
      setSelectedCategory(categoryIds?.filter(id => id !== selectedId) || []);
    }
  };
  
  return (
    <>
      <Scrollable style={ { maxHeight: 180, padding: '0 5px 5px' } }>
        <BaseControl
          label="Categories"
        >
          {categories?.map((category) => (
            <CheckboxControl
              checked={categoryIds?.includes(category.id as number)}
              key={`product-category-${category.id}`}
              label={category.name}
              onChange={changeSelect(category.id as number)}
            />
          ))}
        </BaseControl>
        <Button
          variant="link"
          onClick={toggleCreateCategory}
        >
          Add new category
        </Button>
      </Scrollable>
      {showCreateCategory && (
        <BaseControl>
          <InputControl
            label="New category name"
            onChange={setName}
            value={name}
            style={{
              marginBottom: '10px'
            }}
          />
          <SelectControl
            label="Parent category"
            value={parent}
            onChange={setParent}
            options={[
              {
                label: '-- Parent category --',
                value: ''
              },
              ...(
                categories
                  ? categories?.map((category) => ({
                    label: category.name,
                    value: String(category.id),
                  }))
                  : []
              )
            ]}
          />
          <Button
            disabled={!name}
            variant="secondary"
            onClick={createCategory}
          >
            Add new category
          </Button>
        </BaseControl>
      )}
    </>
  )
}

export default CategoryFormBlock;
