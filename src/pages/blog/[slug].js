import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '@/redux/action/postsActions'
import { Container, Typography } from '@mui/material'
import { Head, Recommended, SingleBlogBanner, SingleBlogContent, SingleMeta } from '@/sections'

const SingleBlog = () => {
    const { post } = useSelector(state => state.postsReducer)
    const router = useRouter()
    const dispatch = useDispatch()

    const { slug } = router.query

    useEffect(() => {
        dispatch(fetchPost(slug))
    }, [slug])

    useEffect(() => {
        if (post === undefined) {
            dispatch(fetchPost(slug))
        }
    }, [slug])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <>
            {
                post === null && <>
                    <Head
                        title="Loading..."
                        description=""
                        robots="noindex"
                    />
                    <section>
                        <Container maxWidth="xxl" sx={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                            <Typography className='text-white'>Loading...</Typography>
                        </Container>
                    </section></>
            }
            {
                post !== null && post !== undefined && post !== "" && Object.keys(post).length > 0 && <>
                    <Head
                        title={post.yoast_head_json && post.yoast_head_json !== null && post.yoast_head_json !== undefined && post.yoast_head_json !== "" && Object.keys(post.yoast_head_json).length > 0 && post.yoast_head_json.title && post.yoast_head_json.title !== null && post.yoast_head_json.title !== undefined && post.yoast_head_json.title !== "" && post.yoast_head_json.title}
                        description={post.yoast_head_json && post.yoast_head_json !== null && post.yoast_head_json !== undefined && post.yoast_head_json !== "" && Object.keys(post.yoast_head_json).length > 0 && post.yoast_head_json.description && post.yoast_head_json.description !== null && post.yoast_head_json.description !== undefined && post.yoast_head_json.description !== "" && post.yoast_head_json.description}
                        robots="index"
                        canonical={`/blog/${post.slug && post.slug !== null && post.slug !== undefined && post.slug !== "" && post.slug}`}
                    />
                    <SingleBlogBanner bg={post._embedded && post._embedded !== null && post._embedded !== undefined && post._embedded !== "" && Object.keys(post._embedded).length > 0 && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'] !== null && post._embedded['wp:featuredmedia'] !== undefined && post._embedded['wp:featuredmedia'] !== "" && post._embedded['wp:featuredmedia'].length > 0 && post._embedded['wp:featuredmedia'][0] && Object.keys(post._embedded['wp:featuredmedia'][0]).length > 0 && post._embedded['wp:featuredmedia'][0].source_url && post._embedded['wp:featuredmedia'][0].source_url !== null && post._embedded['wp:featuredmedia'][0].source_url !== undefined && post._embedded['wp:featuredmedia'][0].source_url !== "" && post._embedded['wp:featuredmedia'][0].source_url || `/images/single-blog.banner.jpg`} />
                    <SingleMeta category={post.categories && post.categories !== null && post.categories !== undefined && post.categories !== "" && post.categories.length > 0 && post.categories[0]} date={`${post.date.split('T')[0].split("-")[2]} ${months[Number(post.date.split('T')[0].split("-")[1] - 1)]}, ${post.date.split('T')[0].split("-")[0]}`} />
                    <SingleBlogContent title={post.title && post.title !== null && post.title !== undefined && post.title !== "" && Object.keys(post.title).length > 0 && post.title.rendered && post.title.rendered !== null && post.title.rendered !== undefined && post.title.rendered !== "" && post.title.rendered} author={post._embedded && post._embedded !== null && post._embedded !== undefined && post._embedded !== "" && Object.keys(post._embedded).length > 0 && post._embedded.author && post._embedded.author !== null && post._embedded.author !== undefined && post._embedded.author !== "" && post._embedded.author.length > 0 && post._embedded.author[0] && Object.keys(post._embedded.author[0]).length > 0 && post._embedded.author[0].name} content={post.content && post.content !== null && post.content !== undefined && post.content !== "" && Object.keys(post.content).length > 0 && post.content.rendered && post.content.rendered !== null && post.content.rendered !== undefined && post.content.rendered !== "" && post.content.rendered} />
                    <Recommended />
                </>
            }
        </>
    )
}

export default SingleBlog