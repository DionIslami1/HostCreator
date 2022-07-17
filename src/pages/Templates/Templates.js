import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Ideas from '../../components/shared/Ideas/Ideas'
import Clients from '../../components/shared/Clients/Clients'
import Footer from '../../components/shared/Footer/Footer';
import Banner from '../../components/pages/Templates/Banner'
import Section from '../../components/pages/Templates/Section'


const Templates = () => {
    return (
        <div className="templates-pages">
            <Nav />
            <Banner />
            <Section />
            <Ideas />
            <Clients />
            <Footer />
        </div>
    )
}

export default Templates
