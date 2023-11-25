import { Portabletext } from '@/components'
import { Circle, Share } from '@mui/icons-material'
import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

const JobDescription = ({ keyRole, skillReq, setOpen }) => {
    return (
        <>
            <section>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={9.5}>
                                        {
                                            keyRole && keyRole !== null && keyRole !== undefined && keyRole !== "" && Object.keys(keyRole).length > 0 && <Box>
                                                <Typography variant='h2' className='text-white'>About The Role</Typography>
                                                <Box mt={2}>
                                                    {
                                                        keyRole.content && keyRole.content !== null && keyRole.content !== undefined && keyRole.content !== "" && <Portabletext content={keyRole.content} />
                                                    }
                                                    {
                                                        keyRole.listItems && keyRole.listItems !== null && keyRole.listItems !== undefined && keyRole.listItems !== "" && keyRole.listItems.length > 0 && <List>
                                                            {
                                                                keyRole.listItems.map(item => <ListItem key={item?._key}>
                                                                    <ListItemIcon>
                                                                        <Circle className='text-white' sx={{ fontSize: "0.5rem" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item.listTitle && item.listTitle !== null && item.listTitle !== undefined && item.listTitle !== "" ? <strong className='text-white'>{item.listTitle}</strong> : item.listText && item.listText !== "" && item.listText !== null && item.listText !== undefined && <span className='text-white'>{item.listText}</span>} secondary={item.listTitle && item.listTitle !== null && item.listTitle !== undefined && item.listTitle !== "" && item.listText && item.listText !== "" && item.listText !== null && item.listText !== undefined && <span className='text-white'>{item.listText}</span>} />
                                                                </ListItem>)
                                                            }
                                                        </List>
                                                    }
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            skillReq && <Box mt={2}>
                                                <Typography variant='h2' className='text-white'>What you will need</Typography>
                                                <Box mt={2}>
                                                    <List>
                                                        {
                                                            skillReq.map((r, i) => <ListItem key={r}>
                                                                <ListItemIcon>
                                                                    <Circle className='text-white' sx={{ fontSize: "0.5rem" }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={r} className='text-white' />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={2.5} style={{ position: "relative" }}>
                                        <Box sx={{ position: "sticky", top: "12%" }}>
                                            <Button className='primary-contained-button-1 mb-3' fullWidth onClick={() => setOpen(true)}>Apply Now</Button>
                                            <Button className='teritory-outlined-button-1' fullWidth>Share <Share /></Button>
                                        </Box>
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

export default JobDescription