"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { InputVariant } from "@/types";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  fullWidth?: boolean;
  wrapperClassName?: string;
}

export default function Input({
  variant = "default",
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  onRightIconClick,
  fullWidth = false,
  className,
  wrapperClassName,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute("aria-invalid", error ? "true" : "false");
    }
  }, [error]);

  return (
    <div
      className={cn(
        styles.wrapper,
        fullWidth && styles.fullWidth,
        wrapperClassName,
      )}
    >
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div
        className={cn(
          styles.inputWrapper,
          styles[variant],
          error && styles.hasError,
        )}
        suppressHydrationWarning
      >
        {leftIcon && (
          <span className={styles.leftIcon} aria-hidden="true">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          ref={inputRef}
          className={cn(
            styles.input,
            !!leftIcon && styles.hasLeftIcon,
            !!rightIcon && styles.hasRightIcon,
            className,
          )}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          aria-invalid="false"
          {...props}
        />

        {rightIcon && (
          <button
            type="button"
            className={styles.rightIcon}
            onClick={onRightIconClick}
            tabIndex={onRightIconClick ? 0 : -1}
            aria-label="Input action"
          >
            {rightIcon}
          </button>
        )}
      </div>

      {error && (
        <span id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={`${inputId}-hint`} className={styles.hint}>
          {hint}
        </span>
      )}
    </div>
  );
}
