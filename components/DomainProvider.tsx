"use client";

import { createContext, useContext } from "react";

const DomainContext = createContext(false);

export function DomainProvider({
  isNew,
  children,
}: {
  isNew: boolean;
  children: React.ReactNode;
}) {
  return (
    <DomainContext.Provider value={isNew}>{children}</DomainContext.Provider>
  );
}

export function useIsNewDomain(): boolean {
  return useContext(DomainContext);
}
