import React, { useState, useEffect } from 'react'
import { Box, Button, IconButton, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material'
import { NavConfig } from '@/sections/layout/nav-config'
import Link from 'next/link'
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material'
import DropdownMenu from './dropdownMenu'

const MobileOffcanvas = ({ open, closeMobileMenu }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdownFor, setOpenDropdownFor] = useState("")

    useEffect(() => {
        if (!openDropdown) setOpenDropdownFor("")
    }, [openDropdown])

    const handleMenuOpen = (menu, status) => {
        menu === "About Us" ? setOpenDropdownFor("About") : menu === "SEO Services" ? setOpenDropdownFor("SEO") : menu === "Other Services" ? setOpenDropdownFor("Other") : menu === "Tools" ? setOpenDropdownFor("Tools") : null
        setOpenDropdown(status)
    }

    const handleMenuClick = (menu, isOpen) => {
        handleMenuOpen(menu, isOpen)
    }

    return (
        <>
            <Box p={2} id="mobile_offcanvas" className={open ? 'show' : 'hide'}>
                <List className='d-flex flex-column align-items-center'>
                    {NavConfig && NavConfig.length > 0 && NavConfig.map((item, index) => <React.Fragment key={item.id}><ListItem className={`nav-item justify-content-center align-items-center ${openDropdownFor === item.name.split(" ")[0] ? 'active' : null} ${NavConfig.length - 1 === index ? 'last-nav' : null}`} onClick={() => { item.subMenu === null ? closeMobileMenu() : handleMenuClick(item.name, !openDropdown); }} style={{ width: "100%" }}>
                        <Link href={item.path}><ListItemText primary={item.name} /></Link>
                        {
                            item.subMenu !== null && <ListItemButton style={{ maxWidth: "1.5rem" }} className='p-0'>{openDropdown && openDropdownFor === item.name.split(" ")[0] ? <ArrowDropUp className='text-white' /> : <ArrowDropDown className='text-white' />}</ListItemButton>
                        }
                    </ListItem>
                        {
                            openDropdown && openDropdownFor === item.name.split(" ")[0] ? <DropdownMenu closeMobileMenu={closeMobileMenu} dropdownfor={openDropdownFor} /> : null
                        }
                    </React.Fragment>)}
                </List>
                <Box mt={5} p={2} className="aboutBorder">
                    <Typography variant='h5' className='text-white'>Get your free audit report today</Typography>
                    <Box mt={2}>
                        <Button className='teritory-outlined-button-1'>
                            Free Seo Audit
                        </Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default MobileOffcanvas