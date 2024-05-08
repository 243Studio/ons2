
import * as React from 'react';
import logo from '../assets/img/logo.svg';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import { pageNames } from '../utils/utils';
import { Link } from 'react-router-dom';


const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};


const buttonColor = "white";
function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
}


let pagesOptions = pageNames.map((pageName, index) => (
    <MenuItem
        key = {index}
        onClick={() => scrollToSection(pageName)}
        sx={{ py: '6px', pr: '8px' }}
      >
      <Typography variant="body2"  color={buttonColor}>
      {pageName}
      </Typography>
    </MenuItem>)
)

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          justifyContent: 'flex-start',
          maxWidth:'100vw',
          borderBottom: '1px solid white',
          backgroundColor: 'transparent'}}
      >
        <Container maxWidth="100vw" >
          <Toolbar
            variant="regular"
            sx={() => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              maxHeight: 40,
              maxWidth: '100vw',   
            })}
          >
            <Link
              style={{
                display: 'flex',
                flexGrow: 2,
              }}
            >
              <img
                src={
                  logo
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Link>
            <Box
              sx={{
                display: 'flex',
                flexGrow: 2,
              }}
            >
              <MenuItem
                    onClick={() => scrollToSection('dummy')}
                    sx={{ py: '6px', pr: '8px' }}
                >
                <Typography variant="body2"  color={buttonColor}>
                Dummy
                </Typography>
                </MenuItem>
                    <MenuItem
                        onClick={() => scrollToSection('dummy')}
                        sx={{ py: '6px', pr: '8px' }}
                    >
                    <Typography variant="body2"  color={buttonColor}>
                    Dummy
                    </Typography>
                    </MenuItem>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.2,
                alignItems: 'center',paddingLeft:'40px'
              }}
            >
                              {pagesOptions}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  {pagesOptions}
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default Navbar;