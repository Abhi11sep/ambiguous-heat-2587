import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Wishlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/wishlist", {
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
  }, []);
  console.log(data);
  const handledelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/wishlist/delete/${id}`, {
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log(response);
      });
  };

  const movetocart = (data) => {
    axios
      .get(`http://localhost:8080/products/${data}`)
      .then((e) => {
        console.log("e", e.data);
        wishlistmove(e.data);
      })
      .catch((e) => console.log(e));
  };
  const wishlistmove = (movedata) => {
    console.log("move", movedata);
    fetch("http://localhost:8080/carts/add", {
      method: "POST",
      body: JSON.stringify(movedata),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        handledelete(response.productId);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />

      <Flex w="50%" m="auto" pt="130px">
        <hr
          style={{
            color: "red",
            backgroundColor: "red",
            height: 5,
            margin: "3% 0% 3% 0%",
          }}
        />
        <Text fontWeight="bold" m="auto">
          Your Wishlist
        </Text>
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
            <Link to="/ring">
              <Button bg="#cd59e9" color="white" colorScheme="purple">
                Start Shopping
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          w="95%"
          m="auto"
          mt="3%"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap="5"
        >
          {data.map((ele) => {
            return (
              <Box
                lineHeight="50px"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              >
                <Image m="auto" src={ele.productId.imageSrc} />
                <Text>{ele.productId.brand}</Text>
                <Flex m="auto" w="50%" justifyContent="space-around">
                  <Text>{ele.productId.discountedPrice}</Text>
                  <strike>{ele.productId.originalPrice}</strike>
                </Flex>

                <Button
                  bg="#a45ff4"
                  color="white"
                  colorScheme="purple"
                  onClick={() => movetocart(ele.productId._id)}
                >
                  Move to cart
                </Button>
              </Box>
            );
          })}
        </Box>
      )}

      <Footer />
    </div>
  );
};

export default Wishlist;
