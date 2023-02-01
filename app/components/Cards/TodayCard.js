import {Stack, Text} from "@chakra-ui/react";

function TodayCard({title, upTitle, img1}) {
  return (
    <Stack
      borderRadius={"30px"}
      boxShadow="md"
      cursor={"pointer"}
      height={"306px"}
      spacing={0}
      width={"408px"}
      zIndex={10}
    >
      <Stack
        borderRadius={"30px"}
        height={"306px"}
        overflow={"hidden"}
        position={"absolute"}
        spacing={0}
        width={"408px"}
        zIndex={-10}
      >
        <img height={"306px"} src={img1} style={{objectFit: "cover"}} width={"408px"} />
      </Stack>
      <Stack
        _hover={{background: "rgba(0,0,0,0.06)"}}
        background={"linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);"}
        borderRadius={"30px"}
        color="white"
        height={"306px"}
        justifyContent={"end"}
        overflow={"hidden"}
        spacing={0}
        width={"408px"}
        zIndex={1}
      >
        <Stack pb={20} spacing={0}>
          <Text fontSize={"16px"} fontWeight={400} margin={0}>
            {upTitle}
          </Text>
          <Text fontSize={"28px"} fontWeight={600} margin={0}>
            {title}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TodayCard;
