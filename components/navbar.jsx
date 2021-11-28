import {Container, Grid, Typography, Modal, Box } from '@mui/material'
import {Logo} from './Logo'
import Link from 'next/link'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {useRouter} from "next/router";
import {theme} from "../utils/muiTheme";
import {useEffect, useState} from "react";
import { MenuIcon } from "./MenuIcon";
import Slide from '@mui/material/Slide';
import {BookButton} from "./BookButton";

const pages = [
    {name: 'Services and Products', link: '/services-and-products'},
    {name: 'About Us', link: '/about-us'},
    {name: 'Get in Touch', link: '/contact-us'}
]

const underlineStyle = { width: '100%', height: 3, background: theme.palette.text.primary , borderRadius: 2, marginTop: 5, marginBottom: -8, opacity: 0.8 }
const modalOverlayStyle = { p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', bgcolor: 'third.main'}

const Navbar = () => {
    const {pathname} = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(false)
    }, [pathname])

    return (
        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item sx={{width: 150}}>
                    <Link href="/" passHref>
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <AnimateSharedLayout transition={{ duration: 0.5 }}>
                                {pages.map(({name, link}) => (
                                    <Grid item key={link}>
                                    <motion.div animate>
                                        <Link href={link} passHref>
                                            <Typography component='a' variant='subtitle1'>{name}</Typography>
                                        </Link>
                                        <AnimatePresence>
                                        {link === pathname && (
                                            <motion.div
                                                animate={{opacity: 1}}
                                                initial={{opacity: 0}}
                                                exit={{opacity: 0}}
                                                layoutId="underline"
                                                transition={{ type: "spring", bounce: 0.3, duration: 0.8}}
                                                style={underlineStyle}
                                            />
                                        )}
                                        </AnimatePresence>
                                    </motion.div>
                                    </Grid>
                                ))}
                            </AnimateSharedLayout>
                        <Grid item>
                            <BookButton color='third'/>
                        </Grid>
                    </Grid>
                    <Box onClick={() => setIsModalOpen(true)} sx={{ cursor: 'pointer', width: 35, display: { xs: 'block', md: 'none' }, color: 'text.primary' }}>
                        <MenuIcon />
                    </Box>
                        <Modal open={isModalOpen}>
                            <Slide direction="up" in={isModalOpen} mountOnEnter unmountOnExit>
                                <Box container sx={modalOverlayStyle}>
                                    <Box sx={{ position: 'absolute', top: 20, right: 20, color: 'white', fontSize: 30, cursor: 'pointer' }} onClick={() => setIsModalOpen(false)}>X</Box>
                                    <Box sx={{ width: 200}}>
                                        <Link href="/" passHref>
                                            <a>
                                                <Logo />
                                            </a>
                                        </Link>
                                    </Box>
                                    {pages.map(({name, link}) => (
                                        <Link href={link} passHref key={link}>
                                            <Typography component='a' variant='p' sx={{ py: 2, color: link === pathname ? 'secondary.main' : 'third.text' }}>{name}</Typography>
                                        </Link>
                                    ))}
                                    <Box sx={{ my: 2}}>
                                        <BookButton />
                                    </Box>
                                </Box>
                            </Slide>
                        </Modal>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar
