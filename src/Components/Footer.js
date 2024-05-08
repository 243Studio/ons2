import { Box, Button } from '@mui/material'
import './Footer.css'
import React from 'react'



let iconButtonStyle={width:'2rem', height:'2rem', backgroundColor:'white', marginRight:'1rem'}

export default function Footer() {
  return (
    <Box sx={{
        height:'40vh', 
        width:'100vw', 
        backgroundColor:'rgba(10,10,30,0.8)', 
        color:'white', 
        display:'flex', 
        flexDirection:'column',
        justifyContent:'start',
        alignItems:'center', 
        }}>
        <Box sx={{
            width:'100%', 
            height:'4rem',
            display:'flex',
            justifyContent:'center',
            borderBottom:'white solid 0.5px'}}>
            <Box sx={{display:'flex', flexDirection:'row', width:'65%', alignItems:'center', justifyContent:'space-between' }}>
                <Box>
                    <Button sx={{color:'white', border:'none', padding:'0.5rem 1rem'}}>Home</Button>
                </Box>
                <Box>
                    <Button sx={{color:'white', border:'none', padding:'0.5rem 1rem'}}>Home</Button>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            width:'70%', 
            marginY:'3rem',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'}}>
            <Box sx={{
                display:'flex',             
                justifyContent:'start',
                }}>
                <Box sx={{width:'6rem', height:'6em',  marginRight:'3rem', backgroundColor:'white'}}></Box>
                <Box sx={{margin:'0'}} className="footer-company-info">
                    <p>
                        (주)제니엘  |  서울시 서초구 효령로 402 제니엘빌딩  |  대표이사 박춘홍
                    </p>
                    <p>
                        사업자등록번호 : 214-81-98494  |  통신판매업신고 서초구01993호
                    </p>
                    <p>
                        직업정보제공사업 신고번호 서울청 제2018-9호
                    </p>
                    <p>
                        전화권유판매업신고번호 제2021-서울서초-0008호
                    </p>
                    <p>
                        대출성 금융상품판매대리.중개업자 등록번호 20-00000247
                    </p>
                    <p>
                        TEL 1588-1581  |  FAX 02-580-0104  |  E-mail zeniel@zeniel.co.kr
                    </p>
                    <p>
                        COPYRIGHT ⓒ ZENIEL. All Rights Reserved.
                    </p>
                </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row',  alignItems:'start'}}>
                <Box sx={iconButtonStyle} >

                </Box>
                <Box sx={iconButtonStyle} >

                </Box>
                <Box sx={iconButtonStyle} >

                </Box>
            </Box>

        </Box>
    </Box>
  )
}
