import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, Grid, Typography } from '@mui/material'
import { fetchAllVacancies } from '@/redux/action/vacanciesAction'
import { VacancyCard1 } from '@/components'


const Vacancies = () => {
    const { vacancies } = useSelector(state => state.vacanciesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllVacancies())
    }, [])

    return (
        <>
            {
                vacancies && vacancies !== null && vacancies !== undefined && vacancies !== "" && vacancies.length > 0 && <section className='sectionMargin' id="vacancies">
                    <Container maxWidth="xxl">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={11}>
                                <Box py={2}>
                                    <Typography variant='h2' className='text-white'>Available Vacancies</Typography>
                                    <Box mt={6}>
                                        {
                                            vacancies.map(item => <Box mb={4} key={item._id}>
                                                <VacancyCard1 title={item?.jobTitle} team={item?.teamName} jobType={item?.jobType} workplaceType={item?.workplaceType} salaryMax={item?.salary?.maxSalary} salaryMin={item?.salary?.minSalary} link={item?.slug?.current} />
                                            </Box>)
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            }
        </>
    )
}

export default Vacancies