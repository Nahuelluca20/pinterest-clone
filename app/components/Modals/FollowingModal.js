import {useState} from "react";
import {Text, Stack, Flex, HStack} from "@chakra-ui/react";

import CrossLogo from "../assets/cross.png";
import IconButton from "../Buttons/IconButton";
import FolloweingUserBox from "../Cards/FolloweingUserBox";

function FollowingModal() {
  const [show, setShow] = useState(false);

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
                    img={CrossLogo}
                    imgHeight={15}
                    imgWidth={15}
                    label={"Subir Imagen"}
                  />
                </div>
              </HStack>
              <Stack pt={40} spacing={4}>
                <FolloweingUserBox
                  img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6716d046-9f32-405b-aebf-7ee808533572/ddzg4i4-1029ca4a-dd1f-4654-8b3d-dea9ff6ebf18.png/v1/fill/w_1920,h_1955,q_80,strp/geppetto_by_p_fritz_ddzg4i4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk1NSIsInBhdGgiOiJcL2ZcLzY3MTZkMDQ2LTlmMzItNDA1Yi1hZWJmLTdlZTgwODUzMzU3MlwvZGR6ZzRpNC0xMDI5Y2E0YS1kZDFmLTQ2NTQtOGIzZC1kZWE5ZmY2ZWJmMTgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kXv8IYSjTsD9LaAqXIdTUJR2IgjGYUIfIk8NuUfAPSY"
                  userName={"Geppetto"}
                />
                <FolloweingUserBox
                  img="data:image/jpeg;base64,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"
                  userName={"Pinocho"}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default FollowingModal;
