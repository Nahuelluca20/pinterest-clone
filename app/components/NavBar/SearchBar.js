import {useState} from "react";
import {Stack, HStack, Text, Input, Box, Flex} from "@chakra-ui/react";
import Image from "next/image";

import SearchLogo from "../assets/search.png";

import RecentlySearch from "./RecentlySearch";

function SeachBar({onClick}) {
  const RecentlySearchItems = [
    {
      id: 1,
      text: "heavy metal",
    },
    {
      id: 2,
      text: "sushi aesthetic",
    },
    {
      id: 3,
      text: "metal wallpaper",
    },
    {
      id: 4,
      text: "attack on titan",
    },
    {
      id: 5,
      text: "men style",
    },
  ];

  const [items, setItem] = useState(RecentlySearchItems);

  function handleDelete(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      position={"relative"}
      spacing={0}
      top={0}
      width={"100%"}
    >
      <HStack alignItems="center" justifyContent="center" spacing={0} width={"100%"}>
        <Stack mr={"-40px"} zIndex={10}>
          <Image alt="search" height={25} src={SearchLogo} width={25} />
        </Stack>
        <Input
          bgColor={"#efefef"}
          border="none"
          borderRadius={"100px"}
          pl={"50px"}
          placeholder="Buscar"
          pr={"20px"}
          py={"15px"}
          type="text"
          width={"90%"}
          onClick={() => onClick(true)}
        />
      </HStack>
      <Stack
        alignItems={"center"}
        height={"500px"}
        position={"absolute"}
        spacing={0}
        top={"55px"}
        width={"100%"}
      >
        <Box
          bg={"white"}
          borderRadius={"10px"}
          boxShadow={"dark-lg"}
          height={"500px"}
          width={"100%"}
        >
          <Stack pl={20} py={20}>
            <Text color="#767676" fontSize={"16px"} fontWeight={500}>
              Búsquedas recientes
            </Text>
            <Flex gap={10}>
              {items.map((item) => {
                return (
                  <RecentlySearch
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    onDelete={handleDelete}
                  />
                );
              })}
            </Flex>
          </Stack>
          <Stack pl={20} py={20}>
            <Text color="#767676" fontSize={"16px"} fontWeight={500}>
              Ideas para ti
            </Text>
            <Flex gap={10}>
              {items.map((item) => {
                return (
                  <RecentlySearch
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    onDelete={handleDelete}
                  />
                );
              })}
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default SeachBar;
