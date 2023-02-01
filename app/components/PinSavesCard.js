import {Stack, Text, Flex} from "@chakra-ui/react";

function PinSavesCard({pinName, totalPins, lastModificated, img1, img2, img3}) {
  return (
    <Stack cursor={"pointer"}>
      <Stack borderRadius={"15px"} height={"157px"} overflow={"hidden"} spacing={0} width={"233px"}>
        <Flex>
          <Stack mr={"2px"} width={"100%"}>
            <img height={157} src={img1} width={"100%"} />
          </Stack>
          <Stack height={"100%"} justifyContent={"space-between"} spacing={"2px"}>
            <img height={78} src={img2} width={77} />
            <img height={78} src={img3} width={77} />
          </Stack>
        </Flex>
      </Stack>
      ;
      <Text color={"#111"} fontSize={"20px"} fontWeight={600} pl={3} pt={4}>
        {pinName}
      </Text>
      <Flex pl={3}>
        <Text color={"#111"} fontSize={"12px"} fontWeight={400} mt={0}>
          {totalPins} pins
        </Text>
        <Text color={"#111"} fontSize={"12px"} fontWeight={400} ml={10} mt={0}>
          {lastModificated}
        </Text>
      </Flex>
    </Stack>
  );
}

export default PinSavesCard;
