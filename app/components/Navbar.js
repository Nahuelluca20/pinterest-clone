import {useState} from "react";
import {Stack, Link, HStack, Heading, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import {ChevronDownIcon, SearchIcon} from "@chakra-ui/icons";

import NavbarLogo from "../assets/logo.png";

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
        <Stack
          _hover={{
            cursor: "pointer",
            background: "rgba(0,0,0,0.06)",
          }}
          align={"center"}
          height={48}
          justifyContent={"center"}
          rounded={"100%"}
          transition={"transition: transform 85ms ease-out;"}
          width={48}
        >
          <Image alt="Picture of the author" height={24} src={NavbarLogo} width={24} />
        </Stack>
      </Link>
      <Link
        as={NextLink}
        color={isSelected.inicio ? "white" : "#111"}
        href="/"
        textAlign={"center"}
        textDecoration={"none"}
        onClick={(e) => handleSelected(e.target.innerText)}
      >
        <Stack
          bg={isSelected.inicio ? "#111111" : "trasparent"}
          borderRadius={"24px"}
          spacing={0}
          width={"72px"}
        >
          <Heading as={"h2"} fontSize={"16px"} fontWeight={600}>
            Inicio
          </Heading>
        </Stack>
      </Link>
      <Link
        as={NextLink}
        color={isSelected.hoy ? "white" : "#111"}
        href="/today"
        textAlign={"center"}
        textDecoration={"none"}
        onClick={(e) => handleSelected(e.target.innerText)}
      >
        <Stack
          bg={isSelected.hoy ? "#111111" : "trasparent"}
          borderRadius={"24px"}
          spacing={0}
          width={"72px"}
        >
          <Heading as={"h2"} fontSize={"16px"} fontWeight={600}>
            Hoy
          </Heading>
        </Stack>
      </Link>
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
      <Stack>
        <SearchIcon height={50} width={60} />
      </Stack>
    </HStack>
  );
}

export default Navbar;
