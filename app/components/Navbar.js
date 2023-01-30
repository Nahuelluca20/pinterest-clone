"use-client";
import {useState} from "react";
import {Stack, Link, HStack, Heading, Text, Input, Tooltip} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import {ChevronDownIcon} from "@chakra-ui/icons";

import NavbarLogo from "../assets/logo.png";
import SearchLogo from "../assets/search.png";
import BellLogo from "../assets/bell.png";
import UploadLogo from "../assets/upload.png";

import LinkButton from "./LinkButton";
import IconButton from "./IconButton";

function Navbar() {
  const [isSelected, setIsSelected] = useState({
    inicio: false,
    hoy: false,
  });
  const [open, setOpen] = useState(false);

  function handleSelected(e) {
    if (open) {
      setOpen(false);
    }

    if (e === "Inicio") {
      setIsSelected({
        inicio: true,
        hoy: false,
      });
    } else {
      setIsSelected({
        inicio: false,
        hoy: true,
      });
    }
  }

  return (
    <HStack spacing={2}>
      <Link as={NextLink} href="/">
        <IconButton alt={"pinterest"} img={NavbarLogo} imgHeight={24} imgWidth={24} label="" />
      </Link>
      <LinkButton
        bgColor={isSelected.inicio ? "#111111" : "trasparent"}
        color={isSelected.inicio ? "white" : "#111"}
        href={"/"}
        text={"Inicio"}
        onClick={handleSelected}
      />
      <LinkButton
        bgColor={isSelected.hoy ? "#111111" : "trasparent"}
        color={isSelected.hoy ? "white" : "#111"}
        href={"/today"}
        text={"Hoy"}
        onClick={handleSelected}
      />
      <Link color={"#111"} cursor={"pointer"} textAlign={"center"} textDecoration={"none"}>
        <HStack
          bg={"trasparent"}
          borderRadius={"24px"}
          ml={10}
          spacing={0}
          width={"72px"}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Heading as={"h2"} fontSize={"16px"} fontWeight={600}>
            Crear
          </Heading>
          <ChevronDownIcon h={25} w={25} />
        </HStack>
        <Stack
          bg={"white"}
          border={"1px solid white"}
          borderRadius={"16px"}
          boxShadow={"0 0 8px rgb(0 0 0 / 10%);"}
          display={open ? "block" : "none"}
          padding={8}
          position={"absolute"}
          spacing={0}
        >
          <Text
            _hover={{bg: "#E9E9E9"}}
            borderRadius={"8px"}
            fontSize={"16px"}
            fontWeight={600}
            margin={0}
            pl={"10px"}
            pr={"20px"}
            py={"11px"}
          >
            Crea un Idea Pin
          </Text>
          <Text
            _hover={{bg: "#E9E9E9"}}
            align={"start"}
            borderRadius={"8px"}
            fontSize={"16px"}
            fontWeight={600}
            pl={"10px"}
            pr={"20px"}
            py={"11px"}
          >
            Crear Pin
          </Text>
        </Stack>
      </Link>
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
          py={"20px"}
          type="text"
          width={"90%"}
        />
      </HStack>

      <HStack>
        <IconButton
          alt={"Notificaciones"}
          img={BellLogo}
          imgHeight={24}
          imgWidth={24}
          label={"Notificaciones"}
        />

        <IconButton
          alt={"Subir Imagen"}
          img={UploadLogo}
          imgHeight={24}
          imgWidth={24}
          label={"Subir Imagen"}
        />

        <Tooltip
          aria-label={"Tu perfil"}
          bg="black"
          borderRadius={"10px"}
          color="white"
          fontSize={"13px"}
          label="Tu perfil"
          mr={10}
          p={10}
        >
          <Link
            as={NextLink}
            href="/profile"
            pr={5}
            textAlign={"center"}
            textDecoration={"none"}
            onClick={() =>
              setIsSelected({
                inicio: false,
                hoy: false,
              })
            }
          >
            <Stack cursor={"pointer"}>
              <img
                alt="Picture of the author"
                height={50}
                src="https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg"
                style={{borderRadius: "100px"}}
                width={50}
              />
            </Stack>
          </Link>
        </Tooltip>
      </HStack>
    </HStack>
  );
}

export default Navbar;
