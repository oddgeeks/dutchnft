import * as sdk from '@loopring-web/loopring-sdk';

/**
 * Button
 */
export type IconButtonVariants = {};

/**
 * Icon
 */
export type IconVariants = {
  variant: 'solid' | 'outlined';
  size: 'small' | 'medium' | 'large';
  color: 'black' | 'gray' | 'white' | 'orange';
};

/**
 * Input
 */
// --- Text Input

// --- Search Input
export type SearchInputVariant = {
  isShortCut: boolean;
};

/**
 * Badge
 */
export type BadgeVariants = 'default' | 'dot' | 'icon';

/**
 * Link
 */
export type LinkSizes = 'small' | 'large';

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

export interface LooseObjectI {
  [key: string]: string | string[] | number | any;
}
