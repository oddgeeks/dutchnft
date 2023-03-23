import React, { useState } from 'react';
import { useTheme } from 'next-themes';

import * as Icons from '@/common/Icons';

import * as DutchC from './styles';

type CopyNFTIdProps = {
  id: string;
  type?: 'long' | 'short';
  onClick?: () => void;
};

const CopyNFTId: React.FC<CopyNFTIdProps> = ({
  type = 'short',
  id,
  onClick,
}) => {
  const { theme } = useTheme();
  const [status, setStatus] = useState<'default' | 'active' | 'copied'>(
    'default'
  );
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  return (
    <DutchC.CopyNFTId
      onClick={(e) => {
        e.stopPropagation();
        return onClick;
      }}
      onMouseDown={() => {
        clearTimeout(timer);
        setStatus('active');
      }}
      onMouseUp={() => {
        setStatus('copied');
        clearTimeout(timer);
        setTimer(
          setTimeout(() => {
            setStatus('default');
          }, 1000)
        );
      }}
    >
      {status === 'copied' && (
        <DutchC.CopyNFTIdTooltip>Copied</DutchC.CopyNFTIdTooltip>
      )}
      <DutchC.CopyNFTIdIconWrapper>
        <Icons.IDocument
          size="medium"
          color={
            type === 'long'
              ? theme === 'light'
                ? 'black'
                : 'white'
              : theme === 'light'
              ? status === 'default'
                ? 'black'
                : status === 'active'
                ? 'white'
                : 'black'
              : 'white'
          }
        />
      </DutchC.CopyNFTIdIconWrapper>
      <DutchC.CopyNFTIdText
        color={
          type === 'long'
            ? theme === 'light'
              ? 'black'
              : 'white'
            : theme === 'light'
            ? status === 'default'
              ? 'black'
              : status === 'active'
              ? 'white'
              : 'black'
            : 'white'
        }
      >
        {type === 'long' ? id : 'NFT id'}
      </DutchC.CopyNFTIdText>
    </DutchC.CopyNFTId>
  );
};

export default CopyNFTId;