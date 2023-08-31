import { Box, Typography , styled } from "@mui/material";
import React from "react";

import {LocationOn , SettingsBrightness , Opacity, Brightness5,Brightness6, Dehaze, Cloud} from '@mui/icons-material';
const Row = styled(Typography)({

    padding : 10,
    fontSize:20,
    letterSpacing:2,
    '&> svg':{
        marginRight :10
    }

});
const Error = styled(Typography)({

    color: 'red',
    margin:50,
    padding :20

})

const Information = ({result})=>{
    return (
       result && Object.keys(result).length > 0 ?
       <Box style = {{margin:'30px 60px'}}>
        <Row> <LocationOn/> Location : {result.name} , {result.sys.country} </Row>
        <Row> <SettingsBrightness/> Temprature: {result.main.temp}</Row>
        <Row><Opacity/> Humidity : {result.main.humidity} </Row>
        <Row><Brightness5/> Sunrise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
        <Row><Brightness6/> Sunrise : {new Date (result.sys.sunset * 1000).toLocaleTimeString()}</Row>
        <Row><Dehaze/> Himidity: {result.weather[0].main}</Row>
        <Row><Cloud/> Cloud : {result.clouds.all} % </Row>

       </Box>
       : <Error>Please Enter The City Name</Error>
    )
}


export default Information;