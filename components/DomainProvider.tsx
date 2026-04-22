"use client";

import { createContext, useContext } from "react";
import { getDomainConfig } from "@/lib/domain";

const DomainContext = createContext(false);

export function DomainProvider({
  isReserve,
  children,
}: {
  isReserve: boolean;
  children: React.ReactNode;
}) {
  return (
    <DomainContext.Provider value={isReserve}>{children}</DomainContext.Provider>
  );
}

export function useIsReserveDomain(): boolean {
  return useContext(DomainContext);
}

export function useDomainConfig() {
  const isReserve = useIsReserveDomain();
  return getDomainConfig(isReserve);
}
