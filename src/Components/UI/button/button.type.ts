import type {BasePropsWithChildren} from '@types';
// mo9a3ar button = white inside and has a border
// moba6an button = l3ks 
type ButtonVariant = 'm09a3ar' | 'moba6an' | 'moba6anWhite';
type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends BasePropsWithChildren {
    onCLick?: () => void;
    onHover?: () => void;
    disabled?: boolean;
    variant : ButtonVariant;
    size: ButtonSize; 
}


