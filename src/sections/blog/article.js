import BlogCard3 from '@/components/Cards/blog-card-3'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const Article = ({ posts }) => {
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Typography variant='h2' className='text-white'>Articles</Typography>
                                <Divider className='bg-white mt-3' />
                                <Box mt={2}>
                                    <Grid container spacing={4}>
                                        {
                                            posts.data.slice(4).map(post => <Grid item xs={12} sm={6} md={4}>
                                                <BlogCard3 featureImage={post._embedded && post._embedded !== null && post._embedded !== undefined && post._embedded !== "" && Object.keys(post._embedded).length > 0 && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'] !== null && post._embedded['wp:featuredmedia'] !== undefined && post._embedded['wp:featuredmedia'] !== "" && post._embedded['wp:featuredmedia'].length > 0 && post._embedded['wp:featuredmedia'][0] && Object.keys(post._embedded['wp:featuredmedia'][0]).length > 0 && post._embedded['wp:featuredmedia'][0].source_url && post._embedded['wp:featuredmedia'][0].source_url !== null && post._embedded['wp:featuredmedia'][0].source_url !== undefined && post._embedded['wp:featuredmedia'][0].source_url !== "" && post._embedded['wp:featuredmedia'][0].source_url} title={post.title && post.title !== null && post.title !== undefined && post.title !== "" && Object.keys(post.title).length > 0 && post.title.rendered && post.title.rendered !== null && post.title.rendered !== undefined && post.title.rendered !== "" && post.title.rendered} link={post.slug && post.slug !== null && post.slug !== undefined && post.slug !== "" && `/blog/${post.slug}`} />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Article