import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        play: 'bg-green-500 text-white hover:bg-green-600',
        pause: 'bg-orange-500 text-white hover:bg-orange-600',
        stop: 'bg-rose-500 text-white hover:bg-rose-600',
      },
      size: {
        xl: 'h-14 w-20 px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'play',
      size: 'xl',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
