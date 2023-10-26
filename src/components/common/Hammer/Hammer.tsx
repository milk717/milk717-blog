import './hammer.scss';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHammer} from '@fortawesome/free-solid-svg-icons';

export const Hammer = () => {
    return (
        <div className="hammer-box">
            <FontAwesomeIcon icon={faHammer} size="10x" className="hammer" />
            <p>Coming Soon</p>
        </div>
    );
};
