import React, { useState } from 'react'
import { Head } from '@/sections'
import { CopyAll, ChevronRight } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Grid, InputLabel, TextField, Typography, IconButton, CircularProgress, Tab, } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@mui/lab'
import { toast } from 'react-toastify'
import Link from 'next/link'

const SEOMeta = () => {
    const [value, setValue] = useState('1')
    const [loading, setLoading] = useState(false)
    const [website, setWebsite] = useState("")
    const [effect, setEffect] = useState(false);
    const [data, setData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (website !== "" && website !== undefined && website !== null) {
            setLoading(true)
            try {
                const response = await fetch('/api/get-seo-meta', {
                    method: 'POST',
                    body: JSON.stringify({ website })
                })

                const { seoMeta } = await response.json();

                if (seoMeta) {
                    setData(seoMeta)
                    setLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        }

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Head metaTitle="SEO Meta Tool - Get Website Meta Data in One Click" metaDescription="Use our SEO Meta Tool to instantly fetch meta data from any website's homepage. Improve your online presence and search engine rankings with Rankfast, a top SEO agency providing customized solutions. Services include SEO, content marketing, link building, UI UX design, and more. Access free online courses through their search engine Coursenator for self-education" canonical="/tools/seo-meta-in-one-click/" />
            <section style={{ paddingTop: "5rem", marginBottom: '8rem' }} id="Tool">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10}>
                            <Box mt={5}>
                                <Typography variant='h1' align='center' ><span className='text-primary-2'>SEO Meta in</span> <span className='text-white'>One Click</span></Typography>
                            </Box>
                            <Box py={5}>
                                <Card className='shadow bg-secondary-2'>
                                    <CardContent>
                                        <form onSubmit={handleSubmit}>
                                            <Box>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={10}>
                                                        <TextField type='url' variant='outlined' label='Enter website URL' className='text-dark' fullWidth value={website} onChange={(e) => setWebsite(e.target.value)} required InputProps={{
                                                            style: { color: 'white' },
                                                        }}
                                                            InputLabelProps={{
                                                                style: { color: 'white' },
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={2}>
                                                        <Button type='submit' fullWidth className='primary-contained-button-1'>Get Data</Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </form>
                                        <Box mt={5}>
                                            {
                                                data == null && loading ? <><CircularProgress /><Typography className='fw-bold ms-3'>Loading...</Typography></> : data !== null && !loading ? <>
                                                    <Box className="table-responsive">
                                                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Title</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.title && data.title}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Meta Description</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.description && data.description}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Keywords</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.keywords && data.keywords}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>URL</th>
                                                                <td colSpan={7} className='seoMetaTable'>{website}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Canonical</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.canonical && data.canonical}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Robots Tag</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.robots && data.robots}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>Author</th>
                                                                <td colSpan={7} className='seoMetaTable'>{data && data.author && data.author}</td>
                                                            </tr>
                                                            <tr>
                                                                <th colspan={1} className='seoMetaTable'>H1</th>
                                                                <th colspan={1} className='seoMetaTable'>H2</th>
                                                                <th colspan={1} className='seoMetaTable'>H3</th>
                                                                <th colspan={1} className='seoMetaTable'>H4</th>
                                                                <th colspan={1} className='seoMetaTable'>H5</th>
                                                                <th colspan={1} className='seoMetaTable'>H6</th>
                                                                <th colspan={1} className='seoMetaTable'>Images</th>
                                                                <th colspan={1} className='seoMetaTable'>Links</th>
                                                            </tr>
                                                            <tr>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h1']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h2']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h3']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h4']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h5']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.headingCount && data.headingCount['h6']}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.images && data.images.length}</td>
                                                                <td className='seoMetaTable' colspan={1}>{data && data.links && data.links.length}</td>
                                                            </tr>
                                                        </table>
                                                    </Box>
                                                    <Box mt={5} sx={{ width: '100%', typography: 'body1' }}>
                                                        <TabContext value={value}>
                                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                                <TabList onChange={handleChange} >
                                                                    <Tab label="Headers" value="1" />
                                                                    <Tab label="Images" value="2" />
                                                                    <Tab label="Links" value="3" />
                                                                </TabList>
                                                            </Box>
                                                            <TabPanel value="1">
                                                                {
                                                                    data && data.headings && data.headings.length > 0 && data.headings.map((h, index) => <Typography key={`headings-${index}`}><strong>{`<${h.tag}>`}</strong> <span>{h.heading}</span></Typography>)
                                                                }
                                                            </TabPanel>
                                                            <TabPanel value="2">
                                                                <Box className="table-responsive">
                                                                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th className='seoMetaTable'>Sr.</th>
                                                                                <th className='seoMetaTable'>Image</th>
                                                                                <th className='seoMetaTable'>Source</th>
                                                                                <th className='seoMetaTable'>Alternate Text</th>
                                                                                <th className='seoMetaTable'>Size</th>
                                                                                <th className='seoMetaTable'>Extension</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                data && data.images && data.images.length > 0 && data.images.map((i, index) => <tr key={`image-${index}`}>
                                                                                    <td className='seoMetaTable'>{index + 1}</td>
                                                                                    <td className='seoMetaTable'><img src={`https://www.rankfast.co${i.src}`} alt={i.alt} className='img-fluid' /></td>
                                                                                    <td className='seoMetaTable'><Link href={`https://www.rankfast.co${i.src}`}>{`https://www.rankfast.co${i.src}`}</Link></td>
                                                                                    <td className='seoMetaTable'>{i.alt}</td>
                                                                                    <td className='seoMetaTable'><span><strong>Width:</strong> {i.size.width}</span><br /><span><strong>Height:</strong> {i.size.height}</span></td>
                                                                                    <td className='seoMetaTable'>{i.extension}</td>
                                                                                </tr>)
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                </Box>
                                                            </TabPanel>
                                                            <TabPanel value="3">
                                                                <Box className="table-responsive">
                                                                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th className='seoMetaTable'>Sr.</th>
                                                                                <th className='seoMetaTable'>Link</th>
                                                                                <th className='seoMetaTable'>Text</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                data && data.links && data.links.length > 0 && data.links.map((l, index) => <tr>
                                                                                    <td className='seoMetaTable'>{index + 1}</td>
                                                                                    <td className='seoMetaTable'><Link href={l.href}>{l.href}</Link></td>
                                                                                    <td className='seoMetaTable'><Link href={l.href}>{l.text}</Link></td>
                                                                                </tr>)
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                </Box>
                                                            </TabPanel>
                                                        </TabContext>
                                                    </Box>
                                                </> : null
                                            }
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default SEOMeta