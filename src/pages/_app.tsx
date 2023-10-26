import "@mantine/core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

config.autoAddCss = false;
const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider theme={theme}>
        {/* <QueryClientProvider client={queryClient}> */}
        <Component {...pageProps} />
        {/* </QueryClientProvider> */}
        {/* <ReactQueryDevtools /> */}
      </MantineProvider>
    </SessionProvider>
  );
}
