import { colors } from "@/lib/colors";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PampHerePhone from "@/assets/pamphere_transparent.png";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box w={"full"} h={"fit-content"} bgColor={colors.font}>
      {/* <Box bgColor={colors.font} w={"full"} h={"fit-content"}>
        <Image src={PampHerePhone.src} alt="phone" width={258} height={780} />
      </Box> */}
      <Card>
        <CardBody>
          <Image src={PampHerePhone.src} alt="phone" />
        </CardBody>
      </Card>
    </Box>
  );
};

export default Projects;
