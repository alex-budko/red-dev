import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Button,
    VStack,
  } from "@chakra-ui/react";
  import { useContext } from "react";
  
  import { Link, useNavigate } from "react-router-dom";
  import { logout } from "../auth_functions/logout";
  import { UserContext } from "../user-context/UserContext";
  import {TbFaceId} from 'react-icons/tb'
  
  export default function Settings() {
  
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);
  
    return (
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"350px"}
          minH={"450px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"2xl"}
          pos={"relative"}
          zIndex={1}
        >
          <VStack spacing={"5"}>
            <Heading>Settings</Heading>
            <TbFaceId style={{height: '250px', width: '250px'}} />
            <Button
            onClick={()=> {
              navigate('/')
              logout(setUser)
            }}
              width={"60%"}
              position="absolute"
              bottom={"5"}
              color='white'
              size="lg"
              _hover={{ bgColor: "red.800" }}
              bgColor="red.600"
            >
              Logout
            </Button>
          </VStack>
        </Box>
      </Center>
    );
  }