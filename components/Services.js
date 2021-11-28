import {Box, Grid, Typography} from "@mui/material";

export const Service = ({items}) => {
    return (
        <>
            {items.map(({title, description, price}, i) => (
                <Box py={1} key={i} >
                    {description && (
                        <Typography variant='subtitle1'>
                            {title}
                        </Typography>
                    )}
                    <Grid container spacing={2} alignItems={description ? 'flex-start' : 'center'} justifyContent='space-between' wrap='nowrap'>
                        <Grid item >
                            {!description && (
                                <Typography variant='subtitle1'>
                                    {title}
                                </Typography>
                            )}
                            <Typography variant='body2'>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ width: '100px', textAlign: 'right', mr: 6 }}>
                            <Typography variant='body2'>
                                {price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </>
    )
}

export const ServiceVariant = ({items}) => {
    return (
        <>
            {items.map(({title, description, variants}, i) => (
                <Box py={1} key={i} >
                    <Typography variant='subtitle1'>
                        {title}
                    </Typography>
                    <Typography variant='body2' mb={2}>
                        {description}
                    </Typography>
                    {variants.map(({title, price}) => (
                        <Grid container key={title}>
                            <Grid item flex={1}>
                                <Typography variant='overline'>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ width: '100px', textAlign: 'right', mr: 6 }}>
                                <Typography variant='body2'>
                                    £{price}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            ))}
        </>
    )
}
