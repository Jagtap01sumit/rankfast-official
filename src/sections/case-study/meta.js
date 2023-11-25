import { Facebook, FacebookOutlined, Instagram, LinkOutlined, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Meta = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Box className="d-flex">
                                            <Box mr={5}>
                                                <Typography gutterBottom>Written By</Typography>
                                                <Typography>Pranav Bajaj</Typography>
                                            </Box>
                                            <Box>
                                                <Typography gutterBottom>Published On</Typography>
                                                <Typography>February 21, 2023</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box className="d-flex justify-content-end">
                                            <List className='d-flex'>
                                                <ListItem>
                                                    <Link href="#">
                                                        <ListItemIcon>
                                                            <LinkOutlined className='text-white' />
                                                        </ListItemIcon>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link href="#">
                                                        <ListItemIcon>
                                                            <FacebookOutlined className='text-white' />
                                                        </ListItemIcon>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link href="#">
                                                        <ListItemIcon>
                                                            <Instagram className='text-white' />
                                                        </ListItemIcon>
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link href="#">
                                                        <ListItemIcon>
                                                            <Twitter className='text-white' />
                                                        </ListItemIcon>
                                                    </Link>
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Meta