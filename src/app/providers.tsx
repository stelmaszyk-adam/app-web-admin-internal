"use client";

import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/store/query-client";
import { initMocks, isMockingEnabled } from "@/lib/msw-init";

export function Providers({ children }: { children: React.ReactNode }) {
  // NEXT_PUBLIC_ vars are inlined at build time, so this value matches on the
  // server and the browser's first render, avoiding a hydration mismatch.
  const [mocksReady, setMocksReady] = useState(process.env.NEXT_PUBLIC_API_MOCKING !== "true");

  useEffect(() => {
    if (!isMockingEnabled) {
      return;
    }
    initMocks()
      .then(() => setMocksReady(true))
      .catch((error: unknown) => {
        console.error("[MSW] Failed to start mock service worker", error);
      });
  }, []);

  if (!mocksReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
