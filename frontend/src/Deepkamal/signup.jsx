import {  Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, Radio, RadioGroup, Stack, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] =useState('');


    const handlesubmit = () => {
        const payload = {
          name,
          email,
          password,
          number,
          gender
        
        };
        console.log(payload);
        // fetch("https://tame-pear-puppy-boot.cyclic.app/users/register", {
        //   method: "POST",
        //   body: JSON.stringify(payload),
        //   headers: { "Content-type": "application/json" },
        // })
        //   .then((response) => response.json())
        //   .then((response) => console.log(response))
        //   .catch((err) => console.log(err));
      };

    const handleInputChange_email = (e) => setEmail(e.target.value);
    const handleInputChange_password = (e) => setPassword(e.target.value);
const handlechange_number=(e)=>setNumber(e.target.value);
const handlechange_name=(e)=>setName(e.target.value);
// const handlechange_gender=(e)=>setGender(e.target.value);
    const isError_Email = email === ''  
    const isError_Name = name === ''
    const isError_password = password=== ""
    const isError_number = number ===""

    const navigate=useNavigate();
  
    return (
        <>
        <Tabs style={{width:"340px",margin:"auto"}}>
        <Container mb={4}>
        <Text >Sign Up with CaratLane</Text>
        <hr  style={{width:"80px" ,margin:"auto",  borderColor: '#985098',}}/>
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
 {/* mobile number */}
      <FormControl isInvalid={isError_number}>
        <FormLabel> Mobile Number</FormLabel>
        <Input type='number'  value={number} onChange={handlechange_number} />
        {!isError_number ? (
          <FormHelperText>
            
          </FormHelperText>
        ) : (
          <FormErrorMessage>Enter Mobile Number.</FormErrorMessage>
        )}
      </FormControl>
{/* enter email */}

      <FormControl isInvalid={isError_Email}>
        <FormLabel>Enter Email</FormLabel>
        <Input type='email' value={email} onChange={handleInputChange_email} />
        {!isError_Email ? (
          <FormHelperText>
            
          </FormHelperText>
        ) : (
          <FormErrorMessage>Enter a valid Email ID.</FormErrorMessage>
        )}
      </FormControl>

{/* enter name */}
      <FormControl isInvalid={isError_Name}>
        <FormLabel>Enter Name</FormLabel>
        <Input type='text' value={name} onChange={handlechange_name} />
        {!isError_Name ? (
          <FormHelperText>
            
          </FormHelperText>
        ) : (
          <FormErrorMessage>Enter a Name.</FormErrorMessage>
        )}
      </FormControl>


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

      {/* //gender */}
      <RadioGroup mt={4}  onChange={setGender} value={gender}>
      <Stack direction='row'>
        <Radio value='Male'>Male</Radio>
        <Radio value='Female'>Female</Radio>
        <Radio value='I don’t want to specify'>I don’t want to specify</Radio>
      </Stack>
    </RadioGroup>
      
      <Button
            mt={8}
            colorScheme='pink'
            background={"#985098"}
          
            type='submit'
            style={{width:"100%"}}
            onClick={handlesubmit}
          >
             REGISTER TO CONTINUE
          </Button>
          {/* <Text mt={4}>OR</Text> */}

           <Text mt={8}> Already have an account? <a href="" onClick={()=>navigate("/login")} style={{color:"#985098"}} >LOG IN</a></Text>
           </Tabs>
      </>
      

    )
}

export default Signup

