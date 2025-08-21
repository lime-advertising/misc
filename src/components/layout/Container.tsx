"use client";

import React from "react";

type Props = React.ComponentProps<"div"> & {
  width?: "sm" | "md" | "lg" | "xl";
};

const widths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[80rem]",
} as const;

export default function Container({
  className = "",
  width = "lg",
  ...props
}: Props) {
  return <div className={`mx-auto ${widths[width]} px-4 ${className}`} {...props} />;
}
