import Link from 'next/link'
import React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import Styles from '@/styles/Service-Card-1.module.css'

const ServiceCard1 = ({ icon, link, serviceName, cls }) => {
    return (
        <>
            <Card className={`${Styles.card} ${Styles.cls}`}>
                <CardContent>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={1}>
                                {icon}
                            </Grid>
                            <Grid item xs={11} sm={11}>
                                <Typography variant='h3' className='text-white' gutterBottom>{serviceName}</Typography>
                                <Typography><Link href={link} className='text-primary-1'>Learn More</Link></Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default ServiceCard1