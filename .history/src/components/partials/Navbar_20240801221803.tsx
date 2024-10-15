"use client";

import { Box, Button, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
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
        <Link href={PAGE_URL.about} mr={"24px"} color={colors.font}>
          about
        </Link>
        <Link href={PAGE_URL.skills} mr={"24px"} color={colors.font}>
          skills
        </Link>
        <Link href={PAGE_URL.projects} mr={"24px"} color={colors.font}>
          projects
        </Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
