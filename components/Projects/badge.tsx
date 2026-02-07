import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from "./Badge.module.scss";
import clsx from "clsx";

type Variant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: Variant;
  asChild?: boolean;
}

export function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: Readonly<BadgeProps>) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-variant={variant}
      className={clsx(styles["badge"], className)}
      {...props}
    />
  );
}
