import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../user-context/UserContext";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Avatar,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"600px"}
        minH={"600px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        shadow={"2xl"}
        rounded={"2xl"}
        pos={"relative"}
        zIndex={1}
      >
        <Center>
          <VStack spacing="5">
            <Heading>{username}'s Profile</Heading>
            <Center>
              <Avatar
                _hover={{ cursor: "pointer" }}
                name={username}
                size={"2xl"}
              />
            </Center>
            <HStack>
              <Heading color={'red.300'}>Red Dev Twitter Member</Heading>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}

export default Profile;
