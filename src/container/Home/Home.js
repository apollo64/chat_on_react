import { v4 as uuidv4 } from 'uuid';
import React, {useEffect, useState} from "react";
import FormMessage from "../../components/FormMessage/FormMessage";
import ListMessages from "../../components/ListMessages/ListMessages";
import './Home.css'
import Message from '../../components/ListMessages/Message/Message';
const axios = require('axios').default;



export default () => {
    const getUrl = 'http://146.185.154.90:8000/messages'

    const [pushSend, setSendButton]=useState(false)
    const [idInterval, setId]=useState(null)
    const [latestDate , setLatestDate ] = useState(null)
    const [messages, setMessages] = useState([])

    const sendButtonPush = ()=>{
        let count = 0
        let newDate = Date.now()
        if (!idInterval){
            let newIdInterval = setInterval(requestNewMessages(getUrl),5000)
            setId(newIdInterval)
        }   
    }

    useEffect(()=>{
        requestNewMessages(getUrl)
    },[])
    



    const requestNewMessages = async () => {
            try {
              const response = await axios.get(getUrl);
              console.log(`date`, Date());
              setMessages(response.data)
              return
            } catch (error) {
              console.error('on request error',error);
            }
          }
    
    const lastDateRequest = async() =>{

        try {
            if (messages.length>0) {
                let newLatestDate = messages.pop().datetime
                const response = await axios.get(getUrl+'?datetime='+newLatestDate);
                
                setMessages(response.data)
            }
          } catch (error) {
            console.error(error);
          }
        }

    console.log('home render')
    return (
        <div className="home">
            <ListMessages 
            messages={messages}
            />
            <FormMessage/>
        </div>
    )
}