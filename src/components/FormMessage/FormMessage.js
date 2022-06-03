import React from 'react';
import './FormMessage.css'

export default ({addMessage}) => {
    return (

    
        <form className="formMessage" onSubmit={addMessage}>
            <div className="headerFormMessage">
            <label>
            <input className="authorMessage" name="author" placeholder="Enter name plz"/>
            </label>
            
            <input className='sendButton' type="submit" value="Send"/> 
            </div>
            <label>
                            <textarea className="inputMessage" type="text" name='textMessage' placeholder="Enter your message plz"/>
            </label>
        </form>
    )
}