import React from 'react';
import './button.css';

type ButtonProps = {
  outline?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export const Button = ({
  outline = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        outline ? 'storybook-button--outline' : 'storybook-button--default',
      ].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
