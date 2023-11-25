import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const AuthorBox1 = ({ avatar, name, designation }) => {
    return (
        <>
            <Box className="authorBox1">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <img src={avatar} className='img-fluid' />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h4'>{name}</Typography>
                        <Typography>{designation}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AuthorBox1