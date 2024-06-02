import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Heading3({ children }: Props) {
  return (
    <h3 className="text-[3.5rem] leading-[1] font-bellefair">{children}</h3>
  );
}
