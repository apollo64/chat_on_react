import React,{useEffect, useState} from 'react';
import './ListMessages.css'
import Message from './Message/Message'

export default ({messages})=>{
    const [listMessages, setListMessages] = useState(messages)

    useEffect(()=>{
        console.log('lets list message render through usefect')
    },[])

    return(
        <div className="listMessages">
        {messages.map((message)=> 
        
            <Message 
            key={message.id}
            textMessage={message.message}
            author={message.author}
            date={message.datetime} 

            />
        )}

            
        </div>
    )
}