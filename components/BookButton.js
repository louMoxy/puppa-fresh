import {Button, Modal, Box, Typography, TextField, InputLabel, Select, MenuItem, FormControl} from "@mui/material";
import {useState} from "react";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment'
import DateTimePicker from '@mui/lab/DateTimePicker';

export const BookButton = ({color = 'primary'}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [date, setDate] = useState()

    return (
        <>
        <Button variant="contained" color={color} onClick={() => setIsOpen(true)}>Book Your Appointment</Button>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Box bgcolor='white' sx={{
                    p: 4,
                    width: '100%',
                    maxWidth: 500,
                    top: '40%',
                    left: '50%',
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 4
                }}>
                    <Typography  variant="h5" component="h2" mb={3}>
                        Book an appointment
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Service</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Service"
                            sx={{ marginBottom: 4 }}
                        >
                            <MenuItem value={10}>Full Groom</MenuItem>
                            <MenuItem value={20}>Wash & Blow Dry</MenuItem>
                            <MenuItem value={30}>Paws Perfect</MenuItem>
                            <MenuItem value={40}>Eager Ears</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DateTimePicker
                                label="Select a date"
                                value={date}
                                onChange={(val) => setDate(val)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <Box my={2}>
                        <Typography variant='caption'>This is a demo site, not a real business, so we will not accept booking</Typography>
                    </Box>
                    <Button disabled variant='contained'>Book</Button>
                </Box>
            </Modal>
        </>
    )
}
