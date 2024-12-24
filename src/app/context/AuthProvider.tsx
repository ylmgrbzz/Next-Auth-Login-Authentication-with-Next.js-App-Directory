"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("children", children);
  return <SessionProvider>{children}</SessionProvider>;
}
