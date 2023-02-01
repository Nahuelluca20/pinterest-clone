"use client";
import {Heading, Stack, Text, HStack} from "@chakra-ui/react";

import TabsPanel from "../components/Tabs/TabsPanel";
import ButtonHovered from "../components/Buttons/ButtonHovered";
import FollowingModal from "../components/Modals/FollowingModal";

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
        <FollowingModal />
        <HStack pt={10}>
          <ButtonHovered
            bgColor={"#efefef"}
            bgColorHover={"#e2e2e2"}
            fontWeight={600}
            px={"16px"}
            py={"15px"}
            text={"Compartir"}
          />
          <ButtonHovered
            bgColor={"#efefef"}
            bgColorHover={"#e2e2e2"}
            fontWeight={600}
            px={"16px"}
            py={"15px"}
            text={"Editar perfil"}
          />
        </HStack>
        <TabsPanel />
      </Stack>
    </Stack>
  );
}

export default Profile;
