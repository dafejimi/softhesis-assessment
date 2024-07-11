"use client";
import React from "react";

const variants = {
  fill: {
    white_A700_33: "bg-white-a700_33",
  },
} as const;

const shapes = {
  round: "rounded-[5px]",
} as const;

const sizes = {
  xs: "h-[40px] pl-5 text-sm",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,

      variant = "fill",
      size = "xs",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center gap-[34px] cursor-text text-blue_gray-600_b2 text-sm border-indigo-800_33 border border-solid bg-white-a700_33 rounded-lg  ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
