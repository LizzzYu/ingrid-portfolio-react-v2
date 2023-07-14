import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 5px;
  cursor: pointer;
  color: var(--grey);

  &:hover {
    color: var(--yellow);
    transition: 0.3s ease-in-out;
  }
`;

type MoreButtonProps = {
  onClick?: () => void;
};

const MoreButton = ({ onClick }: MoreButtonProps) => {
  return <Wrapper onClick={onClick}>more</Wrapper>;
};

export default MoreButton;
