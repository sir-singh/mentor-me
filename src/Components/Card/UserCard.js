import React, { useState }  from 'react';
import './UserCard.css'
import {useLocation, useNavigate} from 'react-router-dom';
import YourComponent from './YourComponent';


const UserCard = ({ user }) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const userId = user.RESID;

    const location = useLocation();
    console.log(location);

    const handlePreviewUser = () => {
        navigate("/preview", {state: {userId: userId}});
    };


    const handleSelectUser = () => {
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };


    return (
        <div className="user-card-container">
            <div className="user-card">
                <YourComponent user={user} />
                {/*<h2 className='user-meta__row'>{capitalizeFirstLetter(user?.NAME)}</h2>*/}
            </div>
            <div className="user-card">
                <div className='user-meta'>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/bag.png" alt="Bag Icon" title="Experience" />
                        <span>{user?.EXP} years</span>
                    </div>
                    <div className='user-meta__row'>
                        <img height={16} width={16} src="icons/wallet.png" alt="Wallet Icon" title="Designation" />
                        <span>
        {user?.ORGN ? `${capitalizeFirstLetter(user?.EXP_DESIG)} At ${capitalizeFirstLetter(user?.ORGN)}` : capitalizeFirstLetter(user?.EXP_DESIG)}
    </span>
                    </div>
                    <div className='user-meta__row'>
                        <button
                            type='button'
                            className='user_card_select'
                            onClick={handleSelectUser}
                        >
                            Show Interest
                        </button>
                        <button
                            type='button'
                            className='user_card_preview'
                            onClick={handlePreviewUser}
                        >
                            Preview Mentor
                        </button>
                    </div>
                </div>
                <div className='user-details'>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Education</div>
                        <div className='user-details__value'>
                            {user?.ENTITY_INSTITUTE_LABEL ? `${capitalizeFirstLetter(user?.COURSE_LABEL)} from ${capitalizeFirstLetter(user?.ENTITY_INSTITUTE_LABEL)}` : capitalizeFirstLetter(user?.COURSE_LABEL)}
                        </div>
                    </div>
                    <div className='user-details__row'>
                        <div className='user-details__key'>Expertise In</div>
                        <div className='user-details__value'><span dangerouslySetInnerHTML={{ __html: user?.SKILLS }}></span></div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="processing-popup">
                    <p>We are processing your request</p>
                </div>
            )}
        </div>
    );
};

function capitalizeFirstLetter(string) {
    console.log(string);
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default UserCard;
