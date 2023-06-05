import React, {useState, ChangeEvent, MouseEvent} from 'react';

type FullInputPropsType = {
    callBack: (words: string) => void
    name: string
}

export const FullInput = (props: FullInputPropsType) => {
    let [words, setWords] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setWords(event.currentTarget.value)
    }
    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.callBack(words)
        setWords('')
    }

    return (
        <>
            <input value={words} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </>
    );
};