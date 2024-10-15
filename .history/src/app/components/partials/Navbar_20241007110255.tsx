"use client";

import { Box, HStack, Link, Button } from "@chakra-ui/react";
import React from "react";
import { PAGE_URL } from "@/lib/constants";
import { colors } from "@/lib/colors";

const Navbar = () => {
  return (
    <HStack
      display={"flex"}
      w={"full"}
      h={"fit-content"}
      justify={"center"}
      px={"24px"}
      py={"8px"}
      bgColor={colors.bg}
    >
      <Link
        href={PAGE_URL.home}
        mr={"24px"}
        color={colors.font}
        my={"24px"}
        letterSpacing={"-1px"}
      >
        home
      </Link>

      <Link
        href={PAGE_URL.about}
        mr={"24px"}
        color={colors.font}
        my={"24px"}
        letterSpacing={"-1px"}
      >
        about
      </Link>
      <Button
        mr={"24px"}
        size="md"
        borderWidth={"1px"}
        py={"8px"}
        px={"20px"}
        borderRadius={"50px"}
        borderColor={colors.font}
        my={"16px"}
      >
        <Link
          href={PAGE_URL.projects}
          mr={"24px"}
          color={colors.font}
          m={"auto"}
        >
          contact me
        </Link>
      </Button>

      <Link href={PAGE_URL.skills} mr={"24px"} color={colors.font} my={"24px"}>
        skills
      </Link>
      <Link
        href={PAGE_URL.projects}
        mr={"24px"}
        color={colors.font}
        my={"24px"}
      >
        projects
      </Link>
    </HStack>
  );
};

export default Navbar;
