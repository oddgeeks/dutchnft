import styled from 'styled-components';
import Link from 'next/link';
import { LinkSizes } from '@/types';

// types
export type LinkWrapperProps = {
  active: boolean;
};

// components
// --- Nav Link
export const NavLinkWrapper = styled(Link).attrs({
  className:
    'relative text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white transition',
})`
  && {
    ${(p: LinkWrapperProps) =>
      p.active ? 'color: var(--active-color); font-weight: 700;' : ''}
  }
`;

// --- Link
export const LinkWrapper = styled(Link).attrs({
  className:
    'relative text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition',
})`
  ${(p: LinkWrapperProps & { size?: LinkSizes }) =>
    p.active ? 'color: var(--active-color) !important; font-weight: 500;' : ''}

  ${(p: LinkWrapperProps & { size?: LinkSizes }) =>
    p?.size === 'small' && 'font-size: 14px; font-weight: 500;'}
`;

export const NavLinkDecoration = styled.div.attrs({
  className:
    'absolute w-[5px] h-[5px] rounded-full bg-[#ff4800] left-1/2 top-full -translate-x-1/2 translate-y-[1px]',
})``;
