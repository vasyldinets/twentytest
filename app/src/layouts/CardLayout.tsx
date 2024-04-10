import React from 'react';
import { Card, CardHeader, Flex, FlexBlock, FlexItem } from '@wordpress/components';
import styled from 'styled-components';

interface ICardLayout {
  title: string;
  button: React.ReactNode;
  children: React.ReactNode;
}

const CardLayout: React.FC<ICardLayout> = ({title, button, children}) => (
  <StyledCard>
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
  </StyledCard>
);

const StyledCard = styled(Card)`
    margin-top: 20px;
    margin-right: 20px;
`;

export default CardLayout;
