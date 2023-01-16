import React, { useContext, useEffect, useState } from "react";
import {
  Center,
  Heading,
  VStack,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  Textarea,
  CardFooter,
  Button,
} from "@chakra-ui/react";

import { UserContext } from "../user-context/UserContext";
import { get_tweets } from "../action_functions/get_tweets";
import { make_tweet } from "../action_functions/make_tweet";

function Explore() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState('');
  const [madeTweet, setMadeTweet] = useState(false);
  const { user } = useContext(UserContext);

  const getTweets = async () => {
    setTweets([])
    get_tweets().then((data) => {
      for (let item = 0; item < data.length; item++) {
        let tweet = data[item];
        setTweets((tweets) => [...tweets, tweet.text]);
      }
    });
  };

  const makeTweet = async () => {
    make_tweet(user.username, tweet).then(()=>{
      console.log(tweet)
      console.log(user.username)
      setMadeTweet(!madeTweet);
      setTweet('');
    })
  }

  useEffect(()=> {
    getTweets()
  }, [madeTweet])

  return (
    <Center>
      <VStack>
        {user.username != "" && <Card>
          <Center>
            <Heading size="sm" p="3">
              {user.username}, Make a Tweet!
            </Heading>
          </Center>
          <CardBody>
            <Textarea maxLength={280} resize='none' onChange={(e)=> setTweet(e.target.value)} value={tweet} />
          </CardBody>
          <Center>
            <CardFooter>
              <Center>
                <Button bgColor={"red.300"} _hover={"red.800"} onClick={()=> makeTweet()}>
                  Send
                </Button>
              </Center>
            </CardFooter>
          </Center>
        </Card>}
        <Wrap align={"center"} mt='100px' justify="center">
          {tweets.length > 0 ? (
            tweets.map((tweet, i) => {
              return (
                <WrapItem
                  onClick={(e) => console.log(e)}
                  rounded={"lg"}
                  bgColor="gray.50"
                  p="5"
                  mt="10"
                  key={i * 41 + 34}
                >
                  <Center>
                    <WrapItem><b>{tweet}</b></WrapItem>
                  </Center>
                </WrapItem>
              );
            })
          ) : (
            <Center>
              <Heading>No Tweets Present</Heading>
            </Center>
          )}
        </Wrap>
      </VStack>
    </Center>
  );
}

export default Explore;
