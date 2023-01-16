import {
    Box,
    Center,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  import { BsPerson } from "react-icons/bs";
  import { AiOutlineStock } from "react-icons/ai";
  import { HiOutlineDesktopComputer } from "react-icons/hi";
  import { useState } from "react";
  
  
  
  export default function Home() {
  
    return (
      <Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
        <Center>
          <HStack>
            <Heading
              textAlign={"center"}
              mb="3"
              fontSize={["medium", "large", "x-large"]}
              fontWeight={"bold"}
            >
              Weclome to Red Dev Twitter
            </Heading>
          </HStack>
        </Center>
  
        <Divider h="2" bgColor="red.300" rounded="full" />
        <Heading
          fontSize={["medium", "large", "x-large"]}
          textAlign={"center"}
          mt="10"
          mb="5"
        >
          {" "}
          An simple, twitter clone!
        </Heading>
      </Box>
    );
  }
  