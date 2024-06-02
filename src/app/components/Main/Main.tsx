import React from "react";

type Props = {
  bgImagePath?: string;
  children?: React.ReactNode;
};

export default function Main({ bgImagePath, children }: Props) {
  return (
    <main className="relative min-h-screen pt-20 overflow-hidden [&>*]:relative">
      {bgImagePath && (
        <img
          src={bgImagePath}
          alt="background"
          className="!absolute inset-0 w-full h-full object-cover"
        />
      )}
      {children}
    </main>
  );
}
