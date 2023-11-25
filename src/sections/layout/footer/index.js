import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Circle, Copyright, DoubleArrow, Instagram, LinkedIn, ExpandMore } from '@mui/icons-material'
import Link from 'next/link'
import Newsletter from '@/sections/common/newsletter'

const Footer = () => {

    const NavConfig = [
        {
            id: "menu-1", name: "About Us", path: "#", subMenu: [
                { id: "menu-1-sub-menu-1", name: "Our Journey", path: "/our-journey/" },
                { id: "menu-1-sub-menu-2", name: "Our Process", path: "/our-process/" },
                { id: "menu-1-sub-menu-3", name: "Our Portfolio", path: "/portfolio/" },
                // { id: "menu-1-sub-menu-4", name: "Case Study", path: "/case-study/" },
            ]
        },
        {
            id: 'menu-2', name: "SEO Services", path: "#", subMenu: [
                { id: 'menu-2-sub-menu-1', name: "Technical SEO", path: "/services/technical-seo/" },
                { id: 'menu-2-sub-menu-2', name: "SEO Audit", path: "/services/seo-audit/" },
                { id: 'menu-2-sub-menu-3', name: "Local SEO", path: "/services/local-seo/" },
                { id: 'menu-2-sub-menu-4', name: "SEO Consultation", path: "/services/seo-consultation-services/" },
                { id: 'menu-2-sub-menu-5', name: "Wordpress SEO", path: "/services/wordpress-seo/" },
                { id: 'menu-2-sub-menu-6', name: "YouTube SEO", path: "/services/youtube-seo/" },
                { id: 'menu-2-sub-menu-7', name: "International SEO", path: "/services/international-seo/" },
                { id: 'menu-2-sub-menu-8', name: "E-Commerce SEO", path: "/services/e-commerce-seo/" },
                { id: 'menu-2-sub-menu-9', name: "On Page SEO", path: "/services/on-page-seo/" },
                { id: 'menu-2-sub-menu-10', name: "Keyword Research and Analysis", path: "/services/keyword-research-analysis/" },
                { id: 'menu-2-sub-menu-11', name: "Off Page SEO", path: "/services/off-page-seo/" },
                { id: 'menu-2-sub-menu-12', name: "Topical Mapping Service", path: "/services/topical-mapping-service/" },
                { id: 'menu-2-sub-menu-13', name: "White Label SEO", path: "/services/white-label-seo/" },
                { id: 'menu-2-sub-menu-14', name: "National SEO", path: "/services/national-seo/" },
            ]
        },
        {
            id: "menu-3", name: "Other Services", path: "#", subMenu: [
                { id: "menu-3-sub-menu-1", name: "UI-UX", path: "/services/ui-ux/" },
                { id: "menu-3-sub-menu-2", name: "Web Development", path: "/services/web-development/" },
                { id: "menu-3-sub-menu-3", name: "Public Relation", path: "/services/public-relation/" },
                { id: "menu-3-sub-menu-4", name: "Linkedin Marketing", path: "/services/linkedin-marketing/" },
                { id: "menu-3-sub-menu-5", name: "Social Media Marketing", path: "/services/social-media-marketing/" },
                { id: "menu-3-sub-menu-6", name: "Content Marketing", path: "/services/content-marketing/" },
            ]
        },
        {
            id: 'menu-5', name: "Blog", path: "/blog/", subMenu: null
        },
        {
            id: 'menu-8', name: "Career", path: "/career/", subMenu: null
        },
        {
            id: 'menu-6', name: "Contact Us", path: "/contact-us/", subMenu: null
        },

        {
            id: 'menu-7', name: "Book Now", path: "https://calendly.com/rankfast-seo/call?month=2023-06", subMenu: null
        },
    ]

    return (
        <>
            <Newsletter />
            <footer>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box className="bg-secondary-2 bg-lg-transparent py-0 py-sm-4 px-0 px-sm-3" sx={{ borderRadius: '0.75rem' }}>
                                <Box mt={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={3}>
                                            <Box className="d-flex align-items-center align-items-sm-start flex-column mb-4 mb-sm-0">
                                                <img src="/images/logo.png" className='img-fluid logo' />
                                                <Typography>Not just an SEO Agency</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Box>
                                                <Box className="d-none d-lg-block">
                                                    <Typography variant='h3' className='text-white'>Quick Links</Typography>
                                                    <Box mt={2}>
                                                        <List>
                                                            <ListItem className='footerLink'>
                                                                <Link href="/">
                                                                    <ListItemText primary="Home" />
                                                                </Link>
                                                            </ListItem>
                                                            {/* <ListItem className='footerLink'>
                                                            <Link href="/our-process/">
                                                                <ListItemText primary="Our Process" />
                                                            </Link>
                                                        </ListItem> */}
                                                            <ListItem className='footerLink'>
                                                                <Link href="/portfolio/">
                                                                    <ListItemText primary="Portfolio" />
                                                                </Link>
                                                            </ListItem>
                                                            {/* <ListItem className='footerLink'>
                                                            <Link href="/blog/">
                                                                <ListItemText primary="Blog" />
                                                            </Link>
                                                        </ListItem> */}
                                                            <ListItem className='footerLink'>
                                                                <Link href="/case-study/">
                                                                    <ListItemText primary="Case Studies" />
                                                                </Link>
                                                            </ListItem>
                                                            <ListItem className='footerLink'>
                                                                <Link href="/blog/">
                                                                    <ListItemText primary="Blog" />
                                                                </Link>
                                                            </ListItem>
                                                            <ListItem className='footerLink'>
                                                                <Link href="/career/">
                                                                    <ListItemText primary="Career" />
                                                                </Link>
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                </Box>
                                                <Box mb={1} className="d-block d-lg-none">
                                                    <Accordion>
                                                        <AccordionSummary expandIcon={<ExpandMore className='text-white' />} aria-controls="panel1a-content" id="panel1a-header">
                                                            <Typography className='text-white' variant='h5'>Quick Links</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <List>
                                                                <ListItem className='footerLink'>
                                                                    <Link href="/">
                                                                        <ListItemText primary="Home" />
                                                                    </Link>
                                                                </ListItem>
                                                                <ListItem className='footerLink'>
                                                                    <Link href="/our-process/">
                                                                        <ListItemText primary="Our Process" />
                                                                    </Link>
                                                                </ListItem>
                                                                <ListItem className='footerLink'>
                                                                    <Link href="/portfolio/">
                                                                        <ListItemText primary="Portfolio" />
                                                                    </Link>
                                                                </ListItem>
                                                                <ListItem className='footerLink'>
                                                                    <Link href="/blog/">
                                                                        <ListItemText primary="Blog" />
                                                                    </Link>
                                                                </ListItem>
                                                                <ListItem className='footerLink'>
                                                                    <Link href="/career/">
                                                                        <ListItemText primary="Career" />
                                                                    </Link>
                                                                </ListItem>
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Box>
                                                <Box className="d-none d-lg-block">
                                                    <Typography variant='h3' className='text-white'>SEO Services</Typography>
                                                    <Box mt={2}>
                                                        <List>
                                                            {
                                                                NavConfig && NavConfig !== undefined && NavConfig !== null && NavConfig.length > 0 && NavConfig[1] && Object.keys(NavConfig[1]).length > 0 && NavConfig[1].subMenu && NavConfig[1].subMenu.length > 0 && NavConfig[1].subMenu.map(item => <ListItem key={item.id} className='footerLink'>
                                                                    <Link href={item.path}>
                                                                        <ListItemText primary={item.name} />
                                                                    </Link>
                                                                </ListItem>)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                                <Box mb={1} className="d-block d-lg-none">
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMore className='text-white' />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography variant='h5' className='text-white'>SEO Services</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <List>
                                                                {
                                                                    NavConfig && NavConfig !== undefined && NavConfig !== null && NavConfig.length > 0 && NavConfig[1] && Object.keys(NavConfig[1]).length > 0 && NavConfig[1].subMenu && NavConfig[1].subMenu.length > 0 && NavConfig[1].subMenu.map(item => <ListItem key={item.id} className='footerLink'>
                                                                        <Link href={item.path}>
                                                                            <ListItemText primary={item.name} />
                                                                        </Link>
                                                                    </ListItem>)
                                                                }
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Box>
                                                <Box className="d-none d-lg-block">
                                                    <Typography variant='h3' className='text-white'>Other Services</Typography>
                                                    <Box mt={2}>
                                                        <List>
                                                            {
                                                                NavConfig && NavConfig !== undefined && NavConfig !== null && NavConfig.length > 0 && NavConfig[2] && Object.keys(NavConfig[2]).length > 0 && NavConfig[2].subMenu && NavConfig[2].subMenu.length > 0 && NavConfig[2].subMenu.map(item => <ListItem key={item.id} className='footerLink'>
                                                                    <Link href={item.path}>
                                                                        <ListItemText primary={item.name} />
                                                                    </Link>
                                                                </ListItem>)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                                <Box mb={1} className="d-block d-lg-none">
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMore className='text-white' />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography variant='h5' className='text-white'>Other Services</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <List>
                                                                {
                                                                    NavConfig && NavConfig !== undefined && NavConfig !== null && NavConfig.length > 0 && NavConfig[2] && Object.keys(NavConfig[2]).length > 0 && NavConfig[2].subMenu && NavConfig[2].subMenu.length > 0 && NavConfig[2].subMenu.map(item => <ListItem key={item.id} className='footerLink'>
                                                                        <Link href={item.path}>
                                                                            <ListItemText primary={item.name} />
                                                                        </Link>
                                                                    </ListItem>)
                                                                }
                                                            </List>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={12} sm={6}>
                                                        <Box className="mt-2 mt-sm-0 mb-5 mb-sm-0">
                                                            <Button className='primary-contained-button-2' sx={{
                                                                padding: "0.625rem 1.75rem",
                                                                width: '100%',
                                                                '@media only screen and (min-width: 600px)': {
                                                                    width: "15.313rem"
                                                                }
                                                            }}>Contact Us <DoubleArrow /></Button>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <Box className="d-flex justify-content-center justify-content-sm-end">
                                                            <ul className='list-unstyled d-flex'>
                                                                <li>
                                                                    <IconButton sx={{ backgroundColor: "#212121" }} className='rounded-circle me-3'><LinkedIn className='text-white' /></IconButton>
                                                                </li>
                                                                <li>
                                                                    <IconButton sx={{ backgroundColor: "#212121" }} className='rounded-circle'><Instagram className='text-white' /></IconButton>
                                                                </li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider className='bg-white d-none d-sm-block' />
                                        </Grid>
                                        <Grid item xs={12} className='p-0 pb-1'>
                                            <Typography className='text-white mt-sm-3 mt-0' align='center'><Copyright /> All rights reserved for rankfast</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export default Footer