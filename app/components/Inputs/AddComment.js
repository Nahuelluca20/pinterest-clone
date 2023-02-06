import {Input, Text, Image, HStack} from "@chakra-ui/react";

function AddComment() {
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
        variant="filled"
        width={"386px"}
      />
    </HStack>
  );
}

export default AddComment;
