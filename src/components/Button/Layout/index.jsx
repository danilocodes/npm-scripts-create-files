import React from 'react';
import '../Style/index.css';

const Layout = ({text, onClick, color, style}) => {
    return (
        <button className='btn-main' onClick={onClick} style={{backgroundColor: color, ...style}}>
            {text}
        </button>
    );
};

export default Layout;
