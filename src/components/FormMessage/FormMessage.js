import React from 'react';
import './FormMessage.css'

export default () => {
    return {
        <form className="formMessage" onSubmit={addMessage}>
            <div className="headerFormMessage">
            <input className="authorMessage">{author}</input>
            <input type="submit" value="Отправить" /> </div>
            <textarea className="inputMessage" type="text" placeholder="Enter your message please"/>
                
        </form>
    }
}