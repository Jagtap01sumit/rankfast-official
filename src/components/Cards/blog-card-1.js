import React from 'react'
import { useRouter } from 'next/router'
import { East } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const BlogCard1 = ({ post }) => {
    const router = useRouter()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return (
        <>
            {
                post && post !== null && post !== undefined && post !== "" && Object.keys(post).length > 0 && <Card className='blogCard1'>
                    <Box>
                        <img src="/images/new-tag.svg" className='img-fluid newTag' />
                    </Box>
                    {post._embedded && post._embedded !== null && post._embedded !== undefined && post._embedded !== "" && Object.keys(post._embedded).length > 0 && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'] !== null && post._embedded['wp:featuredmedia'] !== undefined && post._embedded['wp:featuredmedia'] !== "" && post._embedded['wp:featuredmedia'].length > 0 && post._embedded['wp:featuredmedia'][0] && Object.keys(post._embedded['wp:featuredmedia'][0]).length > 0 && post._embedded['wp:featuredmedia'][0].source_url && post._embedded['wp:featuredmedia'][0].source_url !== null && post._embedded['wp:featuredmedia'][0].source_url !== undefined && post._embedded['wp:featuredmedia'][0].source_url !== "" && <CardMedia component="img" image={post._embedded['wp:featuredmedia'][0].source_url} />}
                    <CardContent className='mt-3'>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={9}>
                                    {
                                        post.title && post.title !== null && post.title !== undefined && post.title !== "" && Object.keys(post.title).length > 0 && post.title.rendered && post.title.rendered !== null && post.title.rendered !== undefined && post.title.rendered !== "" && <Typography variant='h4'>{post.title.rendered.split(" ").slice(0, 7).join(" ")}{post.title.rendered.split(" ").length > 7 && " ..."}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={3} className='d-flex justify-content-end'>
                                    {
                                        post.date && post.date !== null && post.date !== undefined && post.date !== "" && <Typography className='text-dark'>{post.date.split('T')[0].split("-")[2]} {months[Number(post.date.split('T')[0].split("-")[1] - 1)]}, {post.date.split('T')[0].split("-")[0]}</Typography>
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2}>
                            {
                                post.excerpt && post.excerpt !== null && post.excerpt !== undefined && post.excerpt !== "" && Object.keys(post.excerpt).length > 0 && post.excerpt.rendered && post.excerpt.rendered !== null && post.excerpt.rendered !== undefined && post.excerpt.rendered !== "" && <Typography className='text-dark' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            }
                            {
                                post.slug && post.slug !== null && post.slug !== undefined && post.slug !== "" && <Button className="teritory-contained-button-1" onClick={() => router.push(`/blog/${post.slug}`)}>Read More <East className='ms-3' /></Button>
                            }
                        </Box>
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default BlogCard1