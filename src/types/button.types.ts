import { IconType } from 'react-icons';

export type ButtonVariant = 'success' | 'danger';

export interface ButtonProps {
  label: string;
  handleClick: () => void;
  variant: ButtonVariant;
  px?: string;
  py?: string;
  className?: string;
  icon?: IconType;
  disabled?: boolean;
}
