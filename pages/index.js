import {Box, Container, Grid, Typography, Button} from "@mui/material";
import {BookButton} from "../components/BookButton";
import Image from 'next/image'
import Dog from '../public/Homepage img.png'
import Shampoo from '../public/SHAMPOOPS.jpg'
import Dog1 from '../public/dog1.jpg'
import Dog2 from '../public/dog2.jpg'
import Dog3 from '../public/dog3.jpg'
import Dog4 from '../public/dog4.jpg'
import Dog5 from '../public/dog5.jpg'
import Dog6 from '../public/dog6.jpg'
import Pattern from '../public/white paws pattern-8.png'
import services from '../utils/servicesList.json'
import {Service} from "../components/Services";
import {PawPrint} from "../components/icons";
import {useState} from "react";
import {useRouter} from "next/router";
import {motion} from "framer-motion";

export default function Home() {
  return (
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >
            <Banner />
            <ServicesSection />
            <SocialSection />
      </motion.div>
  )
}

const Banner = () => {
  return (
      <Box sx={{ boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.25)', position: 'relative', zIndex: 5 }}>
          <Container maxWidth="lg" sx={{ p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center" spacing={2} wrap='wrap'>
              <Grid item sm={5}>
                  <Image
                            placeholder="blur"
                      {...Dog}
                      layout="responsive"
                      width={Dog.width}
                      height={Dog.height}
                  />
              </Grid>
              <Grid item sm={7}>
                  <Typography variant='h1' mb={4} color='secondary.main'>
                      Fleas, ticks and mites? <br/>
                      On your best pal? <br/>
                      Heck no!
                  </Typography>
                  <Typography variant='subtitle1' mb={3}>
                      Puppa Fresh’s all-natural formulations keeps pests at bay without any risk to your four-legged fave. Available to buy in the salon or online.
                  </Typography>
                  <BookButton />
              </Grid>
            </Grid>
          </Container>
      </Box>
  )
}

const ServicesSection = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/services-and-products')
    }
    return (
        <Box sx={{ position: 'relative', zIndex: 1 }} bgcolor='secondary.light'>
            <Grid container alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ maxWidth: { xs: 'none', md: 'sm' }, marginLeft: 'auto', pl: 4, py: 10, pr: 2 }} >
                            <Typography variant='h3'>
                                Our Services & Products
                            </Typography>
                            <Box pt={3}>
                                <Service items={services} />
                            </Box>
                            <Button onClick={handleClick} color='primary' variant='contained' sx={{ m: 6, float: 'right' }}>
                                See all services and products
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '-30px', height: 'max-content', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', borderRadius: '0px 0px 0px 10%', overflow: 'hidden', background: '#e3dac9', display: { xs: 'none', md: 'block' }}} >
                        <Image
                            placeholder="blur"
                            {...Shampoo}
                            width={Shampoo.width}
                            height={Shampoo.height}
                            layout="responsive"
                        />
                    </Grid>
                </Grid>
        </Box>
    )
}

const SocialSection = () => {
    const [reviewIndex, setReviewIndex] = useState(0)
    const reviews = [
        {
            text: 'Puppa Fresh was a fantastic experience for my little Fluff ball. He is 7 years now, and can be pretty grumpy especially when it comes to his paws, but he never minds a trip to the groomers  as they make sure a fuss over him. He loves it!',
            name: 'Tracey Jackson'
        },
        {
            text: 'I have been using Puppa Fresh for years, and they always get the cut perfect in only a couple of hours. Wouldn\'t go anywhere else',
            name: 'Jackie Connor'
        },
        {
            text: 'My Jack Russel hates having his nails done, but Joan is so patience with him and ignores his moans. She is the only one who can cut his nails',
            name: 'John Smith'
        }
    ]

    const handleClick = (i) => {
        setReviewIndex(i)
    }

    return (
        <Box bgcolor='#C7DDD9' py={6} sx={{ position: 'relative' }}>
            <Box sx={{ backgroundImage: `url('${Pattern.src}')`, opacity: 0.18, height: '100%', width: '100%', position: 'absolute', zIndex: 0, top: 0}} />
            <Container>
                <Grid container alignItems='flex-end' sx={{ position: 'relative'}} >
                    <Grid item xs={12} md={6}>
                        <Box bgcolor='white' borderRadius={3} boxShadow={2} p={4} m={5}>
                            <Typography variant='body1'>
                                {reviews[reviewIndex].text}
                            </Typography>
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography variant='caption' p={2}>
                                    {reviews[reviewIndex].name}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                {reviews.map((_, i) => (
                                    <PawPrint fill={i === reviewIndex ? '#61C1AF' : undefined} key={i} handleClick={() => handleClick(i)}/>
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center', mb: 5 }}>
                            <BookButton />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} p={4} mb={4}>
                        <Typography variant='h5' p={2} textAlign='right'>
                            Follow us at @PuppaFresh on Instagram
                        </Typography>
                        <Grid container>
                            <Grid item xs={4} p={1}>
                                <Image
                                          placeholder="blur"
                                    {...Dog1}
                                    width={Dog1.width}
                                    height={Dog1.height}
                                    layout="responsive"
                                />
                            </Grid>
                            <Grid item xs={4} p={1}>
                                <Image
                                          placeholder="blur"
                                    {...Dog2}
                                    width={Dog2.width}
                                    height={Dog2.height}
                                    layout="responsive"
                                />
                            </Grid>
                            <Grid item xs={4} p={1}>
                                <Image
                                          placeholder="blur"
                                    {...Dog3}
                                    width={Dog3.width}
                                    height={Dog3.height}
                                    layout="responsive"
                                />
                            </Grid>
                            <Grid item xs={4} p={1}>
                                <Image
                                          placeholder="blur"
                                    {...Dog4}
                                    width={Dog4.width}
                                    height={Dog4.height}
                                    layout="responsive"
                                />
                            </Grid>
                            <Grid item xs={4} p={1}>
                                <Image
                                    src={Dog5.src}
                                    width={Dog5.width}
                                    height={Dog5.height}
                                    layout="responsive"
                                />
                            </Grid>
                            <Grid item xs={4} p={1}>
                                <Image
                                    {...Dog6}
                                          placeholder="blur"
                                    width={Dog6.width}
                                    height={Dog6.height}
                                    layout="responsive"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
