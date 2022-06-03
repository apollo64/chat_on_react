import React from 'react';
import './ListMessages.css'
import Message from './Message/Message'

export default ({textMessage, date,author})=>{
    return(
        <div className="listMessages">
            <Message 
            textMessage={textMessage}
            author={author}
            date={date}

            />
        </div>
    )
}