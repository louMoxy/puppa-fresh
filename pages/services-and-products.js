import {Container, Typography, Grid, Box} from "@mui/material";
import {Service, ServiceVariant} from "../components/Services";
import Image from "next/image";
import img1 from '../public/services1.jpg'
import img2 from '../public/services2.jpg'
import Masonry from '@mui/lab/Masonry'
import portfolio1 from '../public/portfolio/alvan-nee-brFsZ7qszSY-unsplash.jpg'
import portfolio2 from '../public/portfolio/artem-gavrysh-F6-U5fGAOik-unsplash.jpg'
import portfolio3 from '../public/portfolio/arthur-franklin-x1lkDL9HMjc-unsplash.jpg'
import portfolio4 from '../public/portfolio/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg'
import portfolio5 from '../public/portfolio/chino-rocha-GHV6YYbeImM-unsplash.jpg'
import portfolio6 from '../public/portfolio/erda-estremera-D1wiHCovGJ0-unsplash.jpg'
import portfolio7 from '../public/portfolio/jordan-nix-3_KYuMVl1Q8-unsplash.jpg'
import portfolio8 from '../public/portfolio/julio-bernal-pwRfs5IT6Go-unsplash.jpg'
import portfolio9 from '../public/portfolio/julio-bernal-qeY2QHAZfU0-unsplash.jpg'
import portfolio10 from '../public/portfolio/julio-bernal-WLGx0fKFSeI-unsplash.jpg'
import portfolio11 from '../public/portfolio/karsten-winegeart-T7Hxkhv23yY-unsplash.jpg'

export default function ServicesAndProducts() {
    return (
            <>
                <Banner />
                <Gallery/>
            </>
    )
}

const variants = [
    {
        "title": "Full Groom",
        "description": "Includes ear cleaning, teeth brushing and intimate hygiene trims",
        variants: [
            {title: "Small Breed", price: 55},
            {title: "Medium Breed", price: 60},
            {title: "Large Breed", price: 65},
            {title: "X-Large Breed", price: 70},
        ]
    },
    {
        "title": "Wash & Blow Dry",
        "description": "Includes Shampoo and conditioner using our own products",
        variants: [
            {title: "Short Coats", price: 30},
            {title: "Long coats", price: 40},
            {title: "X-Large dogs", price: 45},
        ]
    }
]

const services = [
    {
        "title": "Paws Perfect",
        "description": "Nail trim for well behaved dogs",
        "price": "£8"
    },
    {
        "title": "Eager Ears",
        "description": "Clean and trim around the ears",
        "price": "£10"
    }
]



const Banner = () => {
    return (
        <Container>
            <Grid container alignItems='center' mb={10}>
                <Grid item xs={12} md={4}>
                    <Typography variant='h3' mt={8} mb={4}>Services</Typography>
                    <ServiceVariant items={variants} />
                    <Service items={services} />
                </Grid>
                <Grid item md={8} pl={14} my={4}>
                    <Box borderRadius={9} boxShadow={3} sx={{ 'span': {borderRadius: 9}, width: '70%', marginLeft: 'auto' }}>
                        <Image
                            {...img1}
                                  placeholder="blur"
                            layout="responsive"
                            width={img1.width}
                            height={img1.height}
                        />
                    </Box>
                    <Box borderRadius={9} boxShadow={3} sx={{ 'span': {borderRadius: 9}, width: '60%', marginTop: -5 }}>
                        <Image
                            {...img2}
                                  placeholder="blur"
                            layout="responsive"
                            width={img2.width}
                            height={img2.height}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

const Gallery = () => {
    return (
        <Box bgcolor='primary.light' p={4}>
            <Container>
                <Typography variant='h3' mt={8} mb={4}>Some of our furry customers!</Typography>
                <Masonry columns={3} spacing={1}>
                    <Box>
                        <Image
                            {...portfolio1}
                                  placeholder="blur"
                            layout="responsive"
                            width={portfolio1.width}
                            height={portfolio1.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio2}
                                  placeholder="blur"
                            layout="responsive"
                            width={portfolio2.width}
                            height={portfolio2.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio3}
                                  placeholder="blur"
                            layout="responsive"
                            width={portfolio3.width}
                            height={portfolio3.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio4}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio4.width}
                            height={portfolio4.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio5}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio5.width}
                            height={portfolio5.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio6}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio6.width}
                            height={portfolio6.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio7}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio7.width}
                            height={portfolio7.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio8}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio8.width}
                            height={portfolio8.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio9}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio9.width}
                            height={portfolio9.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio10}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio10.width}
                            height={portfolio10.height}
                        />
                    </Box>
                    <Box>
                        <Image
                            {...portfolio11}
                            placeholder="blur"
                            layout="responsive"
                            width={portfolio11.width}
                            height={portfolio11.height}
                        />
                    </Box>
                </Masonry>
            </Container>
        </Box>
    )
}
