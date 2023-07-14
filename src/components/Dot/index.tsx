import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ size: number }>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 4px;
    background-color: var(--yellow);
  `}
`;

type DotProps = {
  size?: number;
};

const Dot = ({ size = 20 }: DotProps) => {
  return <Wrapper size={size} />;
};

export default Dot;
