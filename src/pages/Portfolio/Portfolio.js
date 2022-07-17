import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Sliders from '../../components/shared/Sliders/Sliders'
import Slider2 from '../../components/shared/Slider2/Slider2';
import YourDomain from '../../components/shared/YourDomain/YourDomain'
import Ideas from '../../components/shared/Ideas/Ideas'
import Clients from '../../components/shared/Clients/Clients'
import Footer from '../../components/shared/Footer/Footer';
import Banner from '../../components/pages/Portfolio/Banner'
import GetBeautiful from '../../components/pages/Portfolio/GetBeautiful'
import CreatePortfolio from '../../components/pages/Portfolio/CreatePortfolio'


const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <Nav />
            <Banner />
            <GetBeautiful />
            <CreatePortfolio />
            <Sliders />
            <Slider2 />
            <YourDomain />
            <Ideas />
            <Clients />
            <Footer />
        </div>
    )
}

export default Portfolio

