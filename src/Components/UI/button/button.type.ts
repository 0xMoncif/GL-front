import type {BasePropsWithChildren} from '@types';
// mo9a3ar button = white inside and has a border
// moba6an button = l3ks 
type ButtonVariant = 'mo9a3ar' | 'moba6an' | 'mo9a3arWhite';
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'button' | 'submit' | 'reset'
export interface ButtonProps extends BasePropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onHover?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type? : ButtonType;
    form? : string
    variant : ButtonVariant;
    size: ButtonSize; 
}


