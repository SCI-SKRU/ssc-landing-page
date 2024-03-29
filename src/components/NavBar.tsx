import { useState } from 'preact/hooks'
import { Link } from 'react-scroll'
import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link as MuiLink,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider } from '@mui/material/styles'

import theme from '../config/Theme'

const pages = ['STEM', 'SCICAMP', 'SCITEREST', 'HANDStoSCIENCE']

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: {
    currentTarget: HTMLElement | ((prevState: HTMLElement | null) => HTMLElement | null) | null
  }) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'grid' }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Sci&Tech SSC
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem>
                      <Typography textAlign="center">
                        <Link
                          onClick={handleCloseNavMenu}
                          to={page}
                          spy={true}
                          smooth={true}
                          duration={100}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <MuiLink href="https://lin.ee/zMoVhSI" color={'black'} underline="none">
                      <Typography textAlign="center">CONTACT</Typography>
                    </MuiLink>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Sci&Tech SSC
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to={page} spy={true} smooth={true} duration={100}>
                      {page}
                    </Link>
                  </Button>
                ))}
                <Button
                  href="https://lin.ee/zMoVhSI"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  CONTACT
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}
