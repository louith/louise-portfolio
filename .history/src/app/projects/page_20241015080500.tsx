import { colors } from "@/lib/colors";
import { Box, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
// import PampHerePhone from "@/assets/pamphere_transparent.png";
import PampHerePhone from "@/assets/pamphere_phone.png";
import SpecialtyCoffee from "@/assets/phone_Specialty.png";
// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box m={"auto"} w={"full"} h={"fit-content"} bgColor={colors.font}>
      <SimpleGrid
        bgColor={colors.bg}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card maxW={"sm"}>
          <CardBody>
            {/* <Image src={PampHerePhone.src} alt="phone" width={258} height={780} /> */}
            <Image src={PampHerePhone.src} alt="sks"></Image>
          </CardBody>
          <CardFooter>
            <VStack>
              <Text color={colors.font} fontSize={32}>
                PampHere
              </Text>
              <Text color={colors.font}>
                A culminating Project Capstone 2 project, where salons and
                freelancers can register and be booked by customers.
              </Text>
            </VStack>
          </CardFooter>
        </Card>
        <Card>
          <CardBody>
            {/* <Image src={PampHerePhone.src} alt="phone" width={258} height={780} /> */}
            <Image src={SpecialtyCoffee.src} alt="sks"></Image>
          </CardBody>
          <CardFooter>
            <VStack>
              <Text color={colors.font} fontSize={32}>
                Internship Project
              </Text>
              <Text color={colors.font}>
                I was part in creating a responsive, fully fledged, e-commerce
                website for an actual client project along with our internship
                company's developer team with NextJS.
              </Text>
            </VStack>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
