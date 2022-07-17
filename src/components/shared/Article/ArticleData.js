import { FormattedMessage } from "react-intl";
import article_img1 from '../../../assets/images/Share/Article/article-img1.png'
import article_img2 from '../../../assets/images/Share/Article/article-img2.png'
import article_img3 from '../../../assets/images/Share/Article/article-img3.png'
import article_img4 from '../../../assets/images/Share/Article/article-img4.png'


export const ArticleData = [
    {
        id: 1,
        img: article_img1,
        img_content: 'article-img',
        css: 'img-back',
        title: <FormattedMessage id="ArticleData-title" />,
        description: <FormattedMessage id="ArticleData-description" />,

    },

    {
        id: 2,
        img: article_img2,
        img_content: 'article-img1',
        css: 'img-back1',
        title: <FormattedMessage id="ArticleData-title1" />,
        description: <FormattedMessage id="ArticleData-description1" />,
    },

    {
        id: 3,
        img: article_img3,
        img_content: 'article-img2',
        css: 'img-back2',
        title: <FormattedMessage id="ArticleData-title2" />,
        description: <FormattedMessage id="ArticleData-description2" />,

    },

    {
        id: 4,
        img: article_img4,
        img_content: 'article-img3',
        css: 'img-back3',
        title: <FormattedMessage id="ArticleData-title3" />,
        description: <FormattedMessage id="ArticleData-description3" />,

    },

]