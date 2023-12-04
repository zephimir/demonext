import { FC, PropsWithChildren } from "react";

export const ServerWrapper: FC<PropsWithChildren> = ({ children }) => {
  console.log("secrets from server");

  return (
    <div>
      ServerWrapper
      {children}
    </div>
  );
};
