import {Input, Image, HStack} from "@chakra-ui/react";

import ButtonHovered from "../Buttons/ButtonHovered";

function AddComment({id, value, setValue, upLoadComment}) {
  return (
    <HStack>
      <Image
        borderRadius={"999%"}
        height={"48px"}
        src="https://disneynews.us/wp-content/uploads/2019/11/Jiminy-Cricket-Pinocchio-disney-289x300.jpg"
        width={"48px"}
      />
      <Input
        borderRadius={"30px"}
        focusBorderColor="#e9e9e9"
        height={"51px"}
        placeholder="Agregar un comentario"
        value={value}
        variant="filled"
        width={"386px"}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== "" ? (
        <ButtonHovered
          bgColor={"#e60023"}
          bgColorHover={"#ad081b"}
          colorText={"white"}
          fontWeight={600}
          px={"15px"}
          py={"25px"}
          text={"subir"}
          onClick={() => upLoadComment(id, value)}
        />
      ) : null}
    </HStack>
  );
}

export default AddComment;
