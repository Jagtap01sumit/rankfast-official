import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Marquee from "react-fast-marquee";
import { ProjectCard1 } from '@/components';

const BigProjects = () => {
    const projects = [
        { id: 'project-1', logo: '/images/byjus.png', projectName: 'Byjus', growth: 13, link: 'https://byjus.com/' },
        { id: 'project-2', logo: '/images/builderai.png', projectName: 'Builder AI', growth: 60, link: 'https://www.builder.ai/' },
        { id: 'project-3', logo: '/images/projects/project-3.jpeg', projectName: 'Pepper content', growth: 31, link: 'https://www.builder.ai/' },
    ];

    return (
        <section className="sectionMargin" id="bigP">
            <Container maxWidth="xl">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={11}>
                        <Box py={5}>
                            <Marquee>
                                {projects.map(project => (
                                    <ProjectCard1 key={project.id} logo={project.logo} name={project.projectName} growth={project.growth} link={project.link} />
                                ))}
                            </Marquee>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default BigProjects;
