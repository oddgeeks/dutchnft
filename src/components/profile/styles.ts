import styled from 'styled-components';

export const ProfileWrapper = styled.div.attrs({
  className: 'flex gap-6 items-start justify-around',
})``;

export const ProfileInner = styled.div.attrs({
  className: 'flex flex-col gap-4 w-2/3',
})``;

export const ProfileSettingWrapper = styled.div.attrs({
  className: 'flex gap-4',
})``;

export const ProfileSettingInner = styled.div.attrs({
  className: 'flex flex-col gap-4 flex-grow',
})``;

export const ProfileSettingInnerLine = styled.div.attrs({
  className: 'relative flex-grow',
})``;

export const ProfileNotificationWrapper = styled.div.attrs({
  className: 'flex flex-col divide-y',
})``;

// --------------- Wallet ---------------- //

export const WalletWrapper = styled.div.attrs({
  className: 'flex flex-col gap-4',
})``;

export const WalletInfo = styled.div.attrs({
  className: 'flex flex-col py-2 gap-0.5 px-3',
})``;

export const WalletFund = styled.div.attrs({
  className: 'flex flex-col gap-0.5',
})``;

export const WalletActions = styled.div.attrs({
  className: 'flex flex-col p-1',
})``;