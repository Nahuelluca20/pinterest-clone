"use client";
import {Stack} from "@chakra-ui/react";
import {Roboto} from "@next/font/google";
import {useState} from "react";

import Navbar from "./components/NavBar/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({children}) {
  const [showBg, setShowBg] = useState(false);

  return (
    <html>
      <head>
        <title>Pinterest Clone</title>
      </head>
      <body className={roboto.className} style={{margin: 0}}>
        <Navbar onClick={setShowBg} />
        <Stack pt={60}>
          {showBg && (
            <Stack
              bg={"rgba(51,51,51,0.8)"}
              bottom={0}
              height={"100%"}
              position={"fixed"}
              width={"100%"}
              zIndex={40}
              onClick={() => setShowBg(false)}
            />
          )}
          {children}
        </Stack>
      </body>
    </html>
  );
}
