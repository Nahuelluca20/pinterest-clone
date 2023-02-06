import {Stack, Text, Image, HStack, Link} from "@chakra-ui/react";

function Comments({commment}) {
  return (
    <HStack>
      <Image
        borderRadius={"999%"}
        height={"32px"}
        src="https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg"
        width={"32px"}
      />
      <Stack spacing={0}>
        <HStack mt={3}>
          <Link color={"#111"} fontSize={"16px"} fontWeight={500} href="/profile">
            @pepeGrillo
          </Link>
          <Text color={"#111"} fontSize={"16px"} fontWeight={400}>
            {commment}
          </Text>
        </HStack>
        <HStack>
          <Text color={"#5f5f5f"} fontSize={"14px"} fontWeight={400}>
            7mo
          </Text>
          <Text color={"#5f5f5f"} fontSize={"14px"} fontWeight={600}>
            Responder
          </Text>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default Comments;
