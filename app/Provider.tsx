"use client";
import Loader from "@/components/Loader";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      // publicApiKey={
      //   "pk_dev_wup5rLAysTk-Bvg8bTLRgOSesye9faI2FsfqzvzwskZ5N6Dw2NzJQnLGpJ1KsvzS"
      // }

      authEndpoint="/api/liveblocks-auth"
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
