import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './spinner';

interface ButtonProps extends ComponentProps<'button'> {
  children: string
  isLoading?: boolean
}

export function Button ({children, className, disabled, isLoading, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn('bg-green-600 hover:bg-teal-700 disabled:bg-gray-100 px-6 h-12 rounded-xl font-medium text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center', className)}
    >
      {isLoading ? <Spinner className='w-6 h-6'/> : children}
    </button>
  );
}
