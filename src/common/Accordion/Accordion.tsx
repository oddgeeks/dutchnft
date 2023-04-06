import React from 'react';
import { IChevronDown } from '../Icons';

const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="text-sm flex-grow">{children}</div>
      <IChevronDown />
    </div>
  );
};

export default Accordion;