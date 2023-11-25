import React from 'react'
import { useRouter } from 'next/router'
import { East } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const BlogCard3 = ({ featureImage, title, link }) => {
    const router = useRouter()
    return (
        <>
            <Card className='blogCard3'>
                <CardMedia component="img" image={featureImage} />
                <CardContent>
                    <Typography variant='h4' className='text-white mt-3'>{title}</Typography>
                    <Button className="text-white mt-3" onClick={() => router.push(link)}>Read More <East className='ms-3 text-white' /></Button>
                </CardContent>
            </Card>
        </>
    )
}

export default BlogCard3