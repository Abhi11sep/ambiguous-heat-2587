import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import React from "react";
import CartFooter from "./CartFooter";

const Payment = () => {
  return (
    <div>
      <Box bg="black" h="5vh">
        <Heading color="white" fontSize="xl">
          Delivery / Pickup Information
        </Heading>
      </Box>
      <Box textAlign="left" w="90%" m="auto" minHeight="calc(95vh - 70px)">
        <Heading fontSize="lg">Delivery Mode</Heading>
        <Flex gap="3">
          <input type="radio" /> Deliver at the Shipping Address
          <input type="radio" /> Pick up from a CaratLane Store
        </Flex>
        <Heading fontSize="lg">Shipping Address</Heading>
        <Flex w="50%" gap="5">
          <Box lineHeight="60px">
            <Input placeholder="First Name" required />
            <Input placeholder="Last Name" required />
            <Input placeholder="Additional Information (optional)" />
            <Input placeholder="City" required />
            <Select placeholder="Select State">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </Select>
          </Box>
          <Box lineHeight="60px">
            <Input placeholder="Street & House Number" required />
            <Input placeholder="Second Address (optional)" />
            <Input placeholder="Pincode / Zip Code" required />
            <Input placeholder="Mobile Number" required />
          </Box>
        </Flex>
        <Button bg="#cd59e9" colorScheme="purple">Continue to Payment Method</Button>
      </Box>
      <CartFooter/>
    </div>
  );
};

export default Payment;
