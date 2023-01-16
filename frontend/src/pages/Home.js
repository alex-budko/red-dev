import {
    Box,
    Center,
    Divider,
    Heading,
    HStack,
  } from "@chakra-ui/react";
  
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
          A Simple, Twitter Clone!
        </Heading>
      </Box>
    );
  }
  