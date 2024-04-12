import React from 'react';
import { Card, CardHeader, Flex, FlexBlock, FlexItem } from '@wordpress/components';

interface ICardLayout {
  title: string;
  children: React.ReactNode;
  button?: React.ReactNode;
}

const CardLayout: React.FC<ICardLayout> = ({title, button, children}) => (
  <Card style={{ margin: '20px 20px 0 0' }}>
    <CardHeader>
      <Flex>
        <FlexBlock>
          <h2>{title}</h2>
        </FlexBlock>
        <FlexItem>
          {button}
        </FlexItem>
      </Flex>
    </CardHeader>
    {children}
  </Card>
);

export default CardLayout;
