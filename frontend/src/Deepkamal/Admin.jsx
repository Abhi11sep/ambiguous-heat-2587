import { Box, Button, Grid, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [dprice, setDprice] = useState("");
  const [price, setPrice] = useState("");
  const [brand, SetBrand] = useState("");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((e) => setData(e.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(data);

  function addData() {
    setCount(data.length + 1);
    
    axios
      .post("http://localhost:8080/products/add", {
        category,
        url,
        price,
        dprice,
        brand,
      })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
    alert("Successfuly Complite");
    window.location.reload();
    setCategory(""); SetBrand(""); setUrl(""); setPrice(""); setDprice("")
  }

  function deleteproduct(id) {
    console.log(id)
    axios
      .delete(`http://localhost:8080/products/delete/${id}`)
      .then((e) => console.log("deleted successfully"))
      .catch((e) => console.log(e));
    alert("Item Removed");
    window.location.reload();
  }
  // console.log(data)
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "10%",
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
            onChange={(e) => setUrl(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Discounted Price"
            size="lg"
            w="100%"
            onChange={(e) => setDprice(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="OriginalPrice"
            size="lg"
            w="100%"
            onChange={(e) => setPrice(e.target.value)}
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
                >
                  Edit Item
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
