import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaLaptopHouse } from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";
import { AiFillHeart } from "react-icons/ai";
import { ChevronRightIcon, CopyIcon } from "@chakra-ui/icons";
import axios from "axios";
import "../Styles/NewArrival.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [change, setChange] = useState(true);
  const [pricevalue, setPriceValue] = useState("0"); // for RadioGroup
  const [productvalue, setProductValue] = useState("0"); // for RadioGroup
  const [materialvalue, setMaterialValue] = useState("0"); // for RadioGroup
  const [weightvalue, setWeightValue] = useState("0"); // for RadioGroup
  const [metalvalue, setMetalValue] = useState("0"); // for RadioGroup
  const [page, setPage] = useState(1);
  const toast = useToast();

  useEffect(() => {
    axios(`https://rich-plum-lemming-cape.cyclic.app/products?page=${page}&limit=10`)
      .then((res) => setData(res.data))
      .catch((err) => alert(err));
  }, [page]);
  //console.log(data);

  const handleSorting = (e) => {
    const { value } = e.target;
    setChange(!change);
    if (value === "asc") {
      let asc = data.sort((a, b) => {
        return a.dPrice - b.dPrice;
      });
      setSortData(asc);
    } else if (value === "des") {
      let des = data.sort((a, b) => {
        return b.dPrice - a.dPrice;
      });
      setSortData(des);
    }
  };

  useEffect(() => {
    setData(sortData);
  }, [change]);

  return (
    // =======================================Navbar===================================
    <>
      <Navbar />

      <Container h="auto" p="-5" maxW="" pt={"130px"}>
        {/* -----------------------------------Poster-Box------------------- */}
        <Box w="100%">
          <Image
            objectFit="cover"
            alt=""
            src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Newin/05/Desktop_1920-x560_toplisting.jpg"
          />
          <Box
            style={{
              position: "absolute",
              top: "10px",
              left: "4vh",
              transform: "translate(8%, 50%)",
              "font-size": "10px",
            }}
          >
            <Text cursor="pointer" color="gray.500">
              HOME/
            </Text>
          </Box>
        </Box>
        {/* ----------------------------------Gradient-Box---------------------------- */}
        <Flex className="stickyBox" h="auto" align="right" p="4">
          {/* ............................Different Options...................... */}
          <Flex>
            <Box
              p="3"
              mr="5"
              bg="white"
              borderRadius="10"
              cursor="pointer"
              _hover={{ color: "white", backgroundColor: "#8863fb" }}
            >
              <Text fontSize="12px" fontWeight="450">
                All
              </Text>
            </Box>
            <Box
              p="3"
              mr="5"
              bg="white"
              borderRadius="10"
              cursor="pointer"
              _hover={{ color: "white", backgroundColor: "#8863fb" }}
            >
              <Text fontSize="12px" fontWeight="450">
                Try at Home
              </Text>
            </Box>
            <Box
              p="3"
              mr="5"
              bg="white"
              borderRadius="10"
              cursor="pointer"
              _hover={{ color: "white", backgroundColor: "#8863fb" }}
            >
              <Text fontSize="12px" fontWeight="450">
                Designs in Store
              </Text>
            </Box>
            <Box
              p="3"
              mr="5"
              bg="white"
              borderRadius="10"
              cursor="pointer"
              _hover={{ color: "white", backgroundColor: "#8863fb" }}
            >
              <Text fontSize="12px" fontWeight="450">
                Fast Delivery
              </Text>
            </Box>
            <Box
              p="3"
              mr="5"
              bg="white"
              borderRadius="10"
              cursor="pointer"
              _hover={{ color: "white", backgroundColor: "#8863fb" }}
            >
              <Text fontSize="12px" fontWeight="450">
                New In
              </Text>
            </Box>
          </Flex>

          <Spacer />
          {/* ...........................Sorting-Feature......................... */}
          <Box w="17%" mr="5" bg="white" align="right">
            <Stack direction="horizontal" p="2" align="center">
              <Text fontSize="12px" fontWeight="450" width="50px">
                Sort By:
              </Text>

              <Select
                cursor="pointer"
                ml="1"
                variant="unstyled"
                mt="-0.5"
                fontSize="13px"
                fontWeight="450"
                placeholder="Featured"
                onChange={handleSorting}
              >
                <option value="asc">Price Low to High*</option>
                <option value="des">Price High to Low*</option>
                <option value="dis"> Discount </option>
                <option> Featured </option>
                <option> Popularity </option>
              </Select>
            </Stack>
          </Box>
        </Flex>

        {/* ----------------------------------Product & Filter Detailings-------------- */}
        <Flex p="8vh 3vh 0 3vh">
          {/* ..............................Filter-Box...................... */}
          <Stack
            h="900"
            w="22%"
            ml="3"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            borderRadius="24px 24px 0 0"
          >
            <Box
              bgColor="#f6f3f9"
              textAlign="center"
              h="50"
              borderRadius="24px 24px 0 0"
              p="2"
            >
              <Text fontSize="1.1rem" color="#4f3267" fontWeight="bold">
                Filter By
              </Text>
            </Box>
            <Box overflowY="scroll" className="filterScroll">
              <Box h="auto" w="95%" ml="2" lineHeight="1.3" fontWeight="200">
                <Box p="2" mb="5">
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="left"
                    mb="2"
                    color="#4f3267"
                    fontWeight="500"
                  >
                    Price
                  </Heading>
                  <RadioGroup onChange={setPriceValue} value={pricevalue}>
                    <Stack
                      direction="column"
                      overflowY="scroll"
                      h="20vh"
                      className="categoryfilterScroll"
                    >
                      <Radio
                        value="1"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹5,001 - ₹10,000
                      </Radio>
                      <Radio
                        value="2"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹15,001 - ₹20,000
                      </Radio>
                      <Radio
                        value="3"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹20,001 - ₹30,000
                      </Radio>
                      <Radio
                        value="4"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹30,001 - ₹40,000{" "}
                      </Radio>
                      <Radio
                        value="5"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹40,001 - ₹50,000
                      </Radio>
                      <Radio
                        value="6"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹50,001 - ₹75,000
                      </Radio>
                      <Radio
                        value="7"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹75,001 - ₹1,00,000
                      </Radio>
                      <Radio
                        value="8"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹1,00,001 - ₹1,50,000
                      </Radio>
                      <Radio
                        value="9"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        ₹1,50,001 - ₹2,00,000{" "}
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <hr />
                <Box p="2" mb="5" mt="5">
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="left"
                    mb="2"
                    color="#4f3267"
                    fontWeight="500"
                  >
                    Product Type
                  </Heading>
                  <RadioGroup onChange={setProductValue} value={productvalue}>
                    <Stack
                      direction="column"
                      overflowY="scroll"
                      h="20vh"
                      className="categoryfilterScroll"
                    >
                      <Radio
                        value="1"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Earrings
                      </Radio>
                      <Radio
                        value="2"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Rings
                      </Radio>
                      <Radio
                        value="3"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Necklaces
                      </Radio>
                      <Radio
                        value="4"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        pendants
                      </Radio>
                      <Radio
                        value="5"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Bracelets
                      </Radio>
                      <Radio
                        value="6"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Bangles
                      </Radio>
                      <Radio
                        value="7"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Chains
                      </Radio>
                      <Radio
                        value="8"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Mangalsutra
                      </Radio>
                      <Radio
                        value="9"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Nose pin
                      </Radio>
                      <Radio
                        value="10"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Charms
                      </Radio>
                      <Radio
                        value="11"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Baby Bangles
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <hr />
                <Box p="2" mb="5" mt="5">
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="left"
                    mb="2"
                    color="#4f3267"
                    fontWeight="500"
                  >
                    Material
                  </Heading>
                  <RadioGroup onChange={setMaterialValue} value={materialvalue}>
                    <Stack direction="column">
                      <Radio
                        value="1"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Gold
                      </Radio>
                      <Radio
                        value="2"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Diamond
                      </Radio>
                      <Radio
                        value="3"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Gemstone
                      </Radio>
                      <Radio
                        value="4"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        Solitaire
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <hr />
                <Box p="2" mb="5" mt="5">
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="left"
                    mb="2"
                    color="#4f3267"
                    fontWeight="500"
                  >
                    Weight Ranges
                  </Heading>
                  <RadioGroup onChange={setWeightValue} value={weightvalue}>
                    <Stack direction="column">
                      <Radio
                        value="1"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        0-2 g
                      </Radio>
                      <Radio
                        value="2"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        2-5 g
                      </Radio>
                      <Radio
                        value="3"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        5-10 g
                      </Radio>
                      <Radio
                        value="4"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        10-20 g
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <hr />
                <Box p="2" mb="5" mt="5">
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="left"
                    mb="2"
                    color="#4f3267"
                    fontWeight="500"
                  >
                    Metal
                  </Heading>
                  <RadioGroup onChange={setMetalValue} value={metalvalue}>
                    <Stack
                      direction="column"
                      overflowY="scroll"
                      h="20vh"
                      className="categoryfilterScroll"
                    >
                      <Radio
                        value="1"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        18 KT Yellow
                      </Radio>
                      <Radio
                        value="2"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        18 KT White
                      </Radio>
                      <Radio
                        value="3"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        18 KT Rose
                      </Radio>
                      <Radio
                        value="4"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        18 KT Two Tone
                      </Radio>
                      <Radio
                        value="5"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        14 KT Yellow
                      </Radio>
                      <Radio
                        value="6"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        14 KT White
                      </Radio>
                      <Radio
                        value="7"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        14 KT Rose
                      </Radio>
                      <Radio
                        value="8"
                        border="1px solid #4f3267"
                        bgColor="#f6f3f9"
                      >
                        14 KT Two Tone
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
                <hr />
                <Button
                  w="100%"
                  p="7"
                  mt="5"
                  mb="1"
                  bgColor="gray.300"
                  borderRadius="10"
                  color="blue.700"
                >
                  Show More Filters
                </Button>
              </Box>
            </Box>
          </Stack>

          <Spacer />
          {/* ..............................Product-Box...................... */}
          <Stack h="900" w="75%" overflowY="scroll" className="productScroll">
            <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
              {data &&
                data.map((item) => {
                  return (
                    <Link to={`/singleproduct/${item._id}`}>
                      <Box
                        textAlign="left"
                        lineHeight="0.5"
                        p="3"
                        color="#4f3267"
                        fontWeight="500"
                        _hover={{
                          border: "green",
                          cursor: "pointer",
                        }}
                      >
                        <Stack>
                          <Box className="imageBox">
                            <Image
                              borderRadius="10"
                              boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                              boxSize="20rem"
                              src={item.imageSrc}
                            />
                          </Box>

                          <Flex>
                            <Text mr="3"> {item.discountedPrice} </Text>

                            <Text
                              textDecoration="line-through"
                              color="black"
                              fontWeight="400"
                              mt="1"
                              fontSize="12"
                            >
                              {item.originalPrice}
                            </Text>
                            <Spacer />
                            <CopyIcon color="#8863fb;" />
                            <Text
                              fontSize="12"
                              fontWeight="400"
                              color="#8863fb"
                              textDecoration="underline"
                            >
                              View Similar
                            </Text>
                          </Flex>

                          <Text>
                            Check delivery date <ChevronRightIcon />
                          </Text>
                          <Flex>
                            <Text color="#9d9fa4" fontWeight="400">
                              {" "}
                              {item.brand}{" "}
                            </Text>
                            <Spacer />
                            <Button
                              p="0"
                              m="0"
                              bg="white"
                              mt="-3"
                              onClick={() =>
                                toast({
                                  title: "Added to Wishlist",
                                  status: "success",
                                  duration: 3000,
                                  isClosable: true,
                                  position: "bottom",
                                })
                              }
                            >
                              <AiFillHeart className="heart" />
                            </Button>
                          </Flex>

                          {/* ------------------ two Buttons ----------------------- */}

                          <Flex>
                            <Button
                              colorScheme="#4f3267"
                              variant="outline"
                              fontSize="13"
                              borderRadius="10"
                            >
                              <Icon as={FaLaptopHouse} boxSize="5" />
                              Book Try at Home
                            </Button>

                            <Spacer />
                            <Button
                              colorScheme="green"
                              variant="outline"
                              fontSize="13"
                              borderRadius="10"
                            >
                              <Icon as={FcVideoCall} boxSize="5" /> Live Video
                              Call
                            </Button>
                          </Flex>
                        </Stack>
                      </Box>
                    </Link>
                  );
                })}
            </SimpleGrid>
            <Flex justifyContent="center" alignItems="center" mt="5" mb="5">
              <Button
                onClick={() => {
                  if (page === 1) {
                    setPage(5);
                  } else {
                    setPage((page) => page - 1);
                  }
                }}
              >
                Prev
              </Button>
              <Button bg="none" _hover={{ bg: "none" }}>
                {page}
              </Button>
              <Button
                onClick={() => {
                  if (page === 5) {
                    setPage(1);
                  } else {
                    setPage((page) => page + 1);
                  }
                }}
              >
                Next
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>

      <Footer />
    </>
  );
};

export { NewArrival };
