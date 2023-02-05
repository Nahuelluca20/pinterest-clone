import {useState, useEffect} from "react";
import {Stack, Image, Text, Flex, Box} from "@chakra-ui/react";
import {getImageSize} from "react-image-size";

import ButtonHovered from "../Buttons/ButtonHovered";
import useHover from "../hooks/useHover";

function PinHome({img, link, title, userImg, userName}) {
  const [imgHeight, setImgHeight] = useState("");
  const getImageHeight = async (img) => {
    const {height} = await getImageSize(img);

    setImgHeight(height);
  };

  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    getImageHeight(img);
  }, []);

  return (
    <Stack
      borderRadius={"16px"}
      display={"inline-block"}
      pt={8}
      style={{margin: "0 auto"}}
      w={"236px"}
    >
      <Stack ref={hoverRef} spacing={0} w={"236px"}>
        <Image
          borderRadius={"16px"}
          display={"block"}
          h={"imgHeight"}
          src={img}
          style={{objectFit: "cover"}}
          w={"100%"}
        />
        {title && (
          <Text
            color={"#111"}
            fontSize={"14px"}
            fontWeight={600}
            mr={2}
            noOfLines={1}
            pl={1}
            pt={2}
            w={"230px"}
          >
            {title}
          </Text>
        )}
        {(userImg || userName) && (
          <Flex alignItems={"center"} pl={1} pt={2}>
            {userImg && (
              <Image
                borderRadius={"999%"}
                height={"32px"}
                src={userImg}
                style={{objectFit: "cover"}}
                width={"32px"}
              />
            )}
            {userName && (
              <Text fontSize={"14px"} fontWeight={400} pl={2}>
                {userName}
              </Text>
            )}
          </Flex>
        )}
        {isHovered && (
          <Stack
            _hover={{backgroundColor: "rgba(0,0,0,0.4)"}}
            bg={"rgba(0,0,0,0.4)"}
            borderRadius={"16px"}
            cursor={"zoom-in"}
            height={imgHeight}
            position={"absolute"}
            w={"236px"}
          >
            <Stack alignItems={"flex-end"} mt={4} pr={3} width={"100%"}>
              <Box>
                <ButtonHovered
                  bgColor={"#e60023"}
                  bgColorHover={"#ad081b"}
                  colorText={"white"}
                  fontWeight={600}
                  px={"15px"}
                  py={"25px"}
                  text={"Guardar"}
                />
              </Box>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default PinHome;
