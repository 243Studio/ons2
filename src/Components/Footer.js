import { Box, Button, Typography } from '@mui/material'
import './Footer.css'
import React from 'react'

import facebookIcon from "../assets/img/icons/facebook.png"
import instagramIcon from "../assets/img/icons/instagram.png"
import naverIcon from "../assets/img/icons/naverblog.png"
import logoWhite from "../assets/img/logo-white.png"
import { Link } from 'react-router-dom'



let iconButtonStyle={":hover":{cursor:'pointer'}, display:'flex', alignItems:'center', justifyContent:'center', padding:'0', backgroundColor:'white', marginRight:'1rem'}
let typoStyle = {fontSize:'0.7rem', color:'#b3b6bc'}
let linkStyle = {textDecoration:'none', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', padding:'0 0.5rem'}
export default function Footer() {
  return (
    <Box sx={{
        height:'40vh', 
        width:'100vw', 
        backgroundColor:'rgba(43,46,60,1)', 
        color:'white', 
        display:'flex',
        paddingBottom:'3rem', 
        flexDirection:'column',
        justifyContent:'start',
        alignItems:'center', 
        }}>
        <Box sx={{
            width:'100%', 
            height:'4rem',
            display:'flex',
            justifyContent:'center',
            borderBottom:'#3c4048 solid 0.1px'}}>
            <Box sx={{display:'flex', flexDirection:'row', width:'70%', alignItems:'center', justifyContent:'space-between', padding:'1rem 0rem' }}>
                <Box sx={{display:'flex'}}>
                    <Link to={'/PersonalData'} style={{...linkStyle, borderRight:'#b3b6bc solid 1px' }}>
                        <Typography  sx={typoStyle} variant="h7">
                            개인정보 취급방침 
                        </Typography>
                    </Link>
                    <Link style={{...linkStyle, borderRight:'#b3b6bc solid 1px'}}>
                        <Typography  sx={typoStyle} variant="h7">
                        사이버신문고  
                        </Typography>
                    </Link>
                    <Link style={{...linkStyle, borderRight:'#b3b6bc solid 1px'}}>
                        <Typography  sx={typoStyle} variant="h7">
                        사업문의 
                        </Typography>
                    </Link>
                    <Link style={linkStyle}>
                        <Typography  sx={typoStyle} variant="h7">
                        Contact Us
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Button sx={{color:'#b3b6bc', border:'none', padding:'0.5rem 1rem'}}>계열사 사이트</Button>
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
                <Box sx={{width:'9rem', height:'9em',  marginRight:'3rem'}}>
                    <img alt="logo" style={{width:'9rem', height:'auto'}} src={logoWhite}></img>
                    <Typography variant="h7" sx={{color:'white'}}>주식회사 오앤에스</Typography>
                </Box>
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
                        <img className="icon-img" src={naverIcon} alt="naverblog"/>
                </Box>
                <Box sx={iconButtonStyle} >
                <img className="icon-img" src={facebookIcon} alt="facebook"/>

                </Box>
                <Box sx={iconButtonStyle} >
                <img className="icon-img" src={instagramIcon} alt="instagram"/>
                </Box>
            </Box>

        </Box>
    </Box>
  )
}
