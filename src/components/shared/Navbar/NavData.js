import { FormattedMessage } from "react-intl";
import nav1 from "../../../assets/images/Share/NavBar/Products/prodicts-img.png"
import nav2 from "../../../assets/images/Share/NavBar/Products/products-img2.png"
import nav3 from "../../../assets/images/Share/NavBar/Products/products-img3.png"
import nav4 from "../../../assets/images/Share/NavBar/Products/products-img4.png"
import nav5 from "../../../assets/images/Share/NavBar/Products/products-img5.png"
import nav6 from "../../../assets/images/Share/NavBar/Products/products-img6.png"
import nav7 from "../../../assets/images/Share/NavBar/Products/products-img7.png"
import nav8 from "../../../assets/images/Share/NavBar/Products/products-img8.png"

import feature_img1 from "../../../assets/images/Share/NavBar/Features/features-img1.png"
import feature_img2 from "../../../assets/images/Share/NavBar/Features/features-img2.png"
import feature_img3 from "../../../assets/images/Share/NavBar/Features/features-img3.png"
import feature_img4 from "../../../assets/images/Share/NavBar/Features/features-img4.png"
import feature_img5 from "../../../assets/images/Share/NavBar/Features/features-img5.png"
import feature_img6 from "../../../assets/images/Share/NavBar/Features/features-img6.png"

import Resource_img1 from "../../../assets/images/Share/NavBar/Resources/resources-img1.png"
import Resource_img2 from "../../../assets/images/Share/NavBar/Resources/resources-img2.png"
import Resource_img3 from "../../../assets/images/Share/NavBar/Resources/resources-img3.png"
import Resource_img4 from "../../../assets/images/Share/NavBar/Resources/resources-img4.png"
import Resource_img5 from "../../../assets/images/Share/NavBar/Resources/resources-img5.png"
import Resource_img6 from "../../../assets/images/Share/NavBar/Resources/resources-img6.png"

export const NavData = [
    {
        icon: nav1,
        icon_height: 'img-height',
        css: 'cls',
        title: <FormattedMessage id='nav1-tittle' />,
        to: '/Websites',
        description: <FormattedMessage id='nav1-description' />
    },

    {
        icon: nav2,
        icon_height: 'img-height1',
        css: 'cls1',
        title: <FormattedMessage id='nav2-tittle' />,
        to: '/',
        description: <FormattedMessage id='nav2-description' />
    },

    {
        icon: nav3,
        icon_height: 'img-height2',
        css: 'cls2',
        title: <FormattedMessage id='nav3-tittle' />,
        to: '/AppBuilder',
        description: <FormattedMessage id='nav3-description' />
    },

    {
        icon: nav4,
        icon_height: 'img-height3',
        css: 'cls3',
        title: <FormattedMessage id='nav4-tittle' />,
        to: '/Templates',
        description: <FormattedMessage id='nav4-description' />
    },

    {
        icon: nav5,
        icon_height: 'img-height4',
        css: 'cls4',
        title: <FormattedMessage id='nav5-tittle' />,
        to: '/',
        description: <FormattedMessage id='nav5-description' />
    },

    {
        icon: nav6,
        icon_height: 'img-height5',
        css: 'cls5',
        title: <FormattedMessage id='nav6-tittle' />,
        to: '/',
        description: <FormattedMessage id='nav6-description' />
    },

    {
        icon: nav7,
        icon_height: 'img-height6',
        css: 'cls6',
        title: <FormattedMessage id='nav7-tittle' />,
        to: '/Portfolio',
        description: <FormattedMessage id='nav7-description' />
    },

    {
        icon: nav8,
        icon_height: 'img-height7',
        css: 'cls7',
        title: <FormattedMessage id='nav8-tittle' />,
        to: '/',
        description: <FormattedMessage id='nav8-description' />
    },
]

export const FeaturesData = [
    {
        icon: feature_img1,
        css: 'back-color',
        title: <FormattedMessage id='features1-tittle' />,
        to: '/',
        description: <FormattedMessage id='features1-description' />
    },

    {
        icon: feature_img2,
        css: 'back-color1',
        title: <FormattedMessage id='features2-tittle' />,
        to: '/',
        description: <FormattedMessage id='features2-description' />,
    },

    {
        icon: feature_img3,
        css: 'back-color2',
        title: <FormattedMessage id='features3-tittle' />,
        to: '/',
        description: <FormattedMessage id='features3-description' />,
    },

    {
        icon: feature_img4,
        css: 'back-color3',
        title: <FormattedMessage id='features4-tittle' />,
        to: '/',
        description: <FormattedMessage id='features4-description' />,
    },

    {
        icon: feature_img5,
        css: 'back-color4',
        title: <FormattedMessage id='features5-tittle' />,
        to: '/',
        description: <FormattedMessage id='features5-description' />,
    },

    {
        icon: feature_img6,
        css: 'back-color5',
        title: <FormattedMessage id='features6-tittle' />,
        to: '/',
        description: <FormattedMessage id='features6-description' />,
    },

]

export const ResourcesData = [
    {
        icon: Resource_img1,
        css: 'resources-color',
        title: <FormattedMessage id='resource1-tittle' />,
        to: '/',
        description: <FormattedMessage id='resource1-description' />,
    },

    {
        icon: Resource_img2,
        css: 'resources-color1',
        title: <FormattedMessage id='resource2-tittle' />,
        to: '/',
        description: <FormattedMessage id='resource2-description' />,
    },

    {
        icon: Resource_img3,
        css: 'resources-color2',
        title: <FormattedMessage id='resource3-tittle' />,
        to: '/',
        description: <FormattedMessage id='resource3-description' />,
    },

    {
        icon: Resource_img4,
        css: 'resources-color3',
        transform: 'img-transform',
        title: <FormattedMessage id='resource4-tittle' />,
        to: '/Templates ',
        description: <FormattedMessage id='resource4-description' />,
    },

    {
        icon: Resource_img5,
        css: 'resources-color4',
        title: <FormattedMessage id='resource5-tittle' />,
        to: '/',
        description: <FormattedMessage id='resource5-description' />,
    },

    {
        icon: Resource_img6,
        css: 'resources-color5',
        title: <FormattedMessage id='resource6-tittle' />,
        to: '/',
        description: <FormattedMessage id='resource6-description' />,
    },


]