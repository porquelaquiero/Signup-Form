import React from 'react';
import '../styles/AlertBanner.scss';

interface AlertBannerProps {
    message: string;
    type: 'success' | 'error';
}

const AlertBanner: React.FC<AlertBannerProps> = ({ message, type }) => {
    return (
        <div className={`alert-banner ${type}`} data-testid="alert-banner">
            <p>{message}</p>
        </div>
    );
};

export default AlertBanner;
