import { fetchCategorioes, fetchPosts } from '@/redux/action/postsActions'
import { Head, TPG } from '@/sections'
import Article from '@/sections/blog/article'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Blog = () => {
    const { posts, categories } = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    console.log(categories)

    return (
        <>
            <Head
                title="RankFast Blog - Latest Digital Marketing Insights and Strategies"
                description="Stay up-to-date with the latest digital marketing trends and strategies through the RankFast blog. Our expert team shares valuable insights and tips to help you achieve success in SEO, PPC, social media marketing, and more. Visit us today and learn how to rank fast!"
                robots="index"
                canonical="/blog/"
            />
            <section id="blogHero">
                <Container maxWidth="xxl" style={{ height: "100%" }}>
                    <Grid container justifyContent="center" style={{ height: "100%" }}>
                        <Grid item xs={12} sm={11}>
                            <Box py={2} sx={{ height: "100%" }} className="d-flex flex-column justify-content-center" >
                                <Typography variant='h1' className='text-white'>Our Blogs</Typography>
                                <Typography className='text-white'>Secure your place at the best SEO Agency</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            {
                posts && posts !== null && posts !== undefined && posts !== "" && Object.keys(posts).length > 0 && posts.data && posts.data !== null && posts.data !== undefined && posts.data !== "" && posts.data.length > 0 && <>
                    <TPG posts={posts.data} />
                    <Article posts={posts} />
                </>
            }
        </>
    )
}

export default Blog