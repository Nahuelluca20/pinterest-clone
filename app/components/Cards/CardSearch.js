import {Stack, Text, Image} from "@chakra-ui/react";

function CardSearch({img, text}) {
  return (
    <>
      <Stack borderRadius={"20px"} cursor={"pointer"} overflow={"hidden"} spacing={0}>
        <Stack
          _hover={{bg: "rgba(0,0,0,0.3)"}}
          bg="transparent"
          cursor={"pointer"}
          height={"80px"}
          justifyContent={"center"}
          textAlign={"center"}
          width={"180px"}
          zIndex={2}
        >
          <Text color={"white"} fontSize={"16px"} fontWeight={700} px={5}>
            {text}
          </Text>
        </Stack>
        <Stack height={"80px"} position={"absolute"} width={"180px"} zIndex={1}>
          <Image
            height={"100%"}
            src={img}
            style={{objectFit: "cover", borderRadius: "20px"}}
            width={"100%"}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default CardSearch;
