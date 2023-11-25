import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { CareerBanner, CareerInfo, Head, JobDescription } from '@/sections'
import { fetchVacancy } from '@/redux/action/vacanciesAction'
import { Box, Button, Container, Dialog, DialogContent, Grid, IconButton, TextField, Typography } from '@mui/material'
import { HighlightOffRounded } from '@mui/icons-material'

const SingleJob = () => {
    const [open, setOpen] = useState(false)
    const { vacancy } = useSelector(state => state.vacanciesReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const { slug } = router.query

    useEffect(() => {
        dispatch(fetchVacancy(slug))
    }, [slug])

    const getSalary = (s) => {
        const salary = s.toString()
        if (salary.length === 6) {
            return `${salary.slice(0, 1)}.${salary.slice(1, 1)} L`
        } else if (salary.length === 5) {
            return `${salary.slice(0, 2)}k`
        } else if (salary.length === 4) {
            return `${salary.slice(0, 1)}k`
        }
    }

    return (
        <>
            {
                vacancy === null && <>
                    <Head
                        title="Loading..."
                        description=""
                        robots="noindex"
                        canonical="/career/"
                    />
                    <section>
                        <Container maxWidth="xxl" className='d-flex justify-content-center align-items-center' sx={{ height: "100vh" }}>
                            Loading...
                        </Container>
                    </section>
                </>
            }
            {
                vacancy !== null && vacancy !== undefined && vacancy !== "" && Object.keys(vacancy).length > 0 && <>
                    <Head
                        title={vacancy.metaTitle && vacancy.metaTitle !== null && vacancy.metaTitle !== undefined && vacancy.metaTitle !== "" && vacancy.metaTitle}
                        description={vacancy.metaDescription && vacancy.metaDescription !== null && vacancy.metaDescription !== undefined && vacancy.metaDescription !== "" && vacancy.metaDescription}
                        robots={vacancy.robots && vacancy.robots !== null && vacancy.robots !== undefined && vacancy.robots !== "" && vacancy.robots}
                        canonical={vacancy.slug && vacancy.slug !== null && vacancy.slug !== undefined && vacancy.slug !== "" && Object.keys(vacancy.slug).length > 0 && vacancy.slug.current && vacancy.slug.current !== null && vacancy.slug.current !== undefined && vacancy.slug.current !== "" && `/career/${vacancy.slug.current}/`}
                    />
                    {/* <CareerBanner /> */}
                    <CareerInfo title={vacancy.jobTitle && vacancy.jobTitle !== null && vacancy.jobTitle !== undefined && vacancy.jobTitle !== "" && vacancy.jobTitle} jobType={vacancy.jobType && vacancy.jobType !== null && vacancy.jobType !== undefined && vacancy.jobType !== "" && vacancy.jobType} location={vacancy.workplaceType && vacancy.workplaceType !== null && vacancy.workplaceType !== undefined && vacancy.workplaceType !== "" && vacancy.workplaceType} minSalary={vacancy.salary && vacancy.salary !== null && vacancy.salary !== undefined && vacancy.salary !== "" && Object.keys(vacancy.salary).length > 0 && vacancy.salary.minSalary && vacancy.salary.minSalary !== null && vacancy.salary.minSalary !== undefined && vacancy.salary.minSalary !== "" && vacancy.salary.minSalary && getSalary(vacancy.salary.minSalary)} maxSalary={vacancy.salary && vacancy.salary !== null && vacancy.salary !== undefined && vacancy.salary !== "" && Object.keys(vacancy.salary).length > 0 && vacancy.salary.maxSalary && vacancy.salary.maxSalary !== null && vacancy.salary.maxSalary !== undefined && vacancy.salary.maxSalary !== "" && vacancy.salary.maxSalary && getSalary(vacancy.salary.maxSalary)} />
                    <JobDescription keyRole={vacancy.keyRoleDescription && vacancy.keyRoleDescription !== null && vacancy.keyRoleDescription !== undefined && vacancy.keyRoleDescription !== "" && vacancy.keyRoleDescription.length > 0 && vacancy.keyRoleDescription[0]} skillReq={vacancy.skillsRequired && vacancy.skillsRequired !== null && vacancy.skillsRequired !== undefined && vacancy.skillsRequired !== "" && vacancy.skillsRequired.length > 0 && vacancy.skillsRequired} setOpen={setOpen} />
                    <Dialog maxWidth="sm" fullWidth open={open}>
                        <DialogContent className='bg-secondary-2' id="jobApp">
                            <Box pt={{ sm: 3, xs: 0 }} className="d-flex justify-content-between align-items-center bg-secondary-2 formTitle">
                                <Typography variant='h3' className='text-white' gutterBottom sx={{ fontFamily: 'Raleway, sans-serif' }}>Fill the application</Typography>
                                <IconButton onClick={() => setOpen(false)}><HighlightOffRounded className='text-white' /></IconButton>
                            </Box>
                            <Box mt={{ sm: 7, xs: 10 }} className="formContainer">
                                <form method='POST' action="https://formsubmit.co/ajax/6fbf0296c3ee2f674f94034ac8a6f5d2" encType="multipart/form-data">
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <input type="hidden" name="_subject" value={`Application For ${vacancy.jobTitle && vacancy.jobTitle}`} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <TextField type="text" label="First Name" variant='outlined' name="Firstname" fullWidth required />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <TextField type="text" label="Last Name" variant='outlined' name="Lastname" fullWidth required />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="email" label="Email" variant='outlined' name="Email" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="tel" label="Phone" variant='outlined' name="Phone" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="url" label="Share your cv URL (Google Drive URL)" variant='outlined' name="cv" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="text" multiline rows={4} label="Tell Us About You" variant='outlined' name="About" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <input type="hidden" name="_next" value="https://rankfast.co/career/" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <small className='text-white'>Note: Please upload the CV to your Google Drive and adjust the file's visibility settings to make it accessible to everyone.</small>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" className='primary-contained-button-1'>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>

                            </Box>
                        </DialogContent>
                    </Dialog>
                </>
            }
        </>
    )
}

export default SingleJob