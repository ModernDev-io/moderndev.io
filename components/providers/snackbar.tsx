"use client"
import React from "react";
import { SnackbarProvider } from "notistack";

export default function SnackbarComponentProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SnackbarProvider maxSnack={3}>
        {children}
    </SnackbarProvider>
  );
}