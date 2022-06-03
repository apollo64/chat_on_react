import React,{useEffect, useState} from 'react';
import './ListMessages.css'
import Message from './Message/Message'
import {v4 as uuidv4} from 'uuid';

export default ({messages})=>{
    
    

    useEffect(()=>{
        console.log('list message render through useefffect messages', messages)
        
    },
        [messages])
    
        return(
        <div className="listMessages">
        { messages.length>0 ? messages.map((message)=> 
           

            <Message 
            key={uuidv4()}
            textMessage={message.message}
            author={message.author}
            date={
                message.datetime}
             
            

            />
            
        ):null}

            
        </div>
    )
}