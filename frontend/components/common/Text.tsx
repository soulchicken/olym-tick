import { clsx } from "clsx";
import type { ElementType } from "react";

import { css } from "@/styled-system/css";

interface TextProps {
  as?: ElementType;
  size?: string;
  color?: "white" | "primary" | "secondary";
  weight?: string | number;
  className?: string;
  font?: "sans" | "headline";
  children: React.ReactNode;
}

const Text = ({
  as: Component = "p",
  size = "1rem",
  color = "white",
  weight = "regular",
  font = "sans",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(
        css({ fontSize: size, color, fontWeight: weight, fontFamily: font }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
