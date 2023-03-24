import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHead,
  OutlineButton,
  SearchInput,
  Tab,
  TabContainer,
  TabGroup,
  TextInput,
} from '@/common';
import { IconButton } from '@/common';
import * as DutchC from './styles';
import NFTList from '../NFTList';
import { NFTListType } from '@/types';

interface NFTModalProp {
  onClose: () => void;
  onSynced?: () => void;
  lists: NFTListType[];
  currentTab?: 'ALL' | 'LIST' | 'COLLECTION' | 'ARCHIVE' | 'BANK0X';
  showSyncModal: boolean;
}

interface SwitchProps {
  selected: boolean;
  onAll: () => void;
  onSelected: () => void;
}

export const NFTCollectionSelect: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 w-1/2 text-black">
      <p className="text-sm text-black/70">Collection</p>
      <select className="py-2 px-2 rounded-lg focus:outline-none border border-black/10">
        <option value="fruit">🍎🍌🍍The Fruit Salad Game🍆🥦🥕</option>
      </select>
    </div>
  );
};

export const NFTListSwitch: React.FC<SwitchProps> = ({
  selected,
  onAll,
  onSelected,
}) => {
  return (
    <TabContainer>
      <TabGroup>
        <Tab active={selected} slug="ALL" onClick={onAll}>
          All{`(5)`}
        </Tab>
        <Tab active={!selected} slug="ALL" onClick={onSelected}>
          Selected{`(3)`}
        </Tab>
      </TabGroup>
    </TabContainer>
  );
};

const NFTModal: React.FC<NFTModalProp> = ({
  onClose,
  onSynced,
  lists,
  currentTab,
  showSyncModal,
}) => {
  const [selected, setSelected] = useState(true);

  return (
    <Modal isOpen={showSyncModal}>
      <ModalHead title="Sync NFTs" onClose={onClose}>
        <DutchC.NFTWalletAddress>
          <IconButton icon="document" />
          <p className="text-sm text-black/70">
            0xa613c0e37979f1a3bf9e96c9a42ef7b9e6392025
          </p>
        </DutchC.NFTWalletAddress>
      </ModalHead>
      <ModalBody>
        <DutchC.NFTModalBodyInner>
          <div className="flex gap-6 justify-between">
            {currentTab === 'LIST' && (
              <div className="w-1/2">
                <p>List Name</p>
                <TextInput />
              </div>
            )}
            <NFTCollectionSelect />
          </div>
          <NFTListSwitch
            selected={selected}
            onAll={() => {
              setSelected(true);
            }}
            onSelected={() => {
              setSelected(false);
            }}
          />
          <SearchInput placeholder="NFT name or id" />
          <NFTList selected={!selected} lists={lists} currentTab={currentTab} />
          <DutchC.NFTModalFooterWrapper>
            <OutlineButton
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              Cancel
            </OutlineButton>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onSynced && onSynced();
                onClose();
              }}
            >
              {currentTab === 'LIST' ? 'Save Changes' : 'Sync NFTs'}
            </Button>
          </DutchC.NFTModalFooterWrapper>
        </DutchC.NFTModalBodyInner>
      </ModalBody>
    </Modal>
  );
};

export default NFTModal;
