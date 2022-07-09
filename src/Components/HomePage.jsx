/*
Landing page, where one can access search feature
*/

import React from "react";
import {
  VStack,
  HStack,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import MicrophoneIconImage from "../assets/Images/GoogleMic.png";
import GoogleIconImage from "../assets/Images/googleLogo.png";

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

      <VStack style={{ marginTop: "225px" }}>
        <Box>
          <Image src={GoogleIconImage} alt="Dan Abramov" />
        </Box>

        <Box style={{ marginTop: "20px" }}>
          <InputGroup>
            <InputLeftElement
              ml="5px"
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              _hover={{ boxShadow: "md" }}
              _focusvisible="false"
              borderRadius="full"
              width={{ base: "sm", sm: "md", md: "lg" }}
              height="45px"
            />
            <InputRightElement
              mr="5px"
              pointerEvents="none"
              children={
                <Image src={MicrophoneIconImage} alt="mic" height="20px" />
              }
            />
          </InputGroup>
        </Box>

        <HStack style={{ marginTop: "25px" }}>
          <Button
            backgroundColor="#F7FAFC"
            _hover={{ backgroundColor: "#F7FAFC", boxShadow: "md" }}
            fontWeight="normal"
            fontSize="sm"
          >
            Google Search
          </Button>
          <a href="https://www.google.com/doodles">
            <Button
              backgroundColor="#F7FAFC"
              _hover={{ backgroundColor: "#F7FAFC", boxShadow: "md" }}
              fontWeight="normal"
              fontSize="sm"
            >
              I'm Feeling Lucky
            </Button>
          </a>
        </HStack>
      </VStack>

      <VStack
        position="fixed"
        bottom="0"
        height={{ base: "146px", lg: "100px" }}
        width="100%"
        backgroundColor="gray.100"
      >
        <Box
          style={{ alignSelf: "flex-start", color: "GrayText" }}
          ml="20px"
          mt="13px"
        >
          India
        </Box>
        <Divider orientation="horizontal" border="1px" />

        <Flex flexDirection={{ base: "column", lg: "row" }} fontSize="sm">
          <div style={{ display: "flex", alignSelf: "flex-start" }}>
            <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
              <Box
                style={{ color: "GrayText", marginLeft: "13px" }}
                _hover={{ textDecoration: "underline" }}
              >
                About
              </Box>
          
            </a>

            <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000100-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            <Box
              _hover={{ textDecoration: "underline" }}
              style={{ color: "GrayText", marginLeft: "13px" }}
            >
              Advertising
            </Box>
            </a>
            
          
            <a href="https://www.google.com/intl/en_in/business/">
              <Box
                _hover={{ textDecoration: "underline" }}
                style={{ color: "GrayText", marginLeft: "13px" }}
              >
                Business
              </Box>
            </a>

            <a href="https://www.google.com/search/howsearchworks/?fg=1">
              <Box
                _hover={{ textDecoration: "underline" }}
                style={{ color: "GrayText", marginLeft: "13px" }}
              >
                How search works
              </Box>
            </a>
          </div>

          <Box
            style={{ display: "flex" }}
            alignSelf={{ base: "center", lg: "flex-end" }}
            mt={{ base: "20px", lg: "auto" }}
          >
            <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
              <Box
                _hover={{ textDecoration: "underline" }}
                style={{ color: "GrayText", marginLeft: "13px" }}
              >
                Privacy
              </Box>
            </a>
            <a href="https://policies.google.com/terms?hl=en-IN&fg=1">
              <Box
                _hover={{ textDecoration: "underline" }}
                style={{ color: "GrayText", marginLeft: "13px" }}
              >
                Terms
              </Box>
            </a>
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default HomePage;
