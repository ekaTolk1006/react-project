import React, { useState } from "react";
import {Button, Form} from  "react-bootstrap";
import { useNavigate } from 'react-router-dom'
export const Login = () => {

   const  [password,setPassword] = useState('') 
   const  [email,setEmail] = useState('') 
   const navigate = useNavigate()

    const handleChangePass = (e) =>{
        const {name, value} = e.target
        setPassword( value)

    }
    const handleChangeEmail = (e) =>{
        const {name, value} = e.target
        setEmail(value)

    }

     const handleSubmit = async(e) =>{
         e.preventDefault()
        const data = await fetch('https://reqres.in/api/register', {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email}),
          }
          
          ).then(e => e.json())
        if(data?.token){
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.id);
            navigate('/profile')
        }
    }

    const [response, setData] = useState('');
  
    const fetchRequest = async() => {
     await fetch('https://reqres.in/api/users?page=2')
     .then(a => a.json())
     .then(
          (a) =>{
            console.log(a);
              setData(a)
          }
      )
    
      
    }
  return(
        <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required onChange = {handleChangeEmail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required onChange = {handleChangePass}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onSubmit ={handleSubmit} variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    )
}