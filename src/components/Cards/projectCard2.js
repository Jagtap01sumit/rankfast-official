import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Portabletext } from '..'

const ProjectCard2 = ({ logo, content }) => {
    return (
        <>
            <Card className='projectCard2'>
                <CardContent sx={{ position: 'relative', height: "100%" }}>
                    <img src="/images/hover-project.svg" className='img-fluid hoverImage' />
                    <Box>
                        <Box className="logoContainer w-100 d-flex justify-content-center">
                            <img src={logo} className='img-fluid ' style={{ width:"55%" }} />
                        </Box>
                        <Box mb={8}>
                            <Typography   class>{content}</Typography>
                        </Box>
                        <Box mt={2} sx={{ position: 'absolute', bottom: "1rem", left: "1rem", right: "1rem" }}>
                            <Button fullWidth className='primary-contained-button-1'>View Portfolio</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default ProjectCard2