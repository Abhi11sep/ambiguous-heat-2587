import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { BsBagPlusFill } from "react-icons/bs";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
} from "react-icons/si";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Box bg="#231535" color="white" position="sticky" top="0px" zIndex="3">
        Hello
      </Box>
      <Flex position="sticky" top="3.8%" zIndex="3" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
        <Box p="1%">
          <BiArrowBack size="25" />
        </Box>
        <Spacer />
        <Box display="flex" gap="10" p="1%">
          <Flex>
            <HiShoppingBag size="25" />
            <Heading fontSize="20">Shopping Cart ({count})</Heading>
          </Flex>
          <Flex m="auto">
            <AiFillHome size="25" />
            <Heading fontSize="20">Try at Home Cart ({count})</Heading>
          </Flex>
        </Box>
        <Spacer />
      </Flex>

      <Box h="50vh" minHeight="calc(100vh - 70px)" lineHeight="50px" mt="3%">
        <Box>
          <Box w="10%" m="auto" p="1%">
            <BsBagPlusFill size="100" />
          </Box>
          <Heading>Empty Bag!</Heading>
          <Text>Let's do some retail therapy!</Text>
          <Button bg="#cd59e9" color="white" colorScheme="purple">
            Start Shopping
          </Button>
        </Box>
      </Box>
      <Flex position="sticky" h="10vh">
        <Box p="1.5%">
          <Text>
            Contact Us: +91-44-42935000 (Helpline) | contactus@caratlane.com
          </Text>
        </Box>
        <Spacer />
        <Flex p="1.5%" gap="10">
          <SiVisa size="35" />
          <SiMastercard size="35" />
          <SiPaypal size="35" />
          <SiAmericanexpress size="35" />
        </Flex>
      </Flex>
    </div>
  );
};

export default Cart;
