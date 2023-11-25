import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Card, CardContent, Chip, Grid, Typography } from '@mui/material'

const VacancyCard1 = ({ title, team, jobType, workplaceType, salaryMin, salaryMax, link }) => {
    const router = useRouter()
    return (
        <>
            <Card className='vacancyCard'>
                <CardContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} sm={9}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} order={{ xs: 2, sm: 1 }}>
                                        <Typography variant='h3' className='text-white' gutterBottom>{title}</Typography>
                                        <Typography className='text-white'>{team} Team</Typography>
                                    </Grid>
                                    <Grid item xs={12} order={{ xs: 1, sm: 2 }}>
                                        <Box className="d-flex flex-wrap">
                                            <Box className="vacancyChip">
                                                <Typography>{jobType}</Typography>
                                            </Box>
                                            <Box className="vacancyChip mx-3">
                                                <Typography>{workplaceType}</Typography>
                                            </Box>
                                            <Box className="vacancyChip mt-3 mt-sm-0">
                                                <Typography>₹{salaryMin} - ₹{salaryMax}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box>
                                <Button className='primary-contained-button-1' onClick={() => router.push(`/career/${link}`)} sx={{
                                    width: '15rem',
                                    '@media only screen and (max-width: 600px)': {
                                        width: "100%"
                                    }
                                }}>Apply</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default VacancyCard1