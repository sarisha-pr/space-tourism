import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Heading2({ children }: Props) {
  return (
    <h2 className="text-[6.25rem] leading-[1] font-bellefair">{children}</h2>
  );
}
