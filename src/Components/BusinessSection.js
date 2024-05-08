import { Box, Typography } from '@mui/material'
import React from 'react'

export default function BusinessSection() {
  return (
    <Box sx={{
        width:'100vw', 
        height:'95vh', 
        backgroundColor:'white', 
        paddingY:'5%', 
        display:'flex', 
        flexDirection:'column',
        alignItems:'center',
        }}>
        <Typography variant="h2">BUSINESS</Typography>
        <p>제니엘의 다양한 사업분야를 소개합니다.</p>
        <Box sx={{ marginTop:'2rem', width:'90%', height:'70%', backgroundColor:'blue'}}>

        </Box>
    </Box>
  )
}
