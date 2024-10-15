import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PampHerePhone from "@/assets/name.png";

const Projects = () => {
  return (
    <Box w={"full"} h={"full"} bgColor={colors.font}>
      <Box w={"full"} h={"full"}>
        <Box
          w={"637px"}
          h={"206px"}
          bgImage={NamePic.src}
          mx={"auto"}
          my={"auto"}
          position={"absolute"}
          bottom={135}
          left={240}
        ></Box>
      </Box>
    </Box>
  );
};

export default Projects;
