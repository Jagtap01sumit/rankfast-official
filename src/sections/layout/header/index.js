import React, { useState } from 'react'
import Link from 'next/link'
import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
import { NavConfig } from '../nav-config/index'
import { MobileOffcanvas } from '@/components'

const Header = () => {
    const [open, setOpen] = useState(false)

    const closeMobileMenu = () => {
        setOpen(false)
    }

    return (
        <>
            <header className='fixed-top bg-secondary-1 shadow-lg'>
                <Container maxWidth="xxl" className='d-lg-block d-none'>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <nav className='navbar navbar-expand-lg'>
                                <Link href="/" legacyBehavior>
                                    <a className='navbar-brand'>
                                        <img src="/images/logo.png" loading='lazy' className='img-fluid' />
                                    </a>
                                </Link>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className='navbar-nav ms-auto align-items-center'>
                                        {
                                            NavConfig && NavConfig.length > 0 && NavConfig.map((navItem, index) => <li key={navItem.id} className={`nav-item ${navItem.subMenu !== null ? 'dropdown' : ''} ${NavConfig.length - 1 === index ? 'last-nav' : ''}`}>
                                                <Link href={navItem.path} className={`nav-link text-white ${navItem.subMenu !== null ? 'dropdown-toggle' : ''}`}>{navItem.name}</Link>
                                                {
                                                    navItem.subMenu !== null && <ul className={`dropdown-menu p-2 border-0 shadow`} style={{ height: navItem.subMenu !== null && navItem.subMenu.length > 6 ? '256px' : 'auto', overflowY: 'auto' }}>
                                                        {
                                                            navItem.subMenu.map((item, index) => <li key={item.id} className='nav-item'>
                                                                <Link href={item.path}>{item.name}</Link>
                                                            </li>)
                                                        }
                                                    </ul>
                                                }
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xxl" className='d-lg-none d-block' sx={{ position: 'relative' }}>
                    <nav className='navbar navbar-expand-lg'>
                        <Link href="/" legacyBehavior>
                            <a className='navbar-brand'>
                                <img src="/images/logo.png" alt="rankfast logo" className='img-fluid' />
                            </a>
                        </Link>
                        <IconButton className='hamburgerButton' onClick={() => setOpen(!open)}>{open ? <Close className='text-white' /> : <Menu className='text-white' />}</IconButton>
                    </nav>
                    <MobileOffcanvas open={open} closeMobileMenu={closeMobileMenu} />
                </Container>
            </header >
        </>
    )
}

export default Header