import React,{useState, useEffect} from 'react';
import './FormMessage.css'
const axios = require('axios').default;


export default ({sendMessageHandler}) => {
    // const [sendStatus, setSendStatus] = useState(false)
    // const [sendMessage ,setSendMessage] = useState(null)
    // const getUrl = 'http://146.185.154.90:8000/messages';
  
    // const postRequestMessage = async ( message, author)=>{
    //     let copySendMessage = {...sendMessage}
    //     const data = new URLSearchParams()
    //     data.set('message', message)
    //     data.set('author',  author)
    //     await axios({
    //         method: 'post',
    //         url: getUrl,
    //         data: data
    //       })
    //       .then(function (response) {
    //         return
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     }

    // const sendMessageHandler = (e)=>{
    //     e.preventDefault()
    //     setSendStatus(true)
    //     setSendMessage({message: e.target.textMessage.value, author: e.target.author.value})
    //     e.target.textMessage.value='';
    // }

    // useEffect (()=>{
    //     if (sendMessage) {
    //         postRequestMessage(sendMessage.message, sendMessage.author)
    //     }},[sendMessage])
    
        return (

    
        <form className="formMessage" onSubmit={sendMessageHandler}>
            <div className="headerFormMessage">
            <label>
            <input className="authorMessage" required={true} name="author" placeholder="Enter name plz"/>
            </label>
            
            <input className='sendButton' type="submit" value="Send"/> 
            </div>
            <label>
            <textarea  className="inputMessage" required={true} type="text" name='textMessage' placeholder="Enter your message plz"/>
            </label>
        </form>
    )
}