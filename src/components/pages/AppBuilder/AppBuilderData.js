import Anything_img from '../../../assets/images/AppBuilder/anything-img.png';
import Anything_img1 from '../../../assets/images/AppBuilder/anything-img1.png';
import Anything_img2 from '../../../assets/images/AppBuilder/anything-img2.png';

import article_img1 from '../../../assets/images/AppBuilder/article-img1.png'
import article_img2 from '../../../assets/images/AppBuilder/article-img2.png'
import article_img3 from '../../../assets/images/AppBuilder/article-img3.png'
import article_img4 from '../../../assets/images/AppBuilder/article-img4.png'
import { FormattedMessage } from "react-intl";


export const ArticelData = [
    {
        img: article_img1,
        css: 'article-clc',
        title: <FormattedMessage id="App-Builder-Article-title" />,
        desc: <FormattedMessage id="App-Builder-Article-desc" />
    },

    {
        img: article_img2,
        css: 'article-clc1',
        title: <FormattedMessage id="App-Builder-Article-title1" />,
        desc: <FormattedMessage id="App-Builder-Article-desc1" />
    },

    {
        img: article_img3,
        css: 'article-clc2',
        title: <FormattedMessage id="App-Builder-Article-title2" />,
        desc: <FormattedMessage id="App-Builder-Article-desc2" />
    },

    {
        img: article_img4,
        css: 'article-clc3',
        title: <FormattedMessage id="App-Builder-Article-title3" />,
        desc: <FormattedMessage id="App-Builder-Article-desc3" />
    },
]

export const AnythingData = [
    {
        img: Anything_img,
        title: <FormattedMessage id="App-Builder-Anything-title" />,
        desc: <FormattedMessage id="App-Builder-Anything-desc" />
    },

    {
        img: Anything_img1,
        title: <FormattedMessage id="App-Builder-Anything-title1" />,
        desc: <FormattedMessage id="App-Builder-Anything-desc1" />
    },

    {
        img: Anything_img2,
        title: <FormattedMessage id="App-Builder-Anything-title2" />,
        desc: <FormattedMessage id="App-Builder-Anything-desc2" />
    },
]