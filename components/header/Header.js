import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './header.scss';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })

class Header extends React.Component {
    render() {
        return (
            <Grid container className="headerContainer">
                <div className="headerLogoContainer">
                    <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png" alt="User" className="headerLogo"/>
                </div>
                
                <div className="headerNav">
                    
                        {
                            links.map(({ key, href, label }) => (
                                
                                    <a key={key} href={href} className="headerItemOption headerLink">{label}</a>
                              
                            ))
                        }
                   
                </div>
            </Grid>
            
        )
    }
}

export default Header;