import { Share } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const SingleBlogContent = ({ title, author, content }) => {
    return (
        <>
            <section id='content'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={9}>
                                        <Box>
                                            <Typography variant='h1' className='text-white' gutterBottom>{title}</Typography>
                                            <Typography gutterBottom>By. {author}</Typography>
                                            <Typography dangerouslySetInnerHTML={{ __html: content }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Button className="teritory-outlined-button-1" fullWidth>Share <Share className='ms-3' /></Button>
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

export default SingleBlogContent