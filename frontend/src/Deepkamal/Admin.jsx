import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Updateproduct from "./updatenewproduct";
import Footer from "../Components/Footer";

export default function Admin() {
  const [category, setCategory] = useState("");
  const [imageSrc, setimageSrc] = useState("");
  const [discountedPrice, setdiscountedPrice] = useState("");
  const [originalPrice, setoriginalPrice] = useState("");
  const [brand, SetBrand] = useState("");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [dprice, setdDprice] = useState("");
  const [oprice, setOprice] = useState("");

  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((e) => setData(e.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  // console.log(data);



  const addData = () => {
    const payload = {
      category,
      imageSrc,
      discountedPrice,
      originalPrice,
      brand,
      dprice,
      oprice
    };

    console.log(payload);
    fetch("http://localhost:8080/products/add", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("admintoken")
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        alert("Successfully added");
        window.location.reload();
      })

      .catch((err) => console.log(err));
  };

  function deleteproduct(id) {
    console.log(id);
    axios
      .delete(`http://localhost:8080/products/delete/${id}`)
      .then((e) => console.log("deleted successfully"))
      .catch((e) => console.log(e));
    alert("Item Removed");
    window.location.reload();
  }

  function handleupdate(id) {
    console.log(id);
   
    localStorage.setItem("id",id);
   navigate("/update");
  }

  return (
<>
<Navbar/>

    <div
      style={{
        display: "flex",
        margin: "auto",
        paddingTop:"200px",
        width:"80%"
      }}
    >
     
      <Box w={"30%"}>
        <Box>
          <Input
            placeholder="Category"
            size="lg"
            w="100%"
            mt="150px"
            onChange={(e) => setCategory(e.target.value)}
          />
        </Box>

        <Box>
          <Input
            placeholder="Image_url"
            size="lg"
            w="100%"
            onChange={(e) => setimageSrc(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Discounted Price"
            size="lg"
            w="100%"
            onChange={(e) => setdiscountedPrice(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="OriginalPrice"
            size="lg"
            w="100%"
            onChange={(e) => setoriginalPrice(e.target.value)}
          />
        </Box>

        <Box>
          <Input
            placeholder="Brand"
            size="lg"
            w="100%"
            onChange={(e) => SetBrand(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Discount Price"
            size="lg"
            w="100%"
            onChange={(e) => setdDprice(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Original Price"
            size="lg"
            w="100%"
            onChange={(e) => setOprice(e.target.value)}
          />
        </Box>

        <Button mt={"20px"} colorScheme="blue" w="100%" onClick={addData}>
          Add Product
        </Button>

      </Box>

      <Box border={"1px solid black"} ml={"5%"} w={"60%"}>
        <Text fontSize={"30px"} textAlign={"center"}>
          {" "}
          Total Product : {data.length + count}
        </Text>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={3}
          // border={"1px solid black"}
          ml={"12%"}
        >
          {data.map((dataa, i) => (
            <Box
              w={"70%"}
              border={"1px solid black"}
              mt={"50px"}
              borderRadius={"15px"}
            >
              {" "}
              <Box w={"100%"} h={"240px"}>
                <Image
                  borderTopRightRadius={"15px"}
                  borderTopLeftRadius={"15px"}
                  w={"100%"}
                  h={"240px"}
                  src={dataa.imageSrc}
                />
              </Box>
              <Text mt={"10px"} fontWeight={500} fontSize={"18px"}>
                {dataa.brand}
              </Text>
              <Text fontWeight={400} fontSize={"15px"}>
                {" "}
                Price : {dataa.originalPrice}/-
              </Text>
              <Box display={"flex"} gap={"5"} justifyContent={"center"}>
                <Button
                  mt={"10px"}
                  width={"40%"}
                  mb={"20px"}
                  colorScheme={"red"}
                  onClick={() => {
                    deleteproduct(dataa._id);
                  }}
                >
                  Remove
                </Button>
                <Button
                  mt={"10px"}
                  width={"40%"}
                  mb={"20px"}
                  colorScheme={"green"}
                  onClick={() => {
                    handleupdate(dataa._id);
                  }}
                >
                  Edit Item
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
    <Footer/>
    </>
  );
}
