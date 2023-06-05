import React from 'react';

type ButtonPropsType = {
    ifButtonClick: () => void
    name: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickButton = () => {
        props.ifButtonClick()
    }
    return (
        <button onClick={onClickButton}>{props.name}</button>
    );
};
