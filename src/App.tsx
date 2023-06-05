import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const ifButtonClick = () => {
        addMessage(title)
        setTitle('')
    }

    // const callBack = (words: string) => {
    //     let newInfo = {message: words}
    //        setMessage([newInfo, ...message])
    // }
    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'push'} ifButtonClick={ifButtonClick}/>

            {/*<FullInput callBack={callBack} name={'+'}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
