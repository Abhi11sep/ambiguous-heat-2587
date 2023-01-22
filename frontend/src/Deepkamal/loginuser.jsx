import { Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { useToast } from '@chakra-ui/react';

const Loginuser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()

  const handlesubmit = () => {

    const payload = {
      email,
      password
    };
    console.log(payload);

    fetch("https://rich-plum-lemming-cape.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.token)
        toast({
          title: 'login Successfully',
          description: "Now you can Start Shopping",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate("/")
      })
      .catch((err) => console.log(err));

  };

  const handleInputChange = (e) => setEmail(e.target.value)
  const handleInputChange_password = (e) => setPassword(e.target.value)
  const isError_Email = email === ''
  const isError_password = password === ""

  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar /> */}
      <Container mb={4}>
        <Text >Login to CaratLane</Text>
        <hr style={{ width: "80px", margin: "auto", borderColor: '#985098', }} />
      </Container>
      <Container>
        <Box display={"flex"} gap="40px" marginBottom={"20px"}>
          <Button className="button">
            <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" />
            <Text>Facebook</Text>
          </Button>
          <Button className="button">
            <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
            <Text>Google</Text>
          </Button>
        </Box>
      </Container>
      {/* //email */}
      <FormControl isInvalid={isError_Email}>
        <FormLabel>Enter Mobile Number or Email</FormLabel>
        <Input type='email' value={email} onChange={handleInputChange} />
        {!isError_Email ? (
          <FormHelperText>

          </FormHelperText>
        ) : (
          <FormErrorMessage>Enter a valid Email ID or Mobile Number.</FormErrorMessage>
        )}
      </FormControl>
      {/* password */}
      <FormControl isInvalid={isError_password}>
        <FormLabel>Enter your Password</FormLabel>
        <Input type='password' value={password} onChange={handleInputChange_password} />
        {!isError_password ? (
          <FormHelperText>

          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>

      <Button
        mt={4}
        colorScheme='pink'
        background={"#985098"}

        type='submit'
        style={{ width: "100%" }}
        onClick={handlesubmit}
      >
        CONTINUE
      </Button>
      <Text mt={4}>OR</Text>

      <Text mt={4}> New to CaratLane? <a href="" onClick={() => navigate("/Signup")} style={{ color: "#985098" }} >Create an Account</a></Text>

    </>


  )
}

export default Loginuser