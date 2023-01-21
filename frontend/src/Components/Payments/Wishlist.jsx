import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsBagPlusFill } from "react-icons/bs";

const arr = [
  
];

const Wishlist = () => {
  const [data, setData] = useState(arr);

  return (
    <div>
      <Flex w="50%" m="auto">
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            height: 5,
            margin: "3% 0% 3% 0%",
          }}
        />
        <Text fontWeight="bold" m="auto">Your Wishlist</Text>
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            height: 5,
            margin: "3% 0% 3% 0%",
          }}
        />
      </Flex>
      {data.length === 0 ? (
        <Box minHeight="calc(100vh - 70px)" lineHeight="50px" mt="3%">
          <Box>
            <Box w="10%" m="auto" p="1%">
              <BsBagPlusFill size="100" />
            </Box>
            <Heading>Uh Oh!</Heading>
            <Heading as="h2" size="10">
              Your Wishlist Seems to be Empty!
            </Heading>
            <Button bg="#cd59e9" color="white" colorScheme="purple">
              Start Shopping
            </Button>
          </Box>
        </Box>
      ) : (
        <Box w="95%" m="auto" mt="3%"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)" gap="5"
        >
          {data.map((ele) => {
            return (
              <Box lineHeight="50px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                <Image m="auto" src={ele.img}/>
                <Text>{ele.product || "Ring"}</Text>
                <Flex
                  m="auto"
                  w="50%"
                  justifyContent="space-around"
                >
                  <Text>₹{ele.price || 0}</Text>
                  <strike>₹{ele.strike || 0}</strike>
                </Flex>
                <Button bg="#a45ff4" color="white" colorScheme="purple">Move to cart</Button>
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default Wishlist;
