/*
Landing page, where one can access search feature
*/

import React from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <VStack>
      <HStack style={{ alignSelf: "flex-end" }} mt="4" mr="5" fontSize="sm">
        <Box mr="3" _hover={{ cursor: "pointer", textDecoration: "underline" }}>
          Gmail
        </Box>
        <Box _hover={{ cursor: "pointer", textDecoration: "underline" }}>
          Images
        </Box>
      </HStack>

      <VStack>
        <Box>GOOGLE LOGO</Box>
        <Box>Search Bar</Box>
        <HStack>
          <input type="button" value="Google Search" />
          <input type="button" value="Google Search" />
        </HStack>
      </VStack>
    </VStack>
  );
}

export default HomePage;
