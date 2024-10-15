import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box w={"100%"} h={"100%"} bgColor={colors.bg}>
      <Text textColor={colors.font}>Skills</Text>
    </Box>
  );
};

export default Skills;
