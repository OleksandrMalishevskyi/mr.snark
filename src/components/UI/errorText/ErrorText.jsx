import React from 'react';
import './errorText.scss';

const ErrorText = ({text}) => {
    return (
        <p className='error-text'>
            * {text}
        </p>
    );
};

export default ErrorText;