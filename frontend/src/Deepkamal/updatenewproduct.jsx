import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useToast } from '@chakra-ui/react';

export default function Updateproduct() {
  const toast = useToast()
  const [category, setCategory] = useState("");
  const [imageSrc, setimageSrc] = useState("");
  const [discountedPrice, setdiscountedPrice] = useState("");
  const [originalPrice, setoriginalPrice] = useState("");
  const [brand, SetBrand] = useState("");
  const [dprice, setdDprice] = useState("");
  const [oprice, setOprice] = useState("");

  const handleupdate = () => {
    let dataid = localStorage.getItem("id");

    const payload = {
      category,
      imageSrc,
      discountedPrice,
      originalPrice,
      brand,
      dprice,
      oprice,
    };

    fetch(`https://rich-plum-lemming-cape.cyclic.app/products/update/${dataid}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("admintoken"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        toast({
          title: 'Updated successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
      .catch((err) => console.log(err));

    alert("updated successfully");
  };

  return (
    <>
      <Navbar />
      <div>
        <Box w={"30%"} margin={"auto"}>
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

          <Button
            mt={"20px"}
            colorScheme="blue"
            w="100%"
            onClick={handleupdate}
          >
            Update Product
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
}
