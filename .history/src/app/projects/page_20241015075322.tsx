import { colors } from "@/lib/colors";
import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
// import PampHerePhone from "@/assets/pamphere_transparent.png";
import PampHerePhone from "@/assets/pamphere_phone.png";

// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w={"full"} h={"fit-content"} bgColor={colors.font}>
      {/* <Box bgColor={colors.font} w={"full"} h={"fit-content"}>
        <Image src={PampHerePhone.src} alt="phone" width={258} height={780} />
      </Box> */}
      <SimpleGrid>
        <Card maxW={"sm"}>
          <CardBody>
            {/* <Image src={PampHerePhone.src} alt="phone" width={258} height={780} /> */}
            <Image src={PampHerePhone.src} alt="sks"></Image>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
