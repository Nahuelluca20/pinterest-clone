"use client";
import {Stack} from "@chakra-ui/react";
import {Roboto} from "@next/font/google";

import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({children}) {
  return (
    <html>
      <head>
        <title>Pinterest Clone</title>
      </head>
      <body className={roboto.className}>
        <Stack bg="#FFFFFF">
          <Navbar />
        </Stack>
        {children}
      </body>
    </html>
  );
}
