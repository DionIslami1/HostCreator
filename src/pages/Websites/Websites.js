import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Article from '../../components/shared/Article/Article';
import Sliders from '../../components/shared/Sliders/Sliders'
import Slider2 from '../../components/shared/Slider2/Slider2';
import YourDomain from '../../components/shared/YourDomain/YourDomain'
import Ideas from '../../components/shared/Ideas/Ideas'
import Clients from '../../components/shared/Clients/Clients'
import Footer from '../../components/shared/Footer/Footer';
import Banner from '../../components/pages/Websites/Banner'
import BringIdeas from '../../components/pages/Websites/BringIdeas'
import GetYourWebsite from '../../components/pages/Websites/GetYourWebsite'
import ThreeSteps from '../../components/pages/Websites/ThreeSteps'
import DragAndDrop from '../../components/pages/Websites/DragAndDrop'
import SetYourself from '../../components/pages/Websites/SetYourself'
import MoreThan from '../../components/pages/Websites/MoreThan'



const Websites = () => {
    return (
        <div className="website-page">
            <Nav />
            <Banner />
            <Article />
            <BringIdeas />
            <GetYourWebsite />
            <ThreeSteps />
            <DragAndDrop />
            <SetYourself />
            <Sliders />
            <MoreThan />
            <Slider2 />
            <YourDomain />
            <Ideas />
            <Clients />
            <Footer />
        </div>
    )
}

export default Websites
