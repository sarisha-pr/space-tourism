import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function SubHeading1({ children }: Props) {
  return (
    <p className="text-[0.875rem] leading-[1] font-bellefair">{children}</p>
  );
}
