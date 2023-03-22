import React, { useEffect } from 'react';
import { Table, TBody, THead, TR, TD, IconButton } from '@/common';
import * as DutchC from './styles';
import { NFTListType } from '@/types';

import * as Icons from '@/common';

interface NFTListProps {
  selected: boolean;
  lists: NFTListType[];
}

const NFTList: React.FC<NFTListProps> = ({ selected, lists }) => {
  let tmpLists = [];
  if (selected) {
    tmpLists = lists.filter((list) => list.selected);
  } else tmpLists = lists;
  return (
    <Table>
      <THead>
        <TR>
          <TD>
            <DutchC.IconRound />
          </TD>
          <TD>Sr</TD>
          <TD>Name</TD>
          {selected && <TD>Collection</TD>}
          <TD>Mint Count</TD>
          <TD>Burned</TD>
          <TD>NFT id</TD>
        </TR>
      </THead>
      <TBody>
        {tmpLists.map((list) => {
          return (
            <TR key={list.sr}>
              <TD>
                {list.selected ? (
                  <Icons.ICheckCircle color="orange" size="large" />
                ) : (
                  <DutchC.IconRound />
                )}
              </TD>
              <TD>{list.sr}</TD>
              <TD>{list.name}</TD>
              {selected && (
                <TD>
                  <DutchC.TextEllipsis>{list.collection}</DutchC.TextEllipsis>
                </TD>
              )}
              <TD>{list.mintCount}</TD>
              <TD>{list.burned ? 'Yes' : 'No'}</TD>
              <TD>
                <DutchC.NFTIdWrapper>
                  <IconButton icon="document" />
                  <DutchC.TextEllipsis>{list.nftId}</DutchC.TextEllipsis>
                </DutchC.NFTIdWrapper>
              </TD>
            </TR>
          );
        })}
      </TBody>
    </Table>
  );
};

export default NFTList;
