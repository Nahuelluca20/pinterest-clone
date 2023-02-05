import {
  Tabs,
  Button,
  HStack,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

import SettingsIcon from "../assets/settings.png";
import PlusIcon from "../assets/plus.png";
import IconButton from "../Buttons/IconButton";
import PinSavesCard from "../Cards/PinSavesCard";
import data from "../pinApi";

function TabsPanel() {
  const pins = data;

  return (
    <Tabs
      defaultIndex={1}
      display={"block"}
      justifyContent={"center"}
      pt={10}
      variant="unstyled"
      width={"100%"}
    >
      <TabList justifyContent={"center"} spacing={0}>
        <Tab
          _selected={{borderBottom: "4px solid #111"}}
          bg={"transparent"}
          border="none"
          borderBottom={"4px solid transparent"}
          color="#111"
          cursor={"pointer"}
          display={"block"}
          fontSize={"16px"}
          fontWeight={600}
          justifyContent={"center"}
          mr={5}
          pb={2}
        >
          Creados
        </Tab>
        <Tab
          _selected={{borderBottom: "4px solid #111"}}
          bg={"transparent"}
          border="none"
          borderBottom={"4px solid transparent"}
          color="#111"
          cursor={"pointer"}
          display={"block"}
          fontSize={"16px"}
          fontWeight={600}
          justifyContent={"center"}
          mr={5}
          pb={2}
        >
          Guardados
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack alignItems={"center"} mt={"30px"} width={"100%"}>
            <Text color={"#111"} fontWeight={"16px"}>
              Sube una imagen desde aqui
            </Text>
            <Stack>
              <Button
                _hover={{background: "#ad081b"}}
                bgColor={"#e60023"}
                border={"none"}
                borderRadius={"999px"}
                color={"white"}
                cursor={"pointer"}
                fontSize={"16px"}
                fontWeight={600}
                px={"12px"}
                py={"12px"}
              >
                Subi tu Pin
              </Button>
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack mt={"15px"} width={"100%"}>
            <HStack justifyContent={"space-between"} px={{base: 0, lg: 10}}>
              <IconButton
                alt={""}
                img={SettingsIcon}
                imgContainerHeight={"48px"}
                imgContainerWidth={"48px"}
                imgHeight={20}
                imgWidth={20}
                label={""}
              />
              <IconButton
                alt={""}
                img={PlusIcon}
                imgContainerHeight={"48px"}
                imgContainerWidth={"48px"}
                imgHeight={20}
                imgWidth={20}
                label={""}
              />
            </HStack>
            <Flex
              display={{base: "grid", lg: "flex"}}
              flexWrap={"wrap"}
              gridTemplateColumns={{md: "repeat(2, 1fr)"}}
              justifyContent={{base: "center", md: "startbetween", lg: "space-between"}}
              justifyItems={"center"}
              px={{base: "0px", lg: "70px"}}
              py={10}
            >
              {pins.map((item) => {
                return (
                  <PinSavesCard
                    key={item.title}
                    img1={item.img1}
                    img2={item.img2}
                    img3={item.img3}
                    lastModificated={item.lastModificated}
                    pinName={item.title}
                    totalPins={item.totalPins}
                  />
                );
              })}
            </Flex>
            <Stack />
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsPanel;
