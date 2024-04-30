import { Box, Button, Typography } from '@mui/material'
import './Hero.css'
import React from 'react'

export default function Hero() {
  return (
    <Box className="hero-section">
        <Box sx={{height:'30%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant="h2" className="hero-title">THE BEST PARTNER FOR YOUR SUCCESS</Typography>
            <Button 
            variant="outlined" sx={{ 
                width:"max-content",
                border:'solid 2px white', 
                color:'white', 
                borderRadius:'0', 
                padding:'1.5rem 1rem',
                ':hover': {
                    border:'solid 2px white',
                    backgroundColor:'transparent',
                    color: 'white',}
                }}
                className="hero-button">Get Started</Button>
        </Box>
        <Button  className="scroll-down-button" variant='outlined' 
            sx={{
                display:'flex', 
                flexDirection:"column", 
                position:'absolute', 
                bottom:'10%', 
                border:"none",
                color:'white',
                ':hover': {
                    color: 'white',
                    border:"none",
                    backgroundColor:'transparent'
                    }}}>
            <Typography>
                Scroll down
            </Typography>
            <Box sx={{borderLeft:'solid 1px white', height:'0.5rem', width:'0.5rem', borderBottom:'solid 1px white', transform:'rotate(-45deg)'}}></Box>
        </Button>
    </Box>
  )
}
