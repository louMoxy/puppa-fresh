import {Location} from "../components/Location";
import {Box, Button, Container, Grid, TextField, Tooltip} from "@mui/material";
import Image from "next/image";
import Dog from '../public/contactimg.png'
import stockImg from '../public/stockimg.jpg'
import {motion} from "framer-motion";

export default function ContactUs() {
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

const Banner = () => {
    return (
        <Container>
            <Grid container p={4} justifyContent='space-between' alignItems='center' mb={10}>
                <Grid item xs={12} md={5} px={2}>
                    <Box mb={2}>
                        <TextField label="Name" variant="standard" fullWidth />
                    </Box>
                    <Box mb={2}>
                        <TextField label="Email" variant="standard" fullWidth type='email'/>
                    </Box>
                    <Box mb={2}>
                        <TextField label="Number" variant="standard" fullWidth/>
                    </Box>
                    <Box mb={2}>
                        <TextField label="Message" variant="standard" multiline fullWidth/>
                    </Box>
                    <Tooltip title='This is a demo site, not an actual business'>
                        <Box mt={6}>
                            <Button disabled variant="contained">Send</Button>
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item md={6} xs={{display: { xs: 'none', md: 'inline' }}}>
                    <Box borderRadius={9} boxShadow={3} sx={{ 'span': {borderRadius: 9}, width: '80%', marginLeft: 'auto' }}>
                        <Image
                                  placeholder="blur"
                                  {...stockImg}
                            layout="responsive"
                            width={stockImg.width}
                            height={stockImg.height}
                        />
                    </Box>
                    <Box borderRadius={9} boxShadow={3} sx={{ 'span': {borderRadius: 9}, marginTop: -10, width: '40%' }}>
                        <Image
                                  placeholder="blur"
                                  {...Dog}
                            layout="responsive"
                            width={Dog.width}
                            height={Dog.height}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
