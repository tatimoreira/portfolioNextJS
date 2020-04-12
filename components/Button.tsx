import styled from '../styles/styled'
import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

//todo mae a ts component
const ButtonPrimary = () => {
  const Button = styled((props: ButtonProps) => <AntButton {...props} />)`
  padding: 20px;
  background-color: purple;
  border-radius: 3px;
  `;
  return (Button);
}

export default ButtonPrimary
