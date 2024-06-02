import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Heading4({ children }: Props) {
  return <h4 className="text-[2rem] leading-[1] font-bellefair">{children}</h4>;
}
