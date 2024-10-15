"use client";

import { Box, Button, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { PAGE_URL } from "@/lib/constants";
import { colors } from "@/lib/colors";

const Navbar = () => {
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
      <Link color={colors.font} ml={"20px"}>
        Louise Seprado
      </Link>
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
