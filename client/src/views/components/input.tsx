import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';
import { Error } from './error';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({placeholder, name, id, error, className, ...props}, ref) => {
    const inputId = id ?? name;

    return (
      <div className='relative'>
        <input
          {...props}
          name={name}
          ref={ref}
          id={inputId}
          placeholder=' '
          className={cn('bg-white rounded-lg w-full border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none', error && '!border-red-900', className
          )}
        >
        </input>
        <label
          className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
          htmlFor={inputId}
        >
          {placeholder}
        </label>

        {error && (
          <Error
            error={error}
          />
        )}
      </div>
    );
  });
