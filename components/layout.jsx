import Navbar from './navbar'
import Footer from './footer'
import Head from "next/head";
import {Container} from "@mui/material";
import {theme} from "../utils/muiTheme";
import {ThemeProvider} from '@mui/material'
import { motion } from "framer-motion";
import {useRouter} from "next/router";

const svgStyle = {
    width: '55%',
    height: 800,
    top: -50
}

const getConfig = (pathname) => {
    if(pathname === '/about-us') {
        return {
            x: 'calc(100% - 50px)',
            y: -250,
            path: 'M312.119 1032.5C550.847 1471.77 756.898 1523.29 830.082 1494.14C1570.67 1410.62 1357.09 829.125 1339.41 781L1339.17 780.336C1312.03 706.367 1309.04 519.232 1254.78 417.967C1200.53 316.702 990.956 291.377 892.954 291.372L706.278 284.326C475.421 350.684 73.3898 593.219 312.119 1032.5Z'
        }
    } else if (pathname === '/services-and-products') {
        return {
            x: '100%',
            y: -150,
            scale: 1.5,
            path: 'M312.156 903.659C491.871 1226.32 952.278 1676.16 1042.77 1619.21C1177.94 1534.14 1087.86 1357.11 1378.54 817.151C1452.48 679.822 1038.65 539.695 997.791 465.321C956.93 390.948 802.847 370.345 730.914 369.34L593.822 362.296C425.052 408.309 132.44 581.001 312.156 903.659Z'
        }
    }  else if (pathname === '/contact-us') {
        return {
            x: 'calc(100% - 250px)',
            y: -200,
            scale: 1.3,
            path: 'M312.119 1032.5C550.847 1471.77 756.898 1523.29 830.082 1494.14C1570.67 1410.62 1357.09 829.125 1339.41 781L1339.17 780.336C1312.03 706.367 1309.04 519.232 1254.78 417.967C1200.53 316.702 990.956 291.377 892.954 291.372L706.278 284.326C475.421 350.684 73.3898 593.219 312.119 1032.5Z'
        }
    }
    return {
        x: -200,
        y: -150,
        scale: 1.3,
        path: 'M312.119 1032.5C550.847 1471.77 756.898 1523.29 830.082 1494.14C1570.67 1410.62 1357.09 829.125 1339.41 781L1339.17 780.336C1312.03 706.367 1309.04 519.232 1254.78 417.967C1200.53 316.702 990.956 291.377 892.954 291.372L706.278 284.326C475.421 350.684 73.3898 593.219 312.119 1032.5Z'
    }
}

export default function Layout({ children }) {
    const {pathname} = useRouter()
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Puppa Fresh</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="stylesheet" href="https://use.typekit.net/kbe1tld.css" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ overflow: 'hidden', width: '100vw', minHeight: '100vh', position: 'absolute', zIndex: -1 }}>
                <Container sx={{ position: 'relative' }}>
                    <div style={{ width: '100%', minHeight: 800, position: 'absolute'}}>
                        <motion.svg
                            viewBox="0 0 1707 1702"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ opacity: 0, x: getConfig(pathname).x, y: getConfig(pathname).y, scale: getConfig(pathname).scale ?? 1 }}
                            transition={{ duration: 0.8, type: "tween"  }}
                            animate={{ x: getConfig(pathname).x, y: getConfig(pathname).y, scale: getConfig(pathname).scale ?? 1, opacity: 1}}
                            style={svgStyle}
                        >
                            <motion.path
                                animate={{ d: getConfig(pathname).path }}
                                d="M-183.211 487.375C-14.3375 798.114 131.42 834.556 183.19 813.935C707.07 754.854 555.987 343.513 543.483 309.47L543.31 309C524.114 256.675 522.002 124.298 483.619 52.6646C445.237 -18.9691 296.99 -36.884 227.664 -36.8872L95.6123 -41.8713C-67.693 5.06935 -352.085 176.635 -183.211 487.375Z"
                                fill="#F7C6A5"
                            />
                        </motion.svg>
                    </div>
                </Container>
            </div>
                <Navbar />
                <main>{children}</main>
                <Footer />
        </ThemeProvider>
    )
}
