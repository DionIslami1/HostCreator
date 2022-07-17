import React from 'react'
import Nav from '../../components/shared/Navbar/Nav';
import Sliders from '../../components/shared/Sliders/Sliders'
import YourDomain from '../../components/shared/YourDomain/YourDomain'
import Ideas from '../../components/shared/Ideas/Ideas'
import Clients from '../../components/shared/Clients/Clients'
import Footer from '../../components/shared/Footer/Footer';
import Banner from '../../components/pages/AppBuilder/Banner'
import Article from '../../components/pages/AppBuilder/Article'
import HavingAnApp from '../../components/pages/AppBuilder/HavingAnApp'
import TryHostCreator from '../../components/pages/AppBuilder/TryHostCreator'
import FastDevelopment from '../../components/pages/AppBuilder/FastDevelopment.js'
import Anything from '../../components/pages/AppBuilder/Anything.js'

const AppBuilder = () => {
    return (
        <div className="appbuilder-page">
            <Nav />
            <Banner />
            <Article />
            <HavingAnApp />
            <TryHostCreator />
            <FastDevelopment />
            <Anything />
            <Sliders />
            <YourDomain />
            <Ideas />
            <Clients />
            <Footer />
        </div>
    )
}

export default AppBuilder
