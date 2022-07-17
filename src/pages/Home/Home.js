import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Footer from '../../components/shared/Footer/Footer';
import Banner from '../../components/pages/Home/Banner'
import Article from '../../components/shared/Article/Article';
import WebsiteBuilder from '../../components/pages/Home/WebsiteBuilder';
import Brand from '../../components/pages/Home/Brand';
import Proffesionally from '../../components/pages/Home/Proffesionally';
import Vizualize from '../../components/pages/Home/Vizualize';
import Advanced from '../../components/pages/Home/Advanced';
import Supports from '../../components/pages/Home/Supports';
import OnlineStore from '../../components/pages/Home/OnlineStore';
import Hostgfx from '../../components/pages/Home/Hostgfx';
import OnePlatform from '../../components/pages/Home/OnePlatform';
import CreateBlog from '../../components/pages/Home/CreateBlog';
import DbStudio from '../../components/pages/Home/DbStudio';
import Slider2 from '../../components/shared/Slider2/Slider2';
import YourDomain from '../../components/shared/YourDomain/YourDomain'
import Ideas from '../../components/shared/Ideas/Ideas'
import Clients from '../../components/shared/Clients/Clients'

const Home = () => {
    return (
        <div className='home-page'>
            <Nav />
            <Banner />
            <Article />
            <WebsiteBuilder />
            <Brand />
            <Proffesionally />
            <Vizualize />
            <Advanced />
            <Supports />
            <OnlineStore />
            <Hostgfx />
            <OnePlatform />
            <CreateBlog />
            <DbStudio />
            <Slider2 />
            <YourDomain />
            <Ideas />
            <Clients />
            <Footer />
        </div>
    )
}

export default Home
