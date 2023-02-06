"use client";
import {useState} from "react";
import {Link as NextLink} from "next/link";
import {Stack, Text, Input, Link, HStack, Image} from "@chakra-ui/react";
import ButtonHovered from "app/components/Buttons/ButtonHovered";
import {PostPin} from "app/services/testing.service";

function PinBuilder() {
  const postPin = async () => {
    await PostPin(image, title);
    await setStatus(true);
  };

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <Stack
      alignItems={"center"}
      bg={"#e9e9e9"}
      color={"#111"}
      height={"100vh"}
      overflow={"hidden"}
      pb={10}
      width={"100%"}
    >
      {status ? (
        <Link as={NextLink} href="/" pt={30} style={{textDecoration: "none"}}>
          <ButtonHovered
            bgColor={"#e60023"}
            bgColorHover={"#ad081b"}
            colorText={"white"}
            fontWeight={600}
            px={"15px"}
            py={"25px"}
            text={"Ir al feed de inicio"}
          />
        </Link>
      ) : (
        <Stack>
          <Stack bg={"white"} borderRadius={"20px"} mt={20} p={"40px"} width={"700px"}>
            <Text fontSize={"40px"} fontWeight={400}>
              Subir Imagen
            </Text>
            <Stack pt={10} spacing={10}>
              <Input
                fontSize="36px"
                pb={3}
                placeholder="Agrega el título"
                value={title}
                variant="flushed"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="URL de la imagen"
                value={image}
                variant="flushed"
                onChange={(e) => setImage(e.target.value)}
              />
            </Stack>
            <HStack pt={5}>
              <Image
                borderRadius={"999%"}
                height={"48px"}
                src="https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg"
                width={"48px"}
              />
              <Text color={"#111"} fontSize={"14px"} fontWeight={600}>
                Pepe Grillo
              </Text>
            </HStack>
            <Stack pt={5} width={"100px"}>
              <ButtonHovered
                bgColor={"#e60023"}
                bgColorHover={"#ad081b"}
                colorText={"white"}
                fontWeight={600}
                px={"15px"}
                py={"25px"}
                text={"Subir"}
                onClick={postPin}
              />
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default PinBuilder;
