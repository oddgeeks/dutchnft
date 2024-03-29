import React from 'react';

// components
import * as DutchC from './styles';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => {
  return (
    <DutchC.NavLinkWrapper href={href}>
      {children}
      {isActive && <DutchC.NavLinkDecoration />}
    </DutchC.NavLinkWrapper>
  );
};

export default NavLink;
