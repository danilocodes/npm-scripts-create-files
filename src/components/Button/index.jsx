import React from 'react';
import Layout from './Layout';

const Button = ({text, onClick, color, style}) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return <Layout text={text} onClick={handleClick} color={color} style={style}/>;
};

export default Button;
