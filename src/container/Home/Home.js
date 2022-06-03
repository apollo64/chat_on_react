import React, {useState} from "react";
import FormMessage from "../../components/FormMessage/FormMessage";
import ListMessages from "../../components/ListMessages/ListMessages";
import './Home.css'

export default () => {
    
    return (
        <div className="home">
            <ListMessages />
            <FormMessage/>
        </div>
    )
}