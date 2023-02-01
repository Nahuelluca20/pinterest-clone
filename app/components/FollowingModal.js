import {useState} from "react";
import {Text, Stack, Flex, HStack} from "@chakra-ui/react";

import UploadLogo from "../assets/upload.png";

import IconButton from "./IconButton";

function FollowingModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Text
        color="#111"
        cursor={"pointer"}
        fontSize={"16px"}
        fontWeight={600}
        onClick={() => setShow(true)}
      >
        Siguiendo a 2
      </Text>

      <Flex
        alignItems={"center"}
        bg={"rgba(0,0,0,.8);"}
        display={show ? "block" : "none"}
        height={"100vh"}
        justifyContent={"center"}
        mt={"0"}
        p={50}
        position={"fixed"}
        spacing={0}
        style={{marginTop: "-0.5rem", overflow: "hidden"}}
        top={0}
        width={"100%"}
        zIndex={1}
      >
        <Stack alignItems={"center"} height={"100%"} justifyContent={"center"}>
          <Stack
            alignItems={"center"}
            bgColor={"white"}
            borderRadius={"16px"}
            height={"264px"}
            mt={"-80px"}
            width={"552px"}
          >
            <Stack pb={"24px"} pt={"48px"} px={"24px"} spacing={0} width={"456px"}>
              <HStack justifyContent={"space-between"} spacing={0} width={"100%"}>
                <Stack w={"54px"} />
                <Text color={"#111"} fontSize={"28px"} fontWeight={600}>
                  Siguiendo
                </Text>
                <div onClick={() => setShow(false)}>
                  <IconButton
                    alt={"Subir Imagen"}
                    img={UploadLogo}
                    imgHeight={24}
                    imgWidth={24}
                    label={"Subir Imagen"}
                  />
                </div>
              </HStack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default FollowingModal;
