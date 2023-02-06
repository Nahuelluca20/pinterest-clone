"use client";
"use client";
import {useState, useEffect} from "react";
import {getImageSize} from "react-image-size";
import {Stack, Heading, HStack, Box, Image} from "@chakra-ui/react";
import ButtonHovered from "app/components/Buttons/ButtonHovered";
import FolloweingUserBox from "app/components/Cards/FolloweingUserBox";
import IconButton from "app/components/Buttons/IconButton";
import LeftArrow from "app/components/assets/left-arrow.png";
import Points from "app/components/assets/points.png";
import Chain from "app/components/assets/chain.png";
import Share from "app/components/assets/share.png";
import {GetCardById} from "app/services/testing.service";

function PinView({params}) {
  const iconsButtons = [
    {id: 1, alt: "options", icon: Points},
    {id: 2, alt: "share", icon: Share},
    {id: 3, alt: "link", icon: Chain},
  ];

  const [imgSizes, setImgSizes] = useState({
    width: "",
    height: "",
  });

  const {id} = params;
  const [dataPin, setDataPin] = useState([]);
  const fetchData = async (id) => {
    const result = await GetCardById(id);
    const data = result.data;

    setDataPin(data);
  };

  console.log(dataPin);

  useEffect(() => {
    try {
      fetchData(id);
    } catch (err) {
      console.error(err);
    }
    getImageHeight();
  }, []);

  const getImageHeight = async () => {
    const {width, height} = await getImageSize(dataPin.img);

    setImgSizes({
      width: width,
      height: height,
    });
  };

  return (
    <Stack alignItems={"center"} my={8} width={"100%"}>
      <Stack left={"40px"} mt={1} position={"fixed"}>
        <IconButton
          alt="icon"
          img={LeftArrow}
          imgContainerHeight="50px"
          imgContainerWidth="50px"
          imgHeight="20px"
          imgWidth="20px"
          label=""
          mtTooltip=""
        />
      </Stack>
      <Box borderRadius={"30px"} boxShadow="2xl" display={"flex"} overflow={"hidden"} spacing={0}>
        <Image alt="iamgen" height={imgSizes.height} src={dataPin.img} width={imgSizes.width} />
        <Stack height={imgSizes.height} p={"32px"} width={"502px"}>
          <HStack justifyContent={"space-between"} spacing={0}>
            <HStack spacing={0}>
              {iconsButtons.map((icon) => (
                <IconButton
                  key={icon.id}
                  alt={icon.alt}
                  img={icon.icon}
                  imgContainerHeight="50px"
                  imgContainerWidth="50px"
                  imgHeight="30px"
                  imgWidth="30px"
                  label=""
                  mtTooltip=""
                />
              ))}
            </HStack>
            <ButtonHovered
              bgColor={"#e60023"}
              bgColorHover={"#ad081b"}
              colorText={"white"}
              fontWeight={600}
              px={"15px"}
              py={"25px"}
              text={"Guardar"}
            />
          </HStack>
          <Heading pt={4}>{dataPin.title}</Heading>
          {dataPin.userImg && (
            <Stack pt={5}>
              <FolloweingUserBox img={dataPin.userImg} userName={dataPin.userName} />
            </Stack>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

export default PinView;
