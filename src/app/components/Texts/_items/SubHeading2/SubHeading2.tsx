import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function SubHeading2({ children }: Props) {
  return (
    <p className="text-[0.875rem] leading-[1] tracking-[0.16875em] font-barlow">
      {children}
    </p>
  );
}
