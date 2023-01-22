
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
import truck from '../../Assests/truck.jpeg'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const toast = useToast()
  const navigate = useNavigate();
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
      toast({
        title: 'Paymnet Successfull',
        description: "Order Will Be Delivered Within 3-5 working days.",
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      navigate("/")
    } else {
      alert("Please Fill Your all Details");
    }
  };
  return (
    <div>
      <Box bg="black" h="5vh" w='100%'>
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
        lineHeight="60px" >
        <Heading fontSize="lg" ml='6%'>Delivery Mode</Heading>
        <Flex gap="3" ml='6%'>
          <input type="radio" checked name="drone" /> Deliver at the Shipping Address
          <input type="radio" name="drone" /> Pick up from a CaratLane Store
        </Flex>
        <Heading fontSize="lg" ml='6%'>Shipping Address</Heading>
        <Box display='grid' m='auto'  gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: '1fr 0.7fr' }}>
          <Flex gap="5" display='grid' m={{ sm: 'auto', md: 'none', lg: 'none' }}  w={{ sm: '80%' }} >
            <Box lineHeight="60px">
              <Input
                type="text"
                value={first}
                placeholder="First Name *"
                required
                onChange={(e) => setFirst(e.target.value)}
                m='auto'
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
                type='text'
                w={{ sm: '62%', md: '75%', lg: '100%' }}
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
                type="text"
                value={pin}
                placeholder="Pincode / Zip Code *"
                required
                onChange={(e) => setPin(e.target.value)}
              />
              <Input
                type="text"
                value={mobile}
                placeholder="Mobile Number *"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </Box>
          </Flex>

          <Flex gap="5" m="auto">
            <Box lineHeight="60px" w="80%" m="auto" >
              <Image src={logo} alt="logo_image" w={150} m='auto' />
              <Flex border="1px solid black" gap="3" justifyContent='space-evenly'>
                <input
                  name="ok"
                  type="radio"
                  value="yes"
                  checked={selected === "yes"}
                  onChange={handleChange}
                />
                <Text fontWeight="bold">Cash on Delivery</Text>
                <Image
                  w="30%"
                  src={truck}
                />
              </Flex>
              <Flex border="1px solid black" gap="3" justifyContent='space-evenly'>
                <input
                  name="ok"
                  type="radio"
                  value="No"
                  checked={selected === "No"}
                  onChange={handleChange}
                />
                <Text fontWeight="bold">Pay with Paytm</Text>
                <Image
                  w="30%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" p='15px'
                />
              </Flex>
              <Flex border="1px solid black" justifyContent='space-evenly'>
                <input
                  name="ok"
                  type="radio"
                  value="yo"
                  checked={selected === "yo"}
                  onChange={handleChange}

                />
                <Text fontWeight="bold">Pay by RazorPay</Text>
                <Image src="https://alidropship.com/wp-content/uploads/2017/09/paypal-logo.png" w='30%' p='20px' />
              </Flex>
              <Flex border="1px solid black" justifyContent='space-evenly'>
                <input
                  name="ok"
                  type="radio"
                  value="yo"
                  checked={selected === "yo"}
                  onChange={handleChange}

                />
                <Text fontWeight="bold">Pay by UPI</Text>
                <Image src="https://www.vectorlogo.zone/logos/upi/upi-ar21.png" w='30%' ml='40px' />
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

        </Box>

        {/* <Button bg="#cd59e9" colorScheme="purple" onClick={handleSubmit}>
            Continue to Payment Method
          </Button> */}

      </Box>
      <CartFooter />
    </div>
  );
};


export default Payment;















