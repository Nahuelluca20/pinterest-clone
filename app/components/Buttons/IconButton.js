import {Stack, Tooltip} from "@chakra-ui/react";
import Image from "next/image";

function IconButton({img, alt, label, mtTooltip, imgHeight, imgWidth}) {
  return (
    <Tooltip
      aria-label={label}
      bg="black"
      borderRadius={"10px"}
      color="white"
      fontSize={"13px"}
      label={label}
      mt={mtTooltip}
      p={10}
    >
      <Stack
        _hover={{
          cursor: "pointer",
          background: "rgba(0,0,0,0.06)",
        }}
        align={"center"}
        aria-label="Close"
        height={48}
        justifyContent={"center"}
        rounded={"100%"}
        transition={"transition: transform 85ms ease-out;"}
        width={48}
      >
        <Image alt={alt} height={imgHeight} src={img} width={imgWidth} />
      </Stack>
    </Tooltip>
  );
}

export default IconButton;
