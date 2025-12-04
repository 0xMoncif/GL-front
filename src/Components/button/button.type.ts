import type {BasePropsWithChildren} from '@types';

export interface ButtonProps extends BasePropsWithChildren {
    onCLick?: () => void;
    disabled?: boolean;
}