import {Box, Grid, Typography} from "@mui/material";
import {BookButton} from "./BookButton";

export const Location = () => {
    return (
        <Box bgcolor='primary.light'>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box sx={{maxWidth: {xs: 'none', md: 'sm'}, marginLeft: 'auto', pl: 4, py: 10, pr: 2}}>
                        <Typography variant='body1' mb={2}>
                            Monday - Friday: 9am - 5pm <br/>
                            Saturday: 9am - 1pm <br/>
                        </Typography>
                        <Typography variant='body1' mb={2}>
                            Puppa Fresh <br/>
                            123 Road Avenue <br/>
                            Exeter<br/>
                            EX1 111
                        </Typography>
                        <Typography variant='body1' mb={5}>
                            01392 098 890<br/>
                            puppafresh@gmail.com<br/>
                        </Typography>
                        <BookButton/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} minHeight='400px' sx={{ padding: {xs: 5, sm: 0}}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20306.485259873778!2d-3.53137705!3d50.4911757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1638114370213!5m2!1sen!2suk"
                        width="100%" height="100%" style={{border: 0}} loading="lazy"></iframe>
                </Grid>
            </Grid>
        </Box>
    )
}
