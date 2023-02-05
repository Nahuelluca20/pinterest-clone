import {Stack, Flex, HStack, Heading, Image as ImageChakra} from "@chakra-ui/react";
import Image from "next/image";

import checkIcon from "../assets/checkRed.png";
import ButtonHovered from "../Buttons/ButtonHovered";

function FolloweingUserBox({img, userName}) {
  return (
    <HStack
      display={{base: "grid", md: "flex"}}
      height={"52px"}
      justifyContent={{base: "center", md: "space-between"}}
      width={"100%"}
    >
      <Flex alignItems={"center"} cursor={"pointer"} mb={{base: 2, md: 0}}>
        <ImageChakra
          height={"50"}
          src={img}
          style={{borderRadius: "999%", objectFit: "cover"}}
          width={50}
        />
        <Heading color={"#111"} fontSize={"16px"} fontWeight={600} ml={4}>
          {userName}
        </Heading>
        <Stack ml={4} spacing={0}>
          <Image alt="check" height={18} src={checkIcon} width={18} />
        </Stack>
      </Flex>
      <Stack alignItems={"center"} spacing={0} width={{base: "140px"}}>
        <ButtonHovered
          bgColor={"#efefef"}
          bgColorHover={"#e2e2e2"}
          colorText="#111"
          fontWeight={500}
          px={"8px"}
          py={"12px"}
          text={"Dejar de seguir"}
        />
      </Stack>
    </HStack>
  );
}

export default FolloweingUserBox;
