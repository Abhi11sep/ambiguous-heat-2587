import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import {
    SiVisa,
    SiMastercard,
    SiPaypal,
    SiAmericanexpress,
  } from "react-icons/si";

const CartFooter = () => {
  return (
    <div>
      <Flex position="sticky" h="10vh" w="100%" bottom="0px">
        <Box p="1.5%">
          <Text>
            Contact Us: +91-44-42935000 (Helpline) | contactus@caratlane.com
          </Text>
        </Box>
        <Spacer />
        <Flex p="1.5%" gap="10">
          <SiVisa size="35" />
          <SiMastercard size="35" />
          <SiPaypal size="35" />
          <SiAmericanexpress size="35" />
        </Flex>
      </Flex>
    </div>
  );
};

export default CartFooter;
