import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const WhyWorkCard = ({ title, desc, img }) => {
    return (
        <>
            <Card className='whyCard'>
                <CardContent>
                    <Box className="d-flex justify-content-center">
                        <img src={img} className='img-fluid' />
                    </Box>
                    <Box mt={2}>
                        <Typography variant='h3' className='text-primary-2' gutterBottom align='center'>{title}</Typography>
                        <Typography align='center'>{desc}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default WhyWorkCard