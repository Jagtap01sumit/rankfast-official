import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { TrendingUp } from '@mui/icons-material'

const StackedCard = ({ title, list, btnText, btnLink }) => {
    const router = useRouter()
    return (
        <Card sx={{ height: "100%" }} className='shadow-lg stackCard1'>
            <CardContent className='p-0'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className='d-flex align-items-center'>
                        <Box>
                            <Typography variant='h2' gutterBottom className='text-white stackedTitle'>{title}</Typography>
                            <List>
                                {list.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem className='px-0'>
                                            <ListItemIcon><TrendingUp className='text-white' /></ListItemIcon>
                                            <ListItemText primary={item} className='text-white' />
                                        </ListItem>
                                        {index !== 2 && <Divider className='my-3 bg-white' />}
                                    </React.Fragment>
                                ))}
                            </List>
                            <Box mt={2}>
                                <Button
                                    className='teritory-contained-button-2'
                                    sx={{
                                        minWidth: "15rem",
                                        '@media only screen and (max-width: 600px)': {
                                            width: "100%"
                                        }
                                    }}
                                    onClick={() => router.push(btnLink)}
                                >
                                    {btnText}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src="/images/techny-launching-a-startup.gif" className='img-fluid' style={{ width: '67%' }} alt="Startup" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default StackedCard
