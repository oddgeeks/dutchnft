import React from 'react';
import { useTheme } from 'next-themes';

// component
import * as DutchC from './styles';

type WIDEFILTER = 'ALL' | 'LIST' | 'COLLECTION' | 'ARCHIVE' | 'BANK0X';

interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: (slug: WIDEFILTER) => void;
  slug: WIDEFILTER;
}

const Tab: React.FC<TabProps> = ({ children, active, onClick, slug }) => {
  const { theme } = useTheme();

  return (
    <DutchC.TabWrapper
      active={active ? 1 : 0}
      onClick={() => {
        onClick(slug);
      }}
      theme={theme}
    >
      {children}
    </DutchC.TabWrapper>
  );
};

export default Tab;
