import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, Grid, Typography } from '@mui/material'
import { fetchCategorioes } from '@/redux/action/postsActions'
import { CalendarToday } from '@mui/icons-material'

const SingleMeta = ({ category, date }) => {
    const [categoryName, setCategoryName] = useState("")
    const { categories } = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategorioes())
    }, [])

    useEffect(() => {
        if (categories) {
            const filteredCat = categories.filter(entries => entries.id === category)

            if (filteredCat && filteredCat !== null && filteredCat !== undefined && filteredCat !== "" && filteredCat.length > 0) {
                setCategoryName(filteredCat[0].name)
            }
        }
    })

    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={2} className="d-flex justify-content-between">
                                <Box p={2} className="meta-category bg-secondary-2 rounded-4">
                                    <Typography>{categoryName}</Typography>
                                </Box>
                                <Box p={2} className="meta-date rounded-4 border" sx={{ borderColor: 'var(--teritory-color-2)' }}>
                                    <Typography><CalendarToday className='me-3 text-white' />{date}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section >
        </>
    )
}

export default SingleMeta