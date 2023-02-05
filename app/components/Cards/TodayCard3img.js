import {Stack, Flex, Text} from "@chakra-ui/react";

function TodayCard3img({title, img1, img2, img3, upTitle}) {
  return (
    <Stack
      key={title}
      borderRadius={"30px"}
      cursor={"pointer"}
      height={"306px"}
      spacing={0}
      width={{base: "350px", md: "408px"}}
      zIndex={10}
    >
      <Flex
        borderRadius={"30px"}
        height={"306px"}
        overflow={"hidden"}
        position={"absolute"}
        spacing={0}
        width={{base: "350px", md: "408px"}}
        zIndex={-10}
      >
        <img height={"196px"} src={img1} style={{objectFit: "cover"}} width={"135.98px"} />
        <img height={"196px"} src={img2} style={{objectFit: "cover"}} width={"135.98px"} />
        <img height={"196px"} src={img3} style={{objectFit: "cover"}} width={"135.98px"} />
      </Flex>
      <Stack
        _hover={{background: "rgba(0,0,0,0.06)"}}
        borderRadius={"30px"}
        boxShadow="md"
        color="#111"
        height={"306px"}
        justifyContent={"end"}
        overflow={"hidden"}
        spacing={0}
        width={{base: "350px", md: "408px"}}
        zIndex={1}
      >
        <Stack bg={"white"} color={"#111"} py={5} spacing={0}>
          <Text fontSize={"16px"} fontWeight={400} margin={0}>
            {upTitle}
          </Text>
          <Text fontSize={"28px"} fontWeight={600} margin={0}>
            {title}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TodayCard3img;
