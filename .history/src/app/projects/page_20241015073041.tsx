import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PampHerePhone from "@/assets/pamphere_transparent.png";

const Projects = () => {
  return (
    <Box w={"full"} h={"fit-content"} bgColor={colors.font}>
      <Box w={"258px"} h={"625px"} bgImage={PampHerePhone.src}></Box>
    </Box>
  );
};

export default Projects;
