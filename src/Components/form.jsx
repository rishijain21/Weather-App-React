import { Box , InputBase , Button,styled} from "@mui/material";
import React from "react";

import {useState} from "react" 


import { getWeather } from "../services/api";

// with the help of usestate we can store the data 

const Container = styled(Box)({

    background : ' #445A6F',
    padding : 10,

})

const Input = styled(InputBase)({
    color : '#FFF',
    marginRight : 20,
    fontSize : 18



})

const GetButton = styled(Button)({
    background : '#e67e22',

})



const Form = ({setResult})=>{

    const [data, setData] = useState({city: '', country : ''})

const handleChange = (e) =>{

    // console.log(e.target.name,e.target.value);
     setData({...data,[e.target.name]: e.target.value})
     

}

const GetWeatherInfo = async () =>{
   let response =  await getWeather(data.city,data.country);
   setResult(response);
}

    return (
        <Container>
            <Input
            
            placeholder="City"
            onChange={ (e)=> handleChange(e) }
            name = "city"
            />
            
            
            <Input
            placeholder="Country"
            onChange={ (e)=> handleChange(e) }
            name = "country"
            />

            <GetButton
            
            variant="contained"

            onClick={()=>GetWeatherInfo()}


            >Get Weather</GetButton>
            
            </Container>
    )
}


export default Form;