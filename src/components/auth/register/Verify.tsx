import React from 'react';
import Image from 'next/image';
import { Modal, ModalHead, ModalBody } from '@/common';
import * as DutchC from './style';
import VerifySentIcon from '@/assets/verify_sent.png';

const VerifyModal = () => {
  return (
    <Modal>
      <ModalHead title="Email Verification" />
      <ModalBody>
        <DutchC.VerifyModalWrapper>
          <Image src={VerifySentIcon} alt="verify_sent" />
          <DutchC.TextVerify>
            We have sent you an email for verification. Please check.
          </DutchC.TextVerify>
        </DutchC.VerifyModalWrapper>
      </ModalBody>
    </Modal>
  );
};

export default VerifyModal;
