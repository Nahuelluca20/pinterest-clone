import {Stack, Text, Flex} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
function PinSavesCard({pinName, totalPins, lastModificated, img1, img2, img3}) {
  return (
    <Stack cursor={"pointer"} my={{base: 3, lg: 0}} spacing={0}>
      <Stack borderRadius={"15px"} height={"157px"} overflow={"hidden"} spacing={0} width={"233px"}>
        <Flex>
          <Stack mr={"2px"} width={"100%"}>
            <img height={"157px"} src={img1} style={{objectFit: "cover"}} width={"100%"} />
          </Stack>
          <Stack spacing={"2px"}>
            <Image
              alt="img2"
              height={"10px"}
              src={img2}
              style={{objectFit: "cover"}}
              width={"77px"}
            />
            <Image
              alt="img3"
              height={"78px"}
              src={img3}
              style={{objectFit: "cover"}}
              width={"77px"}
            />
          </Stack>
        </Flex>
      </Stack>
      <Text color={"#111"} fontSize={"20px"} fontWeight={600} pl={2} pt={3}>
        {pinName}
      </Text>
      <Flex pl={2}>
        <Text color={"#111"} fontSize={"12px"} fontWeight={400} mt={0}>
          {totalPins} pins
        </Text>
        <Text color={"#111"} fontSize={"12px"} fontWeight={400} ml={2} mt={0}>
          {lastModificated}
        </Text>
      </Flex>
    </Stack>
  );
}

export default PinSavesCard;
