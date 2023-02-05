import {useState} from "react";
import {Stack, HStack, Text, Input, Box, Flex, Grid} from "@chakra-ui/react";
import Image from "next/image";

import SearchLogo from "../assets/search.png";
import RecentlySearch from "../Cards/RecentlySearch";
import CardSearch from "../Cards/CardSearch";

function SeachBar({onClick, show}) {
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
    // {
    //   id: 5,
    //   text: "men style",
    // },
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
          width={"90%"}
          onClick={() => onClick(true)}
        />
      </HStack>
      {show && (
        <Stack
          alignItems={"center"}
          height={"620px"}
          position={"absolute"}
          spacing={0}
          top={"55px"}
          width={"100%"}
        >
          <Box
            bg={"white"}
            borderRadius={"10px"}
            boxShadow={"dark-lg"}
            height={"620px"}
            width={"100%"}
          >
            <Stack pl={20} py={10}>
              <Text color="#767676" fontSize={"16px"} fontWeight={500}>
                Búsquedas recientes
              </Text>
              <Flex gap={2}>
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
            <Stack pl={20} pt={0}>
              <Text color="#767676" fontSize={"16px"} fontWeight={500}>
                Ideas para ti
              </Text>
              <Grid gap={4} gridTem={"wrap"} templateColumns={"repeat(4, 180px)"}>
                {items.map((item) => {
                  return <CardSearch key={item.id} />;
                })}
                {items.map((item) => {
                  return <CardSearch key={item.id} />;
                })}
              </Grid>
            </Stack>

            <Stack pl={20} pt={5}>
              <Text color="#767676" fontSize={"16px"} fontWeight={500}>
                Populares en pinterest
              </Text>
              <Grid gap={4} gridTem={"wrap"} templateColumns={"repeat(4, 180px)"}>
                {items.map((item) => {
                  return <CardSearch key={item.id} />;
                })}
                {items.map((item) => {
                  return <CardSearch key={item.id} />;
                })}
              </Grid>
            </Stack>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

export default SeachBar;
