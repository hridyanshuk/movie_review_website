import './sidebarleft.css'

import { useState } from "react"
import {Link} from 'react-router-dom'
import Logo from './Logo.jsx'



function SidebarLeft() {

    const [nav, setNav] = useState([
        {
            label: 'Home',
            linkto: '/',
            open: true,
            key: 0
        }, {
            label: 'Movies List',
            linkto: '/movies',
            open: false,
            key: 1
        }, {
            label: 'Post a review',
            linkto: '/post',
            open: false,
            key: 2
        }, {
            label: 'About',
            linkto: '/about',
            open: false,
            key: 3
        }
    ])
    const navClass = (link) => {
        if(link.open) {
            return 'open'
        }
        return 'closed'
    }
    return (
        <div className="sidebar_left">

            <Logo />

            <ul className="sidebar_left_nav">
                {
                    nav.map((link) => {
                        return (
                            <li key = {link.key}>
                                <a href={link.linkto} className = {navClass(link)}>
                                    {link.label}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarLeft