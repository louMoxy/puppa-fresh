import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import img from '../public/aboutus.png'
import {Location} from "../components/Location";
import {motion} from "framer-motion";

export default function AboutUs() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Banner />
            <Location />
        </motion.div>
    )
}

const shadowStyle = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 10,
    left: -10,
    transition: '0.5s'
}

const shadowParent = {
    position: 'relative',
    '&:hover .shadow': {
        top: -20,
        left: 30
    }
}


const Banner = () => {
    return (
        <Container>
            <Grid container p={4} justifyContent='space-between' gap={1} alignItems='center' mb={10}>
                <Grid item md={5} px={4}>
                    <Box sx={{ borderRadius: '50%', ...shadowParent }} >
                        <Image
                            placeholder="blur"
                                  {...img}
                            layout="responsive"
                            width={img.width}
                            height={img.height}
                            style={{ borderRadius: '50%' }}
                        />
                        <Box bgcolor='secondary.main' className='shadow' sx={{...shadowStyle, borderRadius: '50%'}}/>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box bgcolor='white' borderRadius={9} p={4} sx={shadowParent}>
                        <Box bgcolor='primary.main' borderRadius={9} sx={shadowStyle} className='shadow'/>
                        <Typography variant='body1' mb={2}>
                            We are a small team of 3 devoted dog-mums! We have all been dog grooming for over 10+ years, and feel so lucky we get to give your pooches the treatment they deserve.
                        </Typography>
                        <Typography variant='body1'>
                            We are fully insured, with all our equipment being professionally cleaned and sterilised after every use. We are also fully qualified in First Aid for dogs.
                            Based in our lovely salon in Exeter, Devon we are always happy to have your pooch join us for a groom and we also sell our own pooch cleaning products!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}


