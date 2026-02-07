import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./Button.module.scss";
import clsx from "clsx";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type Size = "default-size" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export function Button({
  className,
  variant = "default",
  size = "default-size",
  asChild = false,
  ...props
}: Readonly<ButtonProps>) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={clsx(
        styles["button"],
        styles[variant],
        styles[size],
        className,
      )}
      {...props}
    />
  );
}
