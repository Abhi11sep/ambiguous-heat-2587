import {
  border,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useToast } from '@chakra-ui/react'


import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Singleproduct_page = () => {
  const toast = useToast()
  const navigate = useNavigate();
  const { _id } = useParams();
  // console.log(_id);

  const [data, setData] = useState("")

  useEffect(() => {
    axios
      .get(`https://rich-plum-lemming-cape.cyclic.app/products/${_id}`)
      .then((e) => {
        console.log("data")
        setData(e.data);
      })
      .catch((e) => console.log(e));
  }, [])



  const handlesubmit = () => {

    console.log(data);

    fetch("https://rich-plum-lemming-cape.cyclic.app/carts/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token")
      },

    })
      .then((response) => response.json())
      .then((response) => {
        toast({
          title: 'Product Added to Cart',
          position: 'top',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/cart")


      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div style={{ background: "#f9f9fa", paddingTop: "150px" }} >
        <Grid
          width={"90%"}
          style={{
            // border: "1px solid red",
            margin: "auto",
            display: "flex",
            gap: "80px",
            // background:"#f9f9fa"
          }}
        >
          <GridItem
            style={{
              //  border: "5px solid red",
              width: "40%",
            }}
          >
            <Box
              style={{
                // border:"2px solid red",
                margin: "auto",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={data.imageSrc}
                alt="Dan Abramov"
                style={{
                  objectFit: "cover",
                  margin: "auto",
                  width: "100%",
                  height: "100%",
                }}
              ></Image>
            </Box>
          </GridItem>

          <GridItem
            style={{
              //  border: "1px solid red",
              width: "60%",
            }}
          >
            <Grid display={"flex"}>
              <Box
                style={{
                  // border: "2px solid red",
                  width: "800px",
                  display: "flex",
                }}
              >
                <Text style={{}} fontSize="xl">
                  {data.brand}
                </Text>

                <Image
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "400px",
                    marginTop: "5px",
                    background: "#9064FA",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ_5nRD4xJhjVYigBxZipIn1lEbgDWq9Mvg&usqp=CAU"
                ></Image>
                <Image
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "10px",
                    marginTop: "0px",
                  }}
                  src="data:image/png;base64,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"
                ></Image>
              </Box>
            </Grid>
            <GridItem>
              <a href="" style={{ color: "#DE57E5", }}>
                product detailes
              </a>
            </GridItem>



            <GridItem style={{
              display: "flex",
              //  border:"2px solid red"
            }} marginTop={"40px"} gap="80px">
              <FormControl>
                <FormLabel fontSize="sm">Select Size</FormLabel>
                <Select border={"1px solid #9064fa"} borderRadius={"none"}>
                  <option>5 (44.8 mm)</option>
                  <option>6 (45.9 mm)</option>
                  <option>7 (45.9 mm)</option>
                  <option>4 (45.9 mm)</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Metal</FormLabel>
                <Select border={"1px solid #9064fa"} borderRadius={"none"}>
                  <option>18 KT White Gold</option>
                  <option>14 KT White Gold</option>
                  <option>18 KT White Rose</option>
                  <option>14 KT White Rose</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem style={{
              display: "flex",
              // border:"2px solid red"
            }} marginTop={"20px"} gap="80px">
              <FormControl>
                <FormLabel fontSize="sm">Diamond</FormLabel>
                <Select border={"1px solid #9064fa"} borderRadius={"none"}>
                  <option>IJ-SI</option>
                  <option>GH-VVS</option>
                  <option>GH-VVS</option>
                  <option>EF-VVS</option>

                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="sm">Check Delivery & Trial Date</FormLabel>

                <Select
                  placeholder="Pincode"
                  border={"1px solid #9064fa"}
                  borderRadius={"none"}
                ></Select>
              </FormControl>
            </GridItem>
            <GridItem style={{
              // border:"2px solid red",
              marginTop: "20px"
            }}>
              <FormControl >
                <Text fontSize={"30px"} fontWeight={"bold"} >
                  {data.discountedPrice}
                </Text>
              </FormControl>
            </GridItem>

            <GridItem display={"flex"} marginTop={"60px"} gap={"10px"}
            //  border="2px solid red"
            >
              <FormControl>
                <Button
                  style={{ padding: "0px 40px 0px 40px" }}
                  background={"#9064fa"}
                  onClick={handlesubmit}
                >
                  ADD TO CART
                </Button>
              </FormControl>
              <FormControl>
                <Button>FIND IN THE STORE</Button>
              </FormControl>
            </GridItem>
          </GridItem>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Singleproduct_page;
