import React from 'react';
import styled from 'styled-components';
import { contentTextStyle } from '../../styles/typography';

const Wrapper = styled.a`
  width: fit-content;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: var(--black);

  &:hover {
    color: var(--yellow);
    transition: 0.3s;
  }
`;

const Item = styled.p`
  ${contentTextStyle}
`;

type NavItemProps = {
  name: string;
  link: string;
};

const NavItem = ({ name, link }: NavItemProps) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrapper
      onClick={(e: any) => onPress(e)}
      href={`#${link}`}
    >
      <Item data-to-scrollspy-id={link}>{name}</Item>
    </Wrapper>
  );
};

export default NavItem;
