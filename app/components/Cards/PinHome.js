import {useState, useEffect} from "react";
import {Stack, Image, Text, Flex, Box, HStack} from "@chakra-ui/react";
import {getImageSize} from "react-image-size";
import Link from "next/link";

import PinCardButton from "../Buttons/PinCardButton";
import ButtonHovered from "../Buttons/ButtonHovered";
import useHover from "../hooks/useHover";
import LinkOpen from "../assets/link-open.png";
import Share from "../assets/share.png";
import Points from "../assets/points.png";

function PinHome({img, link, title, userImg, userName, id}) {
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
    <Link href={`/pin/${id}`}>
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
              justifyContent={"space-betwenn"}
              position={"absolute"}
              w={"236px"}
            >
              <Stack
                alignItems={"flex-end"}
                height={"100%"}
                justifyContent={"space-between"}
                my={4}
                px={3}
                width={"100%"}
              >
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
                <HStack width={"100%"}>
                  <PinCardButton
                    height={"9px"}
                    img={LinkOpen}
                    rounded={"18px"}
                    text={link}
                    width={"9px"}
                    widthContainer={"132px"}
                  />
                  <PinCardButton
                    height={"16px"}
                    img={Share}
                    rounded={"999%"}
                    text={""}
                    width={"16px"}
                    widthContainer={"32px"}
                  />
                  <PinCardButton
                    height={"16px"}
                    img={Points}
                    rounded={"999%"}
                    text={""}
                    width={"16px"}
                    widthContainer={"32px"}
                  />
                </HStack>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Link>
  );
}

export default PinHome;
