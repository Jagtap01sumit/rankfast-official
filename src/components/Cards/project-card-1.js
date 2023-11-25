import React from 'react'
import Link from 'next/link';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import Styles from '@/styles/ProjectCard-1.module.css'

const ProjectCard1 = ({ logo, name, growth, link }) => {
    return (
        <>
            <Card className={Styles.projectCard} style={{ position: "relative", height: "100%" }}>
                <CardContent style={{ position: 'relative', overflow: 'visible' }}>
                    <img src="/images/hover-project.svg" className={Styles.projectHover} />
                    {/* <Box>
                        <img loading='lazy' src={logo} alt={name} className='img-fluid' style={{ width: "20%" }} />
                    </Box> */}
                    <Box mt={1}>
                        <Box>
                            <Typography variant='h3' className='text-white'>{name}</Typography>
                            <Typography className={Styles.prjDesc}>{growth}%</Typography>
                            <Typography className={`text-white ${Styles.desc2}`}>Growth</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default ProjectCard1