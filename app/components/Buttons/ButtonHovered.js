import {Button} from "@chakra-ui/react";

function ButtonHovered({bgColor, bgColorHover, text, px, py, fontWeight, colorText, onClick}) {
  return (
    <>
      {onClick ? (
        <Button
          _hover={{
            background: `${bgColorHover}`,
          }}
          bgColor={bgColor}
          border="none"
          borderRadius={"24px"}
          color={colorText}
          cursor={"pointer"}
          fontSize={"16px"}
          fontWeight={fontWeight}
          px={px}
          py={py}
          onClick={() => onClick()}
        >
          {text}
        </Button>
      ) : (
        <Button
          _hover={{
            background: `${bgColorHover}`,
          }}
          bgColor={bgColor}
          border="none"
          borderRadius={"24px"}
          color={colorText}
          cursor={"pointer"}
          fontSize={"16px"}
          fontWeight={fontWeight}
          px={px}
          py={py}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export default ButtonHovered;
