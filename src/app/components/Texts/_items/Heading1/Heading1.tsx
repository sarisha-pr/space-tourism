import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Heading1({ children }: Props) {
  return (
    <h1 className="text-[9.375rem] leading-[1] font-bellefair">{children}</h1>
  );
}
