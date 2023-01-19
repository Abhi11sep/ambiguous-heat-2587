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
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { BsBagPlusFill, BsTruck } from "react-icons/bs";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
} from "react-icons/si";

const arr = [
  {
    img: "https://thumbs.dreamstime.com/b/complexity-business-challenge-concept-labyrinth-logic-maze-blue-icon-abstract-cloud-background-148997055.jpg",
  },
];

const Cart = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(arr);

  return (
    <div>
      <Box bg="#231535" color="white" position="sticky" top="0px" zIndex="3">
        Hello
      </Box>
      <Flex
        bg="white"
        position="sticky"
        top="3.6%"
        zIndex="3"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
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

      {data.length == 0 ? (
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
      ) : (
        <Box w="90%" m="auto" border="1px solid yellow" mt="3%">
          <Flex>
            <Flex border="1px solid black" m="auto">
              <Box textAlign="left" w="80%" m="auto">
                <Heading fontSize="30">
                  Get ₹ 2394 xCLusive points on this order.
                </Heading>
                <Text>You can redeem these points on your next order</Text>
                <Text>
                  ( 1 Point = 1 rupee ) <a href="">Know More</a>
                </Text>
              </Box>
              <Box border="1px solid black">
                <Image
                  w="auto"
                  h="18vh"
                  src="https://thumbs.dreamstime.com/b/complexity-business-challenge-concept-labyrinth-logic-maze-blue-icon-abstract-cloud-background-148997055.jpg"
                />
              </Box>
            </Flex>
            <Box w="40%" textAlign="left">
              <Box w="70%" m="auto" lineHeight="40px">
                <Flex>
                  <Button w="100%">Apply Coupon 1 Available <Spacer/></Button>
                </Flex>
                <Flex>
                  <Button w="100%" mt="3%">
                    <Flex gap="3">
                      <BsTruck size="25" />
                      Check Delivery Date
                    </Flex>
                    <Spacer />
                    <Text>Enter Pincode</Text>
                  </Button>
                </Flex>

                <Text>Order Summary</Text>
                <Box p="1%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                  <Flex>
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text>0</Text>
                  </Flex>
                  <Flex>
                    <Text>You Saved</Text>
                    <Spacer />
                    <Text>0</Text>
                  </Flex>
                  <Flex>
                    <Text>Coupon Discount</Text>
                    <Spacer />
                    <Text>Apply Coupon</Text>
                  </Flex>
                  <Flex>
                    <Text>Delivery Charge (Standard)</Text>
                    <Spacer />
                    <Text>FREE</Text>
                  </Flex>
                  <Flex>
                    <Text>TOTAL COST</Text>
                    <Spacer />
                    <Text>0</Text>
                  </Flex>
                </Box>
                <Button mt="3%" w="100%" bg="#cd59e9" color="white" colorScheme="purple"><BiLockAlt/>Checkout Securely</Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
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
