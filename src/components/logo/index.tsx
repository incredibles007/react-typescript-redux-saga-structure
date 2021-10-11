import React from 'react';

import logoImage from '../../assets/images/logo.svg';
import logoCaptionImage from '../../assets/images/logo-caption.svg';

import './index.scss';

export const Logo = () => {
    return (
        <>
            <div>
                <img src={logoImage} alt="" className="login__logo" />
            </div>
            <div>
                <img
                    src={logoCaptionImage}
                    alt=""
                    className="login__logo-caption"
                />
            </div>
        </>
    );
};
