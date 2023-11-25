import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { CheckCircleTwoTone } from '@mui/icons-material'
import { Portabletext } from '..'

const PricingCard1 = ({ planName, list, desc, link, isGrow }) => {
    const router = useRouter()
    return (
        <>
            <Card className={`pricingCard1 ${isGrow ? 'grow shadow' : ''}`}>
                <CardContent>
                    <Box className="d-flex justify-content-center align-items-center">
                        <img src="/images/pricing.png" className='img-fluid lightning' />
                    </Box>
                    <Box mt={2}>
                        <Typography className='text-primary-1' variant='h4' align='center'>{planName} Plan</Typography>
                    </Box>
                    <Box mt={2} className="descBox">
                        {list && list.length > 0 && <List>
                            {
                                list && list.map(item => <ListItem key={item._key}>
                                    <ListItemIcon>
                                        <CheckCircleTwoTone className='text-primary-1' sx={{ fontSize: "1.5rem" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item?.listTitle ? <strong className='text-white'>{item.listTitle}</strong> : <span className="text-teritory-3">{item?.listText}</span>} secondary={item?.listTitle && item?.listText && <span className="text-teritory-3">{item?.listText}</span>} />
                                </ListItem>)
                            }
                        </List>
                        }
                        {
                            desc && desc !== null && desc !== undefined && desc !== "" && <Portabletext content={desc} />
                        }
                    </Box>
                    <Box mt={2} className="btnAction">
                        <Button className='primary-contained-button-1' onClick={() => router.push(link)} fullWidth>Get Started</Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default PricingCard1