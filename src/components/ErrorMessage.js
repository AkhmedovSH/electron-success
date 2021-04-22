import React from 'react';

export const ErrorMessage = ({ error }) => {

    if (error === undefined) {
        return null;
    } else {
        return <div className="error-text">{error.message}</div>;
    }
};