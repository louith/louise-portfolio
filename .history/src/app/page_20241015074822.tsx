import { Box } from "@chakra-ui/react";
import NamePic from "@/assets/name.png";
import { colors } from "@/lib/colors";

export default function Home() {
  return (
    <Box w={"full"} h={"full"} bgColor={colors.bg}>
      <Box
        w={"637px"}
        h={"206px"}
        bgImage={NamePic.src}
        mx={"auto"}
        my={"auto"}
        position={"absolute"}
        bottom={135}
        left={240}
      ></Box>
    </Box>
  );
}
