'use client';

import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e5e0f0;
  background-color: #f9f5ff;
`;

const Navigation = styled.nav`
  padding: 8px;
  margin: 16px;
`;

const StyledLink = styled.a`
  padding: 4px;
  margin: 8px;
  font-size: 20px;
  color: #7e3fad;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: #5a2d82;
    text-decoration: underline;
  }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Navigation>
                <Link href="/" passHref legacyBehavior>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                    <StyledLink>About</StyledLink>
                </Link>
            </Navigation>
        </HeaderContainer>
    );
}