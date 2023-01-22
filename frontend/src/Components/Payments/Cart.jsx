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
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiArrowBack, BiLockAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { BsBagPlusFill, BsTruck } from "react-icons/bs";
import CartFooter from "./CartFooter";
import CartNavbar from "./CartNavbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Cart = () => {
  const toast = useToast();
  const toast1 = useToast();
  let stotal = 0;
  let saveprice = 0;
  let total = 0;
  let [item, setItem] = useState(true);
  let [item1, setItem1] = useState(true);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [datawish, setDatawish] = useState("");
  const size = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25,
  ];
  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    axios
      .get("https://rich-plum-lemming-cape.cyclic.app/carts", {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [item,item1]);

  // console.log(data);

  const handledelete = (id) => {
    console.log(id);
    axios
      .delete(`https://rich-plum-lemming-cape.cyclic.app/carts/delete/${id}`, {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setItem(!item);
        toast({
          title: "Product Removed Successfully",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const navigate = useNavigate();
  const movepaymentpage = () => {
    navigate("/payment");
  };

  const handledelete1 = (id) => {
    axios
      .delete(`https://rich-plum-lemming-cape.cyclic.app/carts/delete/${id}`, {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setItem1(!item1);
      });
  };

  const wishlist = (data) => {
    axios
      .get(`https://rich-plum-lemming-cape.cyclic.app/products/${data}`)
      .then((e) => {
        setDatawish(e.data);

        wishlistmove(e.data);
      })
      .catch((e) => console.log(e));
  };
  const wishlistmove = (movedata) => {
    // console.log("movedata", localStorage.getItem("token"));

    fetch("https://rich-plum-lemming-cape.cyclic.app/wishlist/adddata", {
      method: "POST",
      body: JSON.stringify(movedata),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        handledelete1(response.productId);
        toast1({
          title: "Product Added in Wishlist Successfully",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };
  console.log(datawish);
  
  data.forEach((ele) => {
    stotal = stotal + ele.productId.oPrice;
    total = total + ele.productId.dPrice;
    saveprice = saveprice + (stotal - total);
  });
  // console.log(quantity);

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
          <Link to="/">
            {" "}
            <BiArrowBack size="25" />
          </Link>
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
        <ul>
          <li style={{ paddingTop: "10px", marginRight: "20px" }}>
            <Link to="/wishlist">
              <FavoriteIcon />
            </Link>
          </li>
        </ul>
      </Flex>

      {data.length == 0 ? (
        <Box h="50vh" minHeight="calc(100vh - 70px)" lineHeight="50px" mt="3%">
          <Box>
            <Box w="10%" m="auto" p="1%">
              <BsBagPlusFill size="100" />
            </Box>
            <Heading>Empty Bag!</Heading>
            <Text>Let's do some retail therapy!</Text>
            <Link to="/ring">
              <Button bg="#cd59e9" color="white" colorScheme="purple">
                Start Shopping
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          w="90%"
          m="auto"
          mt="3%"
          display="grid"
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <Box>
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
              Total ({data.length} Items) : ₹{total.toLocaleString()}
            </Text>

            {data.length !== 0
              ? data.map((ele) => {
                  return (
                    <Flex border="1px solid black" mb="2%">
                      <Box>
                        <Image src={ele.productId.imageSrc} />
                      </Box>
                      <Box w="80%">
                        <Box textAlign="left" w="55%">
                          <Text>{ele.productId.brand}</Text>
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
                              <Select
                                fontSize="sm"
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {qty.map((ok) => (
                                  <option value={ok}>{ok}</option>
                                ))}
                              </Select>
                            </Stack>
                          </Flex>
                        </Box>
                        <Box display="flex" m="auto" w="100%">
                          <Box
                            textAlign="left"
                            w="70%"
                            m="auto"
                            lineHeight="30px"
                          >
                            <Text>Delivery by - 23rd to 24th Jan</Text>
                            <Flex gap="3">
                              <Text fontWeight="bold">
                                {ele.productId.discountedPrice}
                              </Text>
                              <strike>{ele.productId.originalPrice}</strike>
                              <Text>
                                Save ₹
                                {(
                                  ele.productId.oPrice - ele.productId.dPrice
                                ).toLocaleString()}
                              </Text>
                            </Flex>
                          </Box>
                          <Box>
                            <Button
                              w="80%"
                              border="1px solid black"
                              m="3% 0% 3% 0%"
                              onClick={() => handledelete(ele.productId._id)}
                            >
                              Remove
                            </Button>
                            <Button
                              w="80%"
                              border="1px solid black"
                              onClick={() => wishlist(ele.productId._id)}
                            >
                              Move to Wishlist
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Flex>
                  );
                })
              : null}
          </Box>

          <Box textAlign="left">
            <Box
              w="70%"
              m="auto"
              mt="3%"
              lineHeight="40px"
              position="sticky"
              top="70px"
            >
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
                  <Text>{stotal.toLocaleString()}</Text>
                </Flex>
                <Flex>
                  <Text>You Saved</Text>
                  <Spacer />
                  <Text>{(stotal - total).toLocaleString()}</Text>
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
                  <Text>{total.toLocaleString()}</Text>
                </Flex>
              </Box>
              <Button
                mt="3%"
                w="100%"
                bg="#cd59e9"
                color="white"
                colorScheme="purple"
                onClick={movepaymentpage}
              >
                <BiLockAlt />
                Checkout Securely
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <CartFooter />
    </div>
  );
};

export default Cart;
