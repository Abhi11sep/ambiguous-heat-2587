import {  Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Loginadmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate();
    const handlesubmit = () => {
      const payload = {
        
        email,
        password
        
      };
      console.log(payload);
      fetch("http://localhost:8080/admin/login ", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((response) =>{ console.log(response)
          localStorage.setItem("admintoken",response.token)
          navigate("/admin")
        })
        .catch((err) => console.log(err));
    };

    const handleInputChange = (e) => setEmail(e.target.value)
    const handleInputChange_password = (e) => setPassword(e.target.value)
    const isError_Email = email === ''
    const isError_password = password=== ""
  
    return (
        <>
         {/* <Navbar/> */}
         <Container mb={4}>
        <Text >Login to CaratLane</Text>
        <hr  style={{width:"80px" ,margin:"auto",  borderColor: '#985098',}}/>
        </Container>
        
      <FormControl isInvalid={isError_Email}>
        <FormLabel>Enter Mobile Number or Email</FormLabel>
        <Input type='email' value={email} onChange={handleInputChange} />
        {!isError_Email ? (
          <FormHelperText>
            
          </FormHelperText>
        ) : (
          <FormErrorMessage>Enter a valid Email ID or Mobile Number</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isError_password}>
        <FormLabel>Eneter your Password</FormLabel>
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
            style={{width:"100%"}}
            onClick={ handlesubmit}
          >
            Submit
          </Button>
      </>
    )
}

export default Loginadmin