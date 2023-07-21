import Image1 from "./res.webp"
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Banner1 = () => {
    return (
        <div className="banner1">
            <img src={Image1} />
            <div className="banner1_btn">
                <h1>Welcome to our restaurant</h1>
                <Stack direction="row" spacing={2}>
                <Button variant="contained">Learn more</Button>
                </Stack>
            </div>
        </div>
    )
}
export default Banner1