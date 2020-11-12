import React from "react"
import "./styles.css"

const Trend = (props) => {
    return (
        <div className="trend-container">
            <div className='trend-container_text'>
                <p>{props.category}</p>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
                <p>Tweets: {props.noTweets > 1000000 ? (props.noTweets / 1000000) + 'M' : props.noTweets }</p>
            </div>
            <div className="trend-container_image">
                <img width="100px" src={props.imageUrl}/>
            </div>
        </div>
    )
}


export default Trend