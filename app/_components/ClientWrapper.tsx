"use client";
import { FC, PropsWithChildren } from "react";

export const ClientWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      ClientWrapper
      {children}
    </div>
  );
};
