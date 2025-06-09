import { ButtonVariant, ButtonProps } from '../../../types/button.types';

const variantStyles: Record<
  ButtonVariant,
  { bgColor: string; hoverBgColor: string }
> = {
  success: {
    bgColor: 'bg-green-700',
    hoverBgColor: 'hover:bg-green-800',
  },
  danger: {
    bgColor: 'bg-red-700',
    hoverBgColor: 'hover:bg-red-800',
  },
};

export const Button: React.FC<ButtonProps> = ({
  handleClick,
  label,
  variant,
  px = 'px-4',
  py = 'py-3',
  icon: Icon,
  disabled = false,
}) => {
  const styles = variantStyles[variant];

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg ${px} ${py} mt-0 cursor-pointer ${styles.bgColor} ${styles.hoverBgColor} text-medium text-white transition-colors duration-150 ease-in`}
      onClick={handleClick}
      disabled={disabled}
    >
      {Icon && <Icon className="w-5 h-5 fill-white" />}
      {label}
    </button>
  );
};
