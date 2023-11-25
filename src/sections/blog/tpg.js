import BlogCard1 from '@/components/Cards/blog-card-1'
import BlogCard2 from '@/components/Cards/blog-card-2'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const TPG = ({ posts }) => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6}>
                                        <BlogCard1 post={posts.slice(0, 1)[0]} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Grid container spacing={2}>
                                                {
                                                    posts.slice(1, 4).map((post, index) => <Grid item xs={12} key={post.id}>
                                                        <BlogCard2 featureImage={post._embedded && post._embedded !== null && post._embedded !== undefined && post._embedded !== "" && Object.keys(post._embedded).length > 0 && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'] !== null && post._embedded['wp:featuredmedia'] !== undefined && post._embedded['wp:featuredmedia'] !== "" && post._embedded['wp:featuredmedia'].length > 0 && post._embedded['wp:featuredmedia'][0] && Object.keys(post._embedded['wp:featuredmedia'][0]).length > 0 && post._embedded['wp:featuredmedia'][0].source_url && post._embedded['wp:featuredmedia'][0].source_url !== null && post._embedded['wp:featuredmedia'][0].source_url !== undefined && post._embedded['wp:featuredmedia'][0].source_url !== "" && post._embedded['wp:featuredmedia'][0].source_url} title={post.title && post.title !== null && post.title !== undefined && post.title !== "" && Object.keys(post.title).length > 0 && post.title.rendered && post.title.rendered !== null && post.title.rendered !== undefined && post.title.rendered !== "" && post.title.rendered} excerpt={post.excerpt && post.excerpt !== null && post.excerpt !== undefined && post.excerpt !== "" && Object.keys(post.excerpt).length > 0 && post.excerpt.rendered && post.excerpt.rendered !== null && post.excerpt.rendered !== undefined && post.excerpt.rendered !== "" && post.excerpt.rendered} index={index} link={post.slug && post.slug !== null && post.slug !== undefined && post.slug !== "" && `/blog/${post.slug}`} />
                                                    </Grid>)
                                                }
                                            </Grid>
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

export default TPG