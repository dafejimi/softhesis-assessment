import React from "react";

const sizes = {
  textxl: "text-[22px] font-medium",
  text2xl: "text-2xl font-medium md:text-[22px]",
  headingxs: "text-xs font-semibold",
  headings: "text-2xl font-semibold md:text-[22px]",
  headingmd:"text-md font-semibold md:text-[14px]"
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-600 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
