import React from 'react'
import './article.scss';
import { ArticleData } from './ArticleData'
import { FormattedMessage } from "react-intl";

const Article = () => {
    return (
        <div className='article'>
            <div className='article-title'>
                <h6><FormattedMessage id="article-title" /></h6>
                <p><FormattedMessage id="article-description" /></p>
            </div>
            <div className='article-content'>
                {ArticleData.map((props) => {
                    return (
                        <div className='article-box'>
                            <div className={`article-back ${props.css}`}>
                                <div className='article-back2'>
                                    <div className={`${props.img_content}`} style={{ content: `url(${props.img})` }} />
                                </div>
                            </div>
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Article
