import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { BsBagPlusFill, BsTruck } from "react-icons/bs";
import CartFooter from "./CartFooter";
import CartNavbar from "./CartNavbar";

const arr = [
  {
    img: "https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_1_lar.jpg",
  },
  {
    img: "https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_1_lar.jpg",
  },
  {
    img: "https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_1_lar.jpg",
  },
  {
    img: "https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_1_lar.jpg",
  },
];

const Cart = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(arr);
  const size = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25,
  ];
  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <CartNavbar />
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
            <Heading fontSize="20">Shopping Cart ({data.length})</Heading>
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
        <Flex w="90%" m="auto" mt="3%">
          <Box w="60%">
            <Flex boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
              <Box textAlign="left" w="80%" m="auto">
                <Heading as="h4" size="lg">
                  Get ₹ 2394 xCLusive points on this order.
                </Heading>
                <Text>You can redeem these points on your next order</Text>
                <Text>
                  ( 1 Point = 1 rupee ) <a href="">Know More</a>
                </Text>
              </Box>
              <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Image
                  w="auto"
                  h="18vh"
                  src="https://thumbs.dreamstime.com/b/complexity-business-challenge-concept-labyrinth-logic-maze-blue-icon-abstract-cloud-background-148997055.jpg"
                />
              </Box>
            </Flex>
            <Text textAlign="left" fontWeight="bold" m="1% 0% 1% 0%">
              Total ({count} Items) : ₹{total}
            </Text>

            {data.length !== 0
              ? data.map((ele) => {
                  return (
                    <Flex border="1px solid black" mb="2%">
                      <Box>
                        <Image src={ele.img} />
                      </Box>
                      <Box w="80%">
                        <Box textAlign="left" w="55%">
                          <Text>Mutyaa Pearl Ring</Text>
                          <Text>JR07311-1YP6P0</Text>
                          <Flex gap="3">
                            <Text m="auto">Size: </Text>
                            <Stack m="auto">
                              <Select fontSize="sm">
                                {size.map((ok) => (
                                  <option value="5">{ok}</option>
                                ))}
                              </Select>
                            </Stack>
                            <Text m="auto">Quantity: </Text>
                            <Stack m="auto">
                              <Select fontSize="sm">
                                {qty.map((ok) => (
                                  <option value="5">{ok}</option>
                                ))}
                              </Select>
                            </Stack>
                          </Flex>
                        </Box>
                        <Box display="flex" m="auto" w="100%">
                          <Box textAlign="left" w="70%" m="auto" lineHeight="30px">
                            <Text>Delivery by - 23rd to 24th Jan</Text>
                            <Flex gap="3">
                              <Text fontWeight="bold">₹{ele.price || 0}</Text>
                              <strike>₹{ele.strike || 0}</strike>
                              <Text>Save ₹{ele.save || "3,000"}</Text>
                            </Flex>
                          </Box>
                          <Box>
                            <Button w="80%" border="1px solid black" m="3% 0% 3% 0%">Remove</Button>
                            <Button w="80%" border="1px solid black">Move to Wishlist</Button>
                          </Box>
                        </Box>
                      </Box>
                    </Flex>
                  );
                })
              : null}
          </Box>

          <Box w="40%" textAlign="left">
            <Box w="70%" m="auto" mt="3%" lineHeight="40px" position="sticky" top="70px">
              <Flex>
                <Button w="100%">
                  Apply Coupon 1 Available <Spacer />
                </Button>
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
              <Box
                p="2%"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                borderRadius="10px"
              >
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
              <Button
                mt="3%"
                w="100%"
                bg="#cd59e9"
                color="white"
                colorScheme="purple"
              >
                <BiLockAlt />
                Checkout Securely
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
      <CartFooter />
    </div>
  );
};

export default Cart;
