import {Stack, Link, Heading} from "@chakra-ui/react";
import NextLink from "next/link";

function LinkButton({color, bgColor, text, href, onClick, children}) {
  return (
    <Link
      as={NextLink}
      color={color}
      href={href}
      textAlign={"center"}
      textDecoration={"none"}
      onClick={(e) => onClick(e.target.innerText)}
    >
      <Stack bg={bgColor} borderRadius={"24px"} spacing={0} width={"72px"}>
        {text && (
          <Heading as={"h2"} fontSize={"16px"} fontWeight={600}>
            {text}
          </Heading>
        )}
        {children}
      </Stack>
    </Link>
  );
}

export default LinkButton;
