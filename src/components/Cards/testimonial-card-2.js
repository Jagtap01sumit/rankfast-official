import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import AuthorBox1 from '../author-box/authorBox-1'

const TestimonialCard2 = ({ avatar, name, designation, feedback, quote1, quote2 }) => {
    return (
        <>
            <Card className='testimonialCard2'>
                <CardContent>
                    <Box>
                        <AuthorBox1 avatar={avatar} name={name} designation={designation} />
                        <Box mt={2}>
                            <img src={quote1 || '/images/quote-1-outlined.png'} className='img-fluid' />
                        </Box>
                        <Box px={2}>
                            <Typography>{feedback}...</Typography>
                        </Box>
                        <Box className="d-flex justify-content-end">
                            <img src={quote2 || '/images/quote-2-outlined.png'} className='img-fluid' />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default TestimonialCard2