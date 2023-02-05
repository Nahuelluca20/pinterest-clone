import {Stack, Link, Heading} from "@chakra-ui/react";
import NextLink from "next/link";

function LinkButton({color, bgColor, text, href, onClick, children}) {
  return (
    <Link
      as={NextLink}
      color={color}
      href={href}
      style={{textDecoration: "none"}}
      textAlign={"center"}
      textDecoration={"none"}
      onClick={(e) => onClick(e.target.innerText)}
    >
      <Stack bg={bgColor} borderRadius={"24px"} px={2} py={3} spacing={0} width={"72px"}>
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
