import {Button} from "@mui/material";

export const BookButton = ({color = 'primary'}) => {
    return (
        <Button variant="contained" color={color}>Book Your Appointment</Button>
    )
}
