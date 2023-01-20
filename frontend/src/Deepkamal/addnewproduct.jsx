import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export default function Updateproduct  () {
    const [category, setCategory] = useState("");
    const [imageSrc, setimageSrc] = useState("");
    const [discountedPrice, setdiscountedPrice] = useState("");
    const [originalPrice, setoriginalPrice] = useState("");
    const [brand, SetBrand] = useState("");

    const  handleupdate=(id)=> {
 console.log(id)
        
        const payload = {
            category,
            imageSrc,
            discountedPrice,
            originalPrice,
            brand,
          };
        console.log(id);
        axios
          .update(`http://localhost:8080/products/update/${id}`)
          .then((e) => console.log("update successfully"))
          .catch((e) => console.log(e));
        alert("updated successfully");
        window.location.reload();
      }

  return (
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

        <Button mt={"20px"} colorScheme="blue" w="100%" onClick={handleupdate}>
          Update Product
        </Button>
      </Box>
    </div>
  );
};


