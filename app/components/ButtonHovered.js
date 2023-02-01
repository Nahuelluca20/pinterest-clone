import {Button} from "@chakra-ui/react";

function ButtonHovered({bgColor, bgColorHover, text}) {
  return (
    <Button
      _hover={{
        background: `${bgColorHover}`,
      }}
      bgColor={bgColor}
      border="none"
      borderRadius={"24px"}
      color={"#111"}
      cursor={"pointer"}
      fontSize={"16px"}
      fontWeight={600}
      px={"16px"}
      py={"15px"}
    >
      {text}
    </Button>
  );
}

export default ButtonHovered;
