import {Stack, Text, HStack} from "@chakra-ui/react";
import Image from "next/image";

function PinCardButton({img, height, widthContainer, width, text, rounded}) {
  return (
    <Stack
      _hover={{background: "rgba(255, 255, 255)"}}
      alignItems={"center"}
      bgColor={"rgba(255, 255, 255, 0.8)"}
      borderRadius={rounded}
      cursor={"pointer"}
      height={"32px"}
      justifyContent={"center"}
      width={widthContainer}
    >
      <HStack>
        {img && <Image height={height} src={img} width={width} />}
        {text && (
          <Text
            fontSize={"14px"}
            fontWeight={600}
            maxWidth={"90px"}
            noOfLines={1}
            textColor={"#111"}
          >
            {text}
          </Text>
        )}
      </HStack>
    </Stack>
  );
}

export default PinCardButton;
