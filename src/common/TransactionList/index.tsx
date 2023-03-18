import React from 'react';
import Image from 'next/image';
import { TransactionType } from '@/types';
import * as DutchC from './style';
import MintingLoaderIcon from '@/assets/minting_loader.svg';

interface TransactionListType {
  transActions: TransactionType[];
}

const TransactionList: React.FC<TransactionListType> = ({ transActions }) => {
  return (
    <DutchC.TransListWrapper>
      {transActions.map((action: TransactionType) => (
        <DutchC.ListElementWrapper key={action.id}>
          <DutchC.ActionInfoWrapper>
            <DutchC.TextSmall>{action.id}</DutchC.TextSmall>
            <Image src={action.img} alt="img" />
            <DutchC.TextSmall>{action.title}</DutchC.TextSmall>
          </DutchC.ActionInfoWrapper>
          {action.status === 0 && (
            <DutchC.StatusQueued>Queued</DutchC.StatusQueued>
          )}
          {action.status === 1 && (
            <DutchC.StatusMinting>
              <Image
                src={MintingLoaderIcon}
                alt="load"
                className="absolute -left-5"
              />
              Minting
            </DutchC.StatusMinting>
          )}
          {action.status === 2 && (
            <DutchC.StatusSuccess>Success</DutchC.StatusSuccess>
          )}
          {action.status === 3 && (
            <DutchC.StatusFailed>Failed</DutchC.StatusFailed>
          )}
        </DutchC.ListElementWrapper>
      ))}
    </DutchC.TransListWrapper>
  );
};

export default TransactionList;
