"use client";
import {Heading, Stack, Text, Button, HStack} from "@chakra-ui/react";

import TabsPanel from "../components/TabsPanel";

function Profile() {
  return (
    <Stack>
      <Stack alignItems={"center"} mt={30}>
        <img
          alt="Picture of the author"
          height={120}
          src="https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg"
          style={{borderRadius: "100px"}}
          width={120}
        />
        <Heading color="#111" fontSize={"36px"} fontWeight={500}>
          Pepe Grillo
        </Heading>
        <Text color="#5f5f5f" fontSize={"14px"} fontWeight={400}>
          @pepeGrillo
        </Text>
        <Text color="#111" cursor={"pointer"} fontSize={"16px"} fontWeight={600}>
          Siguiendo a 2
        </Text>
        <HStack pt={10}>
          <Button
            _hover={{
              background: "#e2e2e2",
            }}
            bgColor={"#efefef"}
            border="none"
            borderRadius={"24px"}
            color={"#111"}
            cursor={"pointer"}
            fontSize={"16px"}
            fontWeight={600}
            px={"16px"}
            py={"15px"}
          >
            Compartir
          </Button>
          <Button
            _hover={{
              background: "#e2e2e2",
            }}
            bgColor={"#efefef"}
            border="none"
            borderRadius={"24px"}
            color={"#111"}
            cursor={"pointer"}
            fontSize={"16px"}
            fontWeight={600}
            px={"16px"}
            py={"15px"}
          >
            Editar perfil
          </Button>
        </HStack>
        <TabsPanel />
      </Stack>
    </Stack>
  );
}

export default Profile;
