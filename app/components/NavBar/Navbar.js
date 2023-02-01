"use-client";
import {useState} from "react";
import {Stack, Link, HStack, Heading, Text, Tooltip} from "@chakra-ui/react";
import NextLink from "next/link";
import {ChevronDownIcon} from "@chakra-ui/icons";

import NavbarLogo from "../assets/logo.png";
import BellLogo from "../assets/bell.png";
import UploadLogo from "../assets/upload.png";
import LinkButton from "../Buttons/LinkButton";
import IconButton from "../Buttons/IconButton";

import SearchBar from "./SearchBar";

function Navbar({onClick}) {
  const [isSelected, setIsSelected] = useState({
    inicio: false,
    hoy: false,
  });
  const [open, setOpen] = useState(false);

  function handleSelected(e) {
    onClick(false);
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
    <HStack bg={"white"} position={"fixed"} py={"16px"} spacing={10} width={"100%"} zIndex={50}>
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
      <SearchBar onClick={onClick} />
      <HStack>
        <IconButton
          alt={"Notificaciones"}
          img={BellLogo}
          imgHeight={24}
          imgWidth={24}
          label={"Notificaciones"}
          mtTooltip={10}
        />

        <IconButton
          alt={"Subir Imagen"}
          img={UploadLogo}
          imgHeight={24}
          imgWidth={24}
          label={"Subir Imagen"}
          mtTooltip={10}
        />

        <Tooltip
          aria-label={"Tu perfil"}
          bg="black"
          borderRadius={"10px"}
          color="white"
          fontSize={"13px"}
          label="Tu perfil"
          mr={10}
          mt={10}
          p={10}
        >
          <Link
            as={NextLink}
            href="/profile"
            pr={5}
            textAlign={"center"}
            textDecoration={"none"}
            onClick={() => {
              onClick(false);
              setIsSelected({
                inicio: false,
                hoy: false,
              });
            }}
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
