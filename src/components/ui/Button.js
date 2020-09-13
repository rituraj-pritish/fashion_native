import React from 'react';
import styled from 'styled-components';
import { Button, View } from 'react-native';
import theme from 'src/theme';

export const StyledButton = styled(View)`
  border-radius: 20;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  overflow: hidden;
  margin-vertical: 10;
`;

const CustomButton = ({ title, ...props }) => {
  return (
    <StyledButton>
      <Button title={title} {...props} color={theme.colors.primary} />
    </StyledButton>
  );
};

export default CustomButton;
