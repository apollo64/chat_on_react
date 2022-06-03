import React from 'react';
import './Message.css'

export default ({author, date, textMessage}) => {
    return(
        <div className="message">
            
            <div className="headerMessage">
            <div className="authorMessage">{author}</div>
            <div className="dateMessage">{date}</div>
            </div>
                <p className="textMessage">{textMessage}</p>
        </div>
    )
}