import { v4 as uuidv4 } from 'uuid';
import React, {useEffect, useState} from "react";
import FormMessage from "../../components/FormMessage/FormMessage";
import ListMessages from "../../components/ListMessages/ListMessages";
import './Home.css'
import Message from '../../components/ListMessages/Message/Message';
const axios = require('axios').default;



export default () => {
    const getUrl = 'http://146.185.154.90:8000/messages'

    const [idInterval, setId]=useState(null)
    const [countRestartInterval, setRestartInterval]=useState({count : 0})
    const [messages, setMessages] = useState([])
    const [sendMessage ,setSendMessage] = useState(null)
    const [initialStart, setStart] = useState(false)


    useEffect(()=>{
      
         requestNewMessages(getUrl)
         let copyRestart = {...countRestartInterval}
         copyRestart.count++;
         setRestartInterval(copyRestart)
      
    },[])


    useEffect(()=>{
      console.log(' home render on useffect counterRestart')

      if(messages.length>0){
        console.log('interval started')
        let newIdInterval = setInterval (()=>{
          let latestDate = messages.pop().datetime
           requestByLatestDate(latestDate)
           console.log('latest date', latestDate)
        }, 7000)
        
        setId(newIdInterval) 
        console.log('newIdInterval', newIdInterval)
      }
    },[countRestartInterval])
    
   

    const requestByLatestDate = async (latestDate)=>{
      try {
        await axios.get(getUrl+'?datetime='+latestDate)
        .then((response)=>{ console.log( 'es latest date response ', response)
        if(response.data.length>0) {
          let copyMessages = [...messages]
          copyMessages.concat(response.data)
          setMessages(copyMessages)
        }
        })
        
      } catch (error) {
        console.error('on request error',error);
      }
    }

    


    const requestNewMessages = async () => {
            try {
              const response = await axios.get(getUrl)
              .then((response)=>{ 
                setMessages(response.data)
              })
            } catch (error) {
              console.error('on request error',error);
            }
          }
    
    const sendMessageHandler = (e)=>{
      e.preventDefault()
      setSendMessage({message: e.target.textMessage.value, author: e.target.author.value})
      e.target.textMessage.value='';
      }

      useEffect(()=>{
        console.log(' home render on useffect send message')
        if (sendMessage) {
          postRequestMessage(sendMessage.message, sendMessage.author)
          clearInterval(idInterval)
          let copyRestart = {...countRestartInterval}
          copyRestart.count++;
          setRestartInterval(copyRestart)
      }},[sendMessage])

        const postRequestMessage = async ( message, author)=>{
          let copySendMessage = {...sendMessage}
          const data = new URLSearchParams()
          data.set('message', message)
          data.set('author',  author)
          await axios({
              method: 'post',
              url: getUrl,
              data: data
            })
            .then(function (response) {
              return
            })
            .catch(function (error) {
              console.log(error);
            });
          }
    return (
        <div className="home">
            <ListMessages 
            messages={messages}
            />
            <FormMessage
              sendMessageHandler={()=>sendMessageHandler(e)}
            />
        </div>
    )
}