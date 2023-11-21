import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ size: number; borderRadius: number }>`
  ${({ size, borderRadius }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${borderRadius}px;
    background-color: var(--yellow);
  `}
`;

type DotProps = {
  size?: number;
  borderRadius?: number;
};

const Dot = ({ size = 20, borderRadius = 4 }: DotProps) => {
  return (
    <Wrapper
      size={size}
      borderRadius={borderRadius}
    />
  );
};

export default Dot;
