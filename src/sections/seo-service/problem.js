import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Styles from '@/styles/Problem.module.css'
import { Circle } from '@mui/icons-material'
import { Portabletext } from '@/components'

const Problem = ({ sectionHeading, content, list }) => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant='h2' className={`text-white ${Styles.heading}`} gutterBottom>{sectionHeading}</Typography>
                                        <Typography className='text-primary-1'>Technical SEO might sound like a complex maze</Typography>
                                        <Button className='primary-contained-button-1 mt-3 d-none d-sm-block'>Start Now !</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className='text-white'>
                                        <Portabletext content={content} />
                                        <Box mt={2} className="listProblem">
                                            {
                                                list && list !== null && list !== undefined && list !== "" && list.length > 0 && <List>
                                                    {list.map((item, index) => (
                                                        <React.Fragment key={item}>
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <Circle style={{ fontSize: "0.5rem" }} className='text-white' />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} className='text-white' />
                                                            </ListItem>
                                                            {index < list.length - 1 && <Divider className='bg-white' />}
                                                        </React.Fragment>
                                                    ))}
                                                </List>
                                            }
                                        </Box>
                                        <Button className='primary-contained-button-1 mt-3 d-block d-sm-none'>Start Now !</Button>
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

export default Problem