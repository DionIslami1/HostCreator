import React from 'react'
import './styles/article.scss';
import { ArticelData } from './AppBuilderData'

const Article = () => {
    return (
        <div className="article">
            {ArticelData.map((props) => {
                return (
                    <div className="article-content">
                        <div className={`article-back1 ${props.css}`}>
                            <div className="article-blank">
                                <div className="article-img" style={{ content: `url(${props.img})` }} />
                            </div>
                        </div>
                        <h6>{props.title}</h6>
                        <p>{props.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Article
