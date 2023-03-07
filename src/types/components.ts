import * as sdk from '@loopring-web/loopring-sdk';

/**
 * Button
 */
export type ButtonVariants = {
  variant?: 'solid' | 'outline' | 'text';
  size?: 'small' | 'large';
};

export type IconButtonVariants = {};

/**
 * Icon
 */
export type IconVariants = {
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'gray' | 'white' | 'orange' | 'dark-gray';
};

/**
 * Input
 */
// --- Text Input

// --- Search Input
export type SearchInputVariant = {
  isShortCut?: boolean;
};

/**
 * Badge
 */
export type BadgeVariants = 'default' | 'dot' | 'icon';

/**
 * Link
 */
export type LinkSizes = 'small' | 'large';

/**
 * Dropdown
 */
export type DropdownPositionVariants = 'TL' | 'TR' | 'BL' | 'BR';

export interface AccountInfoI {
  accInfo: sdk.AccountInfo;
  eddsaKey: {
    keyPair: {
      publicKeyX: string;
      publicKeyY: string;
      secretKey: string;
    };
    formatedPx: string;
    formatedPy: string;
    sk: string;
    counterFactualInfo: any;
  };
  apiKey: string;
}

export interface CollectionObjectI {
  name: string;
  tileUri: string;
  description: string;
  owner: string;
  avatar: string;
  banner: string;
}

export interface FeeI {
  raw_data: unknown;
  fees: sdk.LoopringMap<sdk.OffchainFeeInfo>;
}
export interface CSVMetadataI {
  amount: string;
  description: string;
  name: string;
  properties: string;
  royalties: string;
}

export interface LooseObjectI {
  [key: string]: string | string[] | number | any;
}

export interface NftDataI {
  image: string;
  animation_url: string;
  name: string;
  royalty_percentage: number;
  description: string;
  collection_metadata: string;
  mint_channel: string;
  properties: Record<string, string>;
  attributes: AttributeI[];
}

export interface AttributeI {
  trait_type: string;
  value: unknown;
}

export interface ConstrucMetadataI {
  folderCID: string;
  collectionMetadata: string;
  mintChannel?: string;
  imageNames: string[];
  animationUrlNames: string[];
  csvFileContents: CSVMetadataI[];
}

export interface MintNFTPostDataI {
  exchange: string;
  minterId: number;
  minterAddress: string;
  toAccountId: number;
  toAddress: string;
  nftType: number;
  tokenAddress: string;
  nftId: string;
  amount: string;
  creatorFeeBips: number;
  validUntil: number;
  storageId: number;
  maxFee: {
    tokenId: number;
    amount: string;
  };
  eddsaSignature: string;
  forceToMint: boolean;
  counterFactualNftInfo: {
    nftFactory: string;
    nftOwner: string;
    nftBaseUri: string;
  };
  royaltyAddress: string;
  royaltyPercentage: number;
}
