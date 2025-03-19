import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  to?: string;
  href?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  to,
  href,
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded",
    {
      'px-4 py-2': size === 'default',
      'px-3 py-1 text-sm': size === 'sm',
      'px-6 py-3': size === 'lg',
      'bg-primary text-white hover:bg-primary/90': variant === 'primary',
      'bg-secondary text-white hover:bg-secondary/90': variant === 'secondary',
      'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
      'text-primary hover:bg-primary/10': variant === 'ghost'
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
