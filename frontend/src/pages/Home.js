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
import { get_tweets } from "../action_functions/get_tweets";
import { get_users } from "../action_functions/get_users";
import { BsPerson } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { useEffect, useState } from "react";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Home() {
  const [userCount, setUserCount] = useState(0);
  const [tweetCount, setTweetCount] = useState(0);
  const [engineerCount, _] = useState(1);

  useEffect(() => {
    get_users().then((users) => {
      setUserCount(users.length);
    });
  }, []);

  useEffect(() => {
    get_tweets().then((tweets) => {
      setTweetCount(tweets.length);
    });
  });

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
        A Simple Twitter Clone!
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Users"}
          stat={userCount}
          icon={<BsPerson size={"3em"} />}
        />
        {/* Tweets Stats Card */}
        <StatsCard
          title={"Tweets"}
          stat={tweetCount}
          icon={<AiOutlineStock size={"3em"} />}
        />
        <StatsCard
          title={"Software Engineers"}
          stat={engineerCount}
          icon={<HiOutlineDesktopComputer size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
