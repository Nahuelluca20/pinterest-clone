import {Button, Box} from "@chakra-ui/react";
import Image from "next/image";

import CrossIcon from "../assets/cross.png";

function RecentlySearch({text, onDelete, id}) {
  return (
    <Button
      _hover={{
        background: `#e2e2e2`,
      }}
      alignItems={"center"}
      bgColor={"#efefef"}
      border="none"
      borderRadius={"24px"}
      color={"#111"}
      cursor={"pointer"}
      display={"flex"}
      fontSize={"14px"}
      fontWeight={600}
      px={"16px"}
      py={"10px"}
    >
      {text}
      <Box ml={10} onClick={() => onDelete(id)}>
        <Image alt="cross" height={11} src={CrossIcon} width={11} />
      </Box>
    </Button>
  );
}

export default RecentlySearch;
