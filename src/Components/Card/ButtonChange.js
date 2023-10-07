import React, { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function ButtonChange({ user }) {
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState('Show Interest');
    const [showPopup, setShowPopup] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSelectUser = () => {
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
            setButtonText('Request Sent');
            setIsButtonDisabled(true);
        }, 500);
    };

    const handlePreviewUser = () => {
        navigate("/preview", {state: {userId: user.RESID}});
    };


    return (
        <div className="user-card">
            <div className='user-meta__row'>
                <button
                    type='button'
                    className={`user_card_select ${buttonText === 'Request Sent' ? 'user_card_select_green' : ''}`}
                    onClick={handleSelectUser} disabled={isButtonDisabled}
                >
                    {buttonText}
                </button>
                <button
                    type='button'
                    className='user_card_preview'
                    onClick={handlePreviewUser}
                >
                    Preview Mentor
                </button>
            </div>
            {showPopup && (
                <div className="processing-popup">
                    <p>We are processing your request</p>
                </div>
            )}
        </div>
    );
}

export default ButtonChange;
