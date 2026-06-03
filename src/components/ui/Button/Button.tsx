import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        className,
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        leftIcon && <span className={styles.icon}>{leftIcon}</span>
      )}
      {children && <span>{children}</span>}
      {!isLoading && rightIcon && (
        <span className={styles.icon}>{rightIcon}</span>
      )}
    </button>
  );
}
