import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box w={"100vw"} h={"100vh"} bgColor={colors.bg}>
      <Text>About</Text>
    </Box>
  );
};

export default About;