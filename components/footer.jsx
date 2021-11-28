import {Container, Grid, Typography, Box } from '@mui/material'
import Link from "next/link";
import {Logo} from "./Logo";
import {theme} from "../utils/muiTheme";
import {Facebook, Instagram, Twitter} from "./icons";
import Image from '../public/footerBG.png'

const iconStyle = {
    width: 30,
    color: 'text.primary',
    transition: '0.4s',
    cursor: 'pointer',
    '&:hover': {
        color: 'secondary.main'
    }
}

const backgroundStyle = {
    backgroundImage: `url(${Image.src})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'150px top',
    p: 2
}

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'secondary.light'}}>
            <footer>
                <Container maxWidth="lg" sx={backgroundStyle}>
                    <Grid container justifyContent="space-between" alignItems="center" gap={2}>
                        <Grid item sx={{width: 200}}>
                            <Link href="/" passHref>
                                <a>
                                    <Logo mainColor={theme.palette.text.primary} secondaryColor={theme.palette.secondary.main}/>
                                </a>
                            </Link>
                        </Grid>
                        <Grid item sx={{ marginLeft: 'auto' }}>
                            <Grid container alignItems="flex-end" gap={2}>
                                <Grid item>
                                    <Grid container alignItems="center" gap={1}>
                                        <Grid item sx={iconStyle}>
                                            <Facebook/>
                                        </Grid>
                                        <Grid item sx={iconStyle}>
                                            <Instagram/>
                                        </Grid>
                                        <Grid item sx={iconStyle}>
                                            <Twitter/>
                                        </Grid>
                                    </Grid>
                                    <Typography variant='body1'>01392 000 000</Typography>
                                    <Typography variant='body1'>puppafresh@gmail.com</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>Puppa Fresh</Typography>
                                    <Typography variant='body1'>123 Road Avenue</Typography>
                                    <Typography variant='body1'>Exeter</Typography>
                                    <Typography variant='body1'>EX1 111</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </Box>
    )
}

export default Footer
