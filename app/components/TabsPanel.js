import {useState} from "react";
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

import IconButton from "./IconButton";
import PinSavesCard from "./PinSavesCard";
import data from "./pinApi";

function TabsPanel() {
  const [selectedTab, setSelectedTab] = useState({
    Tab1: false,
    Tab2: true,
  });

  const pins = data;

  return (
    <Tabs
      defaultIndex={1}
      display={"block"}
      justifyContent={"center"}
      pt={20}
      variant="unstyled"
      width={"100%"}
    >
      <TabList justifyContent={"center"} spacing={10}>
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
          mr={10}
          pb={5}
        >
          Creados
          {/* <Stack mt={5} px={5}>
            <Stack
              bgColor={selectedTab.Tab1 ? "#111" : "transparent"}
              borderRadius="20px"
              py={2}
              width={"100%"}
            />
          </Stack> */}
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
          ml={10}
          pb={5}
        >
          Guardados
          {/* <Stack mt={5} px={5}>
            <Stack
              bgColor={selectedTab.Tab2 ? "#111" : "transparent"}
              borderRadius="20px"
              py={2}
              width={"100%"}
            />
          </Stack> */}
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
          <Stack mt={"50px"} width={"100%"}>
            <HStack justifyContent={"space-between"} px={10}>
              <IconButton alt={""} img={SettingsIcon} imgHeight={20} imgWidth={20} label={""} />
              <IconButton alt={""} img={PlusIcon} imgHeight={20} imgWidth={20} label={""} />
            </HStack>
            <Flex justifyContent={"space-between"} px={50} py={10}>
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
