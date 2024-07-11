import React from "react";

const sizes = {
  textxs: "text-xs font-normal not-italic",
  texts: "text-sm font-normal not-italic",
  textmd: "text-base font-normal not-italic",
  textlg: "text-large font-normal not-italic"
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textmd",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-600 font-worksans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
