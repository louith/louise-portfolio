import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box w={"100%"} h={"100%"} bgColor={colors.bg}>
      <Text textColor={colors.font}>About</Text>
    </Box>
  );
};

export default About;
