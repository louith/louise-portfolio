import { colors } from "@/lib/colors";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
// import PampHerePhone from "@/assets/pamphere_transparent.png";
import PampHerePhone from "@/assets/pamphere_phone.png";
import SpecialtyCoffee from "@/assets/phone_Specialty.png";
// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w={"full"} h={"fit-content"} bgColor={colors.font}>
      <SimpleGrid
        marginY={"auto"}
        bgColor={colors.bg}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card maxW={"sm"}>
          <CardBody>
            {/* <Image src={PampHerePhone.src} alt="phone" width={258} height={780} /> */}
            <Image src={PampHerePhone.src} alt="sks"></Image>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            {/* <Image src={PampHerePhone.src} alt="phone" width={258} height={780} /> */}
            <Image src={SpecialtyCoffee.src} alt="sks"></Image>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
