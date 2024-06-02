import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Heading4({ children }: Props) {
  return (
    <h5 className="text-[1.75rem] leading-[1] tracking-[0.16875em] font-barlow">
      {children}
    </h5>
  );
}
