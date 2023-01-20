import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Spacer,
    Text,
  } from "@chakra-ui/react";
import { BsBagPlusFill } from "react-icons/bs";

const Wishlist = () => {
  return (
    <div>
        <Box h="50vh" minHeight="calc(100vh - 70px)" lineHeight="50px" mt="3%">
        <Box>
          <Box w="10%" m="auto" p="1%">
            <BsBagPlusFill size="100" />
          </Box>
          <Heading>Uh Oh!</Heading>
          <Heading as="h2" size="10">Your Wishlist Seems to be Empty!</Heading>
          <Button bg="#cd59e9" color="white" colorScheme="purple">
            Start Shopping
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Wishlist