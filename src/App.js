import React, { useState, useEffect } from "react";
import "./App.css";
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message'
import db from "./firebase";
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')

  // console.log(messages);
  
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message: doc.data()})))
    });
  },[])

  useEffect(()=>{
    setUsername(prompt("Enter your name"))
  },[])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
   

    setInput("");
    // emptying the input so that firse msg sed na jaye pichla vaala
  };

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" className="logo"/>
      <h1>Welcome {username}</h1>
    
      <form className="app__form">
      <FormControl className="app__formControl">

  <Input className="app__input" placeholder='Enter a msg ...' value={input} onChange={(e) => setInput(e.target.value)} />

  <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
<SendIcon/>
  </IconButton>
  
</FormControl>
         
      </form>
      <FlipMove>
      {
      messages.map(({id,message}) => (
        <Message key={id} username={username} message={message} />
      ))
      }
      </FlipMove>
     
    </div>
  );
}

export default App;
