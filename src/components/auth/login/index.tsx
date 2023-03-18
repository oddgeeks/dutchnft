import { useState, useEffect } from 'react';
import { Modal, ModalHead, ModalBody } from '@/common';
import useWalletHook from '@/hooks/useWalletHook';
import { ConnectorNames } from '@loopring-web/loopring-sdk';
import { Button } from '@/common';
import ConnectMetaMask from './ConnectMetaMask';
import ConnectionError from './ConnectionError';

import * as DutchC from './style';

const LoginOptions = [
  {
    name: 'MetaMask',
    imgUrl: 'https://static.loopring.io/assets/svg/meta-mask.svg',
  },
  {
    name: 'GameStop',
    imgUrl: 'https://static.loopring.io/assets/svg/gs.svg',
  },
  {
    name: 'WalletConnect',
    imgUrl: 'https://static.loopring.io/assets/svg/wallet-connect.svg',
  },
];

const LoginHome = (): JSX.Element => {
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const { connectAccount } = useWalletHook();

  useEffect(() => {
    setTimeout(() => {
      setConnectionError(true);
    }, 3000);
  });

  return (
    <Modal>
      <ModalHead title="Connect a Wallet" onClose={() => setClose(true)} />
      <ModalBody>
        {connectionError ? (
          <ConnectionError />
        ) : loading ? (
          <ConnectMetaMask />
        ) : (
          <DutchC.LoginWrapper>
            {LoginOptions.map((option, i) => {
              return (
                <DutchC.AccountWrapper key={i}>
                  <DutchC.Account>
                    <button
                      onClick={() => connectAccount(ConnectorNames.MetaMask)}
                    >
                      <img src={option.imgUrl} alt="MetaMask" height="36" />
                    </button>
                    <DutchC.TextNormal>{option.name}</DutchC.TextNormal>
                  </DutchC.Account>
                  <Button
                    onClick={() => {
                      setLoading(true);
                    }}
                  >
                    Connect
                  </Button>
                </DutchC.AccountWrapper>
              );
            })}
          </DutchC.LoginWrapper>
        )}
      </ModalBody>
    </Modal>
  );
};

export default LoginHome;
