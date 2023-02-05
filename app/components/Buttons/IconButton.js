import {Stack, Tooltip} from "@chakra-ui/react";
import Image from "next/image";

function IconButton({
  img,
  alt,
  label,
  mtTooltip,
  imgHeight,
  imgWidth,
  imgContainerHeight,
  imgContainerWidth,
}) {
  return (
    <Tooltip
      aria-label={label}
      bg="black"
      borderRadius={"10px"}
      color="white"
      fontSize={"13px"}
      label={label}
      mt={mtTooltip}
      p={2}
    >
      <Stack
        _hover={{
          cursor: "pointer",
          background: "rgba(0,0,0,0.06)",
        }}
        align={"center"}
        aria-label="Close"
        height={imgContainerHeight}
        justifyContent={"center"}
        rounded={"999%"}
        transition={"transition: transform 85ms ease-out;"}
        width={imgContainerWidth}
      >
        <Image alt={alt} height={imgHeight} src={img} width={imgWidth} />
      </Stack>
    </Tooltip>
  );
}

export default IconButton;
