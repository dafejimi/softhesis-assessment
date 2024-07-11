import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    indigo_800_19: "bg-indigo-800_19 text-indigo-800",
  },
  outline: {
    pink_A400: "border-pink-a400 border border-solid text-pink-a400",
    cyan_400: "border-cyan-400 border border-solid text-cyan-400",
  },
} as const;
const sizes = {
  xs: "h-[30px] px-3 text-sm",
  sm: "h-[40px] px-4 text-sm",
  md: "h-[48px] px-5 text-md"
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-sm ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
