import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import CartFooter from "./CartFooter";
import logo from '../../Assests/logo.png';


const Payment = () => {



  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [selected, setSelected] = useState("yes");


  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };


  const handleSubmit = () => {
    console.log({ first, last, address, pin, city, mobile, state });
    if (
      first !== "" &&
      last !== "" &&
      address !== "" &&
      pin !== "" &&
      city !== "" &&
      mobile !== "" &&
      state !== ""
    ) {
      
    } else {
      alert("Please Fill Your all Details");
    }
  };
  return (
    <div>
      <Box bg="black" h="5vh">
        <Heading color="white" fontSize="xl">
          Delivery / Pickup Information
        </Heading>
      </Box>
      <Box
        textAlign="left"
        w="90%"
        m="auto"
        mt="3%"
        minHeight="calc(95vh - 70px)"
        lineHeight="60px"
      >
        <Heading fontSize="lg">Delivery Mode</Heading>
        <Flex gap="3">
          <input type="radio" name="drone" /> Deliver at the Shipping Address
          <input type="radio" name="drone" /> Pick up from a CaratLane Store
        </Flex>
        <Heading fontSize="lg">Shipping Address</Heading>
        <Flex>
          <Flex w="60%" gap="5" >
            <Box lineHeight="60px" > 
              <Input
                type="text"
                value={first}
                placeholder="First Name *"
                required
                onChange={(e) => setFirst(e.target.value)}
              />
              <Input
                type="text"
                value={last}
                placeholder="Last Name *"
                required
                onChange={(e) => setLast(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Additional Information (optional)"
              />
              <Input
                type="text"
                value={city}
                placeholder="City *"
                required
                onChange={(e) => setCity(e.target.value)}
              />
              <Select
                placeholder="Select State"
                onChange={(e) => setState(e.target.value)}
              >
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
              <Input
                type="text"
                value={address}
                placeholder="Street & House Number *"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input type="text" placeholder="Second Address (optional)" />
              <Input
                type="number"
                value={pin}
                placeholder="Pincode / Zip Code *"
                required
                onChange={(e) => setPin(e.target.value)}
              />
              <Input
                type="number"
                value={mobile}
                placeholder="Mobile Number *"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </Box>
          </Flex>
        
            <Flex w="40%" gap="5" m="auto" >
              <Box lineHeight="60px" w="80%" m="auto" >
              <Image src={logo} alt="logo_image" width={150}/>
                <Flex border="1px solid black" gap="3">
                  <input
                    name="ok"
                    type="radio"
                    value="yes"
                    checked={selected === "yes"}
                    onChange={handleChange}
                  />
                  <Text fontWeight="bold">Cash on Delivery</Text>
                  <Image
                    w="20%"
                    src="data:image/jpeg;base64,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"
                  />
                </Flex>
                <Flex border="1px solid black" gap="3">
                  <input
                    name="ok"
                    type="radio"
                    value="No"
                    checked={selected === "No"}
                    onChange={handleChange}
                  />
                  <Text fontWeight="bold">Pay with Paytm</Text>
                  <Image
                    w="20%"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
                  />
                </Flex>
                <Flex border="1px solid black">
                  <input
                    name="ok"
                    type="radio"
                    value="yo"
                    checked={selected === "yo"}
                    onChange={handleChange}
                  />
                  {/* <Text>Pay by RazorPay</Text> */}
                  <Image src="https://cdn.razorpay.com/static/assets/logo/payment.svg" />
                </Flex>
                <Button
                  bg="#cd59e9" w="100%"
                  colorScheme="purple"
                  onClick={handleSubmit}
                >
                  Place order
                </Button>
              </Box>
            </Flex>
         
        </Flex>
      
          <Button bg="#cd59e9" colorScheme="purple" onClick={handleSubmit}>
            Continue to Payment Method
          </Button>
      
      </Box>
      <CartFooter />
    </div>
  );
};


export default Payment;









