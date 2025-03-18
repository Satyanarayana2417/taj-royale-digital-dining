
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center transition-all duration-300 font-medium',
    'focus:outline-none focus:ring-2 focus:ring-gold/50',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    
    // Size variants
    {
      'text-sm px-4 py-2': size === 'sm',
      'text-base px-6 py-3': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
    },
    
    // Button variants
    {
      'bg-gold hover:bg-gold-dark text-white': variant === 'primary',
      'bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200': variant === 'secondary',
      'bg-transparent hover:bg-gold/10 text-gold border border-gold': variant === 'outline',
      'bg-transparent hover:bg-neutral-100 text-neutral-700': variant === 'ghost',
    },
    
    className
  );
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={baseStyles} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  
  // Render as button by default
  return (
    <button 
      className={baseStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
