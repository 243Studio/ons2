import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AboutSection() {
  return (
    <Box sx={{ display:'flex', justifyContent:'right', alignItems:'center', height:'70vh', width:'100vw'}}>
        <Box sx={{width:'40%', paddingRight:'3%', color:'white'}}>

        <Typography variant="h2">about ONS</Typography>
        <p>대한민국 인재 서비스 기업의 새로운 지평을 열어온 제니엘은, 일하고 싶은 사람이 마음껏 일할 수 있는 행복한 사회 구현 이라는 비전을 바탕으로 미래를 위한 새로운 도전을 계속하고 있습니다.</p>
        <Box sx={{width:'100%', height:'5rem'}}>
        </Box>
        </Box>
    </Box>
  )
}
