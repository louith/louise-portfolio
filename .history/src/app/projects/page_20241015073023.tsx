import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PampHerePhone from "@/assets/pamphere_transparent.png";

const Projects = () => {
  return (
    <Box w={"fit-content"} h={"full"} bgColor={colors.font}>
      <Box w={"full"} h={"full"} bgImage={PampHerePhone.src}>
        <Box w={"258px"} h={"625px"} bgImage={PampHerePhone.src}></Box>
      </Box>
    </Box>
  );
};

export default Projects;
