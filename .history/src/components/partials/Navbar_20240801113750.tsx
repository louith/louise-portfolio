import { Box, Button, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { PAGE_URL } from "@/lib/constants";
import { colors } from "@/lib/colors";

const Navbar = () => {
  const router = useRouter();
  const goHome = () => router.push(PAGE_URL.home);
  const goAbout = () => router.push(PAGE_URL.about);
  return (
    <HStack
      display={"flex"}
      w={"full"}
      h={"fit-content"}
      justify={"space-between"}
      px={"24px"}
      py={"24px"}
      bgColor={colors.bg}
    >
      <Text onClick={goHome} color={colors.font} ml={"20px"}>
        Louise Seprado
      </Text>
      <Box display={"inline-flex"}>
        <Text onClick={goAbout} mr={"24px"} color={colors.font}>
          about
        </Text>
        <Text mr={"24px"} color={colors.font}>
          skills
        </Text>
        <Text mr={"24px"} color={colors.font}>
          projects
        </Text>
      </Box>
    </HStack>
  );
};

export default Navbar;
