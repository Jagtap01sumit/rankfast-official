import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Portabletext } from '..'

const StackedCard2 = ({ title, content, index }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Box mb={2}>
                                    <img src={`/images/num/${index + 1}.png`} className='img-fluid' style={{ width: "30%" }} />
                                </Box>
                                <Divider className='bg-white' />
                                <Box mt={2}>
                                    <Typography variant='h3' className='text-white mb-4' gutterBottom>
                                        {title}
                                    </Typography>
                                    <Portabletext content={content} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src="/images/Idea.png" className='img-fluid' />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default StackedCard2