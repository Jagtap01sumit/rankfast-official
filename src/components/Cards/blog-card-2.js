import React from 'react'
import { useRouter } from 'next/router'
import { East } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'

const BlogCard2 = ({ featureImage, title, excerpt, index, link }) => {
    const router = useRouter()
    return (
        <>
            <Card className='blogCard2 d-flex flex-column flex-sm-row'>
                <CardMedia component="img" image={featureImage} className='img-fluid' />
                <CardContent>
                    <Typography variant='h4' className='text-white mt-3 mt-sm-0' gutterBottom>{title.split(" ").slice(0, 4).join(" ")}{title.split(" ").length > 4 && ' ...'}</Typography>
                    <Typography className='text-white' dangerouslySetInnerHTML={{ __html: excerpt.split(" ").slice(0, 18).join(" ") }} />
                    <Button className='text-white' onClick={() => router.push(link)}>Read More <East className='ms-3 text-white' /></Button>
                </CardContent>
            </Card>
            {index !== 2 && <Divider className='bg-white mt-3' />}
        </>
    )
}

export default BlogCard2