import React, { useEffect, useState } from "react";
import { Box, Container, Image, Select, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";

const NewArrival = () => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=50"
    )
      .then((res) => setData(res.data.data))
      .catch((err) => alert(err));
  }, []);
  //console.log(data);

  const handleSorting = (e) => {
    const { value } = e.target;
    setChange(!change);
    if (value === "asc") {
      let asc = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData(asc);
    } else if (value === "des") {
      let des = data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData(des);
    } else if (value === "dis") {
      let dis = data.sort((a, b) => {
        return Math.max(a.discount - b.discount, b.discount - a.discount);
      });
      setSortData(dis);
    }
  };

  useEffect(() => {
    setData(sortData);
  }, [change]);

  return (
    <Container h="auto" p="-5" maxW="" >
      {/* -----------------------------------Poster-Box------------------- */}
      <Box w="100%">
        <Image
          objectFit="cover"
          alt=""
          src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Newin/05/Desktop_1920-x560_toplisting.jpg"
        />
        <Box
          border="2px solid brown"
          style={{
            position: "absolute",
            top: "10px",
            left: "4vh",
            transform: "translate(8%, 50%)",
            "font-size": "10px",
          }}
        >
          <Text style={{ cursor: "pointer", color: "rgb(163, 162, 162)" }}>
            HOME/
          </Text>
        </Box>
      </Box>
      {/* ----------------------------------Gradient-Box---------------------------- */}
      <Box
        h="auto"
        align="right"
        p="4"
        style={{
          "background-image":
            "linear-gradient(to right, rgb(233, 200, 138), rgb(255, 215, 222), #b191ed)",
        }}
      >
        {/* -----------------------------Sorting-Feature------------------------------- */}
        <Box w="15%" mr="5" bg="white">
          <Stack direction="horizontal" p="0.5" align="center">
            <Text fontSize="12px" fontWeight="450" width="50px">
              Sort By:
            </Text>

            <Select
              cursor="pointer"
              border="none"
              ml="-3"
              fontSize="13px"
              fontWeight="450"
              onChange={handleSorting}
            >
              <option value="">Select</option>
              <option value="asc">Price Low to High*</option>
              <option value="des">Price High to Low*</option>
              <option value="dis"> Discount </option>
              <option> Featured </option>
              <option> Popularity </option>
            </Select>
          </Stack>
        </Box>
      </Box>
      {/* ----------------------------------Product Detailings-------------- */}
      <Box border="5px solid brown">
        {/* <Box h='1000' w='20' border="5px solid brown">

        </Box> */}
        <Box>
        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
              {data &&
                data.map((item) => {
                  return (
                    // <Link to={}>
                    <Box borderRadius='7' boxShadow='xs' p='3' _hover={{ border: 'green', cursor: 'pointer', boxShadow: 'outline' }} >
                      <Stack >
                        <Image boxSize="16rem" src={item.image} />
                        <Text> {item.title} </Text>
                        <Text> {item.category} </Text>
                        <Text> ₹ {item.price} </Text>
                        <Text> {item.brand} </Text>
                      </Stack>
                    </Box>
                    // </Link>
                  );
                })}
            </SimpleGrid>
        </Box>
        
      </Box>
    </Container>
  );
};

export { NewArrival };
