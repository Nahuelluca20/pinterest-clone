"use client";
import {useState, useEffect} from "react";
import {getImageSize} from "react-image-size";
import {Stack, Heading, HStack, Box, Image, Link, Text} from "@chakra-ui/react";
import ButtonHovered from "app/components/Buttons/ButtonHovered";
import FolloweingUserBox from "app/components/Cards/FolloweingUserBox";
import IconButton from "app/components/Buttons/IconButton";
import LeftArrow from "app/components/assets/left-arrow.png";
import Points from "app/components/assets/points.png";
import Chain from "app/components/assets/chain.png";
import Share from "app/components/assets/share.png";
import {GetCardById} from "app/services/testing.service";
import AddComment from "app/components/Inputs/AddComment";
import Comments from "app/components/Cards/Comments";

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
  const comments = ["hola", "chau"];

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
      <Link bg={"white"} borderRadius={"999%"} href="/" left={"40px"} mt={1} position={"fixed"}>
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
      </Link>
      <Box
        borderRadius={"30px"}
        boxShadow="2xl"
        display={{base: "block", md: "flex"}}
        overflow={"hidden"}
        spacing={0}
      >
        <Stack>
          <Image alt="iamgen" borderRadius={"30px"} src={dataPin.img} width={imgSizes.width} />
        </Stack>
        <Stack height={imgSizes.height} p={"32px"} width={{base: "375px", md: "502px"}}>
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
          <Stack pt={10}>
            <Heading color={"#111"} fontSize={"20px"}>
              Comentarios
            </Heading>
            {comments.length <= 0 ? (
              <Text color={"#5f5f5f"} fontSize={"16px"}>
                Todavía no hay comentarios. Agrega uno para iniciar la conversación.
              </Text>
            ) : (
              comments.map((comment) => <Comments key={comment} commment={comment} />)
            )}
            <Box pt={5}>
              <AddComment />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default PinView;
