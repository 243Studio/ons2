import { Box, Typography, Button } from '@mui/material'
import React from 'react'

export default function ContactSection() {
  return (
    <Box sx={{ width:'100vw', height:'40vh'}}>
        <Button sx={{marginLeft:'50%', width:'50%', height:'100%', backgroundColor:'blue', color:'white', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', position:'relative'}}>
            <Typography variant="h2">CONTACT US</Typography>
            <p style={{marginTop:'0'}}>함께 있어 더 큰 시너지를 발휘하는 제니엘 그룹, </p>
            <p style={{marginTop:'0'}}>함께 있어 더 큰 시너지를 발휘하는 제니엘 그룹, </p>
            <Box sx={{position:'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0,0.4)', zIndex:'-1'}}></Box>

        </Button>

    </Box>
  )
}
