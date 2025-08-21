import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive before:pointer-events-none after:pointer-events-none before:z-0 after:z-0 [&>*]:relative [&>*]:z-[1]",
  {
    variants: {
      variant: {
        default:
          [
            // Base fill + lift
            "bg-primary text-primary-foreground shadow-xs transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
            // Growing gradient underlay using transform for smoothness
            "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:opacity-0 hover:before:opacity-100 before:bg-[linear-gradient(90deg,theme(colors.yellow.400),#c49a42)] before:transition-[transform,opacity] before:duration-500 before:ease-out hover:before:delay-200",
            // Ripple on press (centered)
            "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_60%)] active:after:opacity-100 active:after:animate-[btn-ripple_700ms_ease-out]",
          ].join(' '),
        destructive:
          [
            "bg-destructive text-white shadow-xs transition-all duration-300 hover:bg-destructive/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:opacity-0 hover:before:opacity-100 before:bg-[linear-gradient(90deg,theme(colors.red.400),theme(colors.red.600))] before:transition-[transform,opacity] before:duration-500 before:ease-out hover:before:delay-200",
            "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_60%)] active:after:opacity-100 active:after:animate-[btn-ripple_700ms_ease-out]",
          ].join(' '),
        outline:
          [
            "border bg-background shadow-xs transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            // Silver growing underlay using transform
            "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:opacity-0 hover:before:opacity-100 before:bg-[linear-gradient(90deg,var(--brand-silver-start),var(--brand-silver-end))] before:transition-[transform,opacity] before:duration-500 before:ease-out hover:before:delay-200",
            "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_60%)] active:after:opacity-100 active:after:animate-[btn-ripple_700ms_ease-out]",
          ].join(' '),
        secondary:
          [
            "bg-secondary text-secondary-foreground shadow-xs transition-all duration-300 hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
            "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:opacity-0 hover:before:opacity-100 before:bg-[linear-gradient(90deg,var(--brand-silver-start),var(--brand-gold-end))] before:transition-[transform,opacity] before:duration-500 before:ease-out hover:before:delay-200",
            "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_60%)] active:after:opacity-100 active:after:animate-[btn-ripple_700ms_ease-out]",
          ].join(' '),
        ghost:
          "transition-all duration-300 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-[1] inline-flex items-center">{children}</span>
    </Comp>
  );
}

export { Button, buttonVariants };
