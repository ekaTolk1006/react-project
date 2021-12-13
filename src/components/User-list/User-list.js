import React, { useEffect, useState } from 'react';
import './User.css'

export const UserList = () => {
    var a = [
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            id: 9,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
            avatar: "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            id: 10,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
            avatar: "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            id: 11,
            email: "george.edwards@reqres.in",
            first_name: "George",
            last_name: "Edwards",
            avatar: "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            id: 12,
            email: "rachel.howell@reqres.in",
            first_name: "Rachel",
            last_name: "Howell",
            avatar: "https://reqres.in/img/faces/12-image.jpg"
        }

];
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
  
    useEffect(()=>{
      fetchRequest();
    }, []);

   return(
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Email</th>
        <th scope="col">Last name</th>
        <th scope="col">First name</th>
      </tr>
    </thead>
    <tbody>
    {response?.data?.map((item, index) => (
      <tr>
        <th scope="row">{index + 1}</th>
        <th key={item.id}>{item.email}</th>
        <th key={item.id}>{item.last_name}</th>
        <th key={item.id}>{item.first_name}</th>
        
        </tr>
      ))}
     </tbody>
  </table>
    )
        
      }