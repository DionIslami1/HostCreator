import Slider1 from '../../shared/Slider1/Slider1'
import Slider3 from '../../shared/Slider3/Slider3'
import Slider4 from '../../shared/Slider4/Slider4'
import Slider5 from '../../shared/Slider5/Slider5'

import onlinestore_img from '../../../assets/images/Home/Online-sotre-img1.png';
import onlinestore_img1 from '../../../assets/images/Home/Online-sotre-img2.png';
import onlinestore_img2 from '../../../assets/images/Home/Online-sotre-img3.png';

import { FormattedMessage } from "react-intl";


export const SliderData = [
    {
        img: 'slider-img1'
    },

    {
        img: 'slider-img2'
    },

    {
        img: 'slider-img3'
    },

    {
        img: 'slider-img4'
    },

    {
        img: 'slider-img5'
    },

    {
        img: 'slider-img6'
    },

    {
        img: 'slider-img7'
    },

    {
        img: 'slider-img8'
    },

]

export const OnlineStoreData = [
    {
        id: 1,
        title: 'onlinestore-prod-desc1',
        css: 'img-back',
        img: onlinestore_img,
        description: <FormattedMessage id="OnlineStoreData-description1" />,

    },

    {
        id: 2,
        title: 'onlinestore-prod-desc2',
        css: 'img-back1',
        img: onlinestore_img1,
        description: <FormattedMessage id="OnlineStoreData-description2" />,
    },

    {
        id: 3,
        title: 'onlinestore-prod-desc3',
        css: 'img-back2',
        img: onlinestore_img2,
        description: <FormattedMessage id="OnlineStoreData-description3" />,

    },

]

export const DbStudioData = [
    {
        id: 1,
        title: <FormattedMessage id="DbStudioData-title1" />,
        description: <FormattedMessage id="DbStudioData-description1" />,

    },

    {
        id: 2,
        title: <FormattedMessage id="DbStudioData-title2" />,
        description: <FormattedMessage id="DbStudioData-description2" />,
    },

    {
        id: 3,
        title: <FormattedMessage id="DbStudioData-title3" />,
        description: <FormattedMessage id="DbStudioData-description3" />,

    },

    {
        id: 4,
        title: <FormattedMessage id="DbStudioData-title4" />,
        description: <FormattedMessage id="DbStudioData-description4" />,

    },
]

export const BannerDataTitle = [
    {
        id: 1,
        title: <FormattedMessage id="banner-title1-span1" />,
    },
    {
        id: 2,
        title: <FormattedMessage id="banner-title1-span2" />,
    },
    {
        id: 3,
        title: <FormattedMessage id="banner-title1-span3" />,
    },
    {
        id: 4,
        title: <FormattedMessage id="banner-title1-span4" />,
    },
    {
        id: 5,
        title: <FormattedMessage id="banner-title1-span5" />,
    },
]

export const BannerDataSliders = [
    {
        slider: <Slider1 />,
    },
    {
        slider: <Slider4 />,
    },
    {
        slider: <Slider3 />,
    },
    {
        slider: <Slider1 />,
    },
    {
        slider: <Slider5 />,
    },
]

export const brandTabName = [
    {
        id: 1,
        btn: 'button button1',
        active: 'button button1 active-button1',
        text: 'btn-text',
        btn_circle: 'btn-circle1',
        circle: 'circle1',
    },

    {
        id: 2,
        btn: 'button button2',
        active: 'button button1 active-button2',
        text: 'btn-text1',
        btn_circle: 'btn-circle2',
        circle: 'circle2',
    },

    {
        id: 3,
        btn: 'button button3',
        active: 'button button1 active-button3',
        text: 'btn-text2',
        btn_circle: 'btn-circle3',
        circle: 'circle3',
    },

    {
        id: 4,
        btn: 'button button4',
        active: 'button button1 active-button4',
        text: 'btn-text3',
        btn_circle: 'btn-circle4',
        circle: 'circle4',
    },

]

export const brandTabPanelName = [
    {
        id: 1,
        title: 'btn-tittle',

    },

    {
        id: 2,
        title: 'btn-tittle1',

    },

    {
        id: 3,
        title: 'btn-tittle2',

    },

    {
        id: 4,
        title: 'btn-tittle3',

    },

]



