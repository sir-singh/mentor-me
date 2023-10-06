import React from "react";
// import './PreviewCard.css'
import './PreviewCard.css'
import YourComponent from "./YourComponent";
// import { BsFillPersonPlusFill } from 'bootstrap-icons/react';

function PreviewCard({ user }){
    return(
        <div className="user-card-container">
            <div className="user-card">
                <div className="user-meta__container">
                    <YourComponent user={user} />
                    <div className='user-meta__row'>
                        <img height={100} width={100} src="icons/person.png" alt="Photo" />
                    </div>
                </div>
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
                </div>
                <div className='user-details'>
                    {user?.COURSE_LABEL && (
                        <div className='user-details'>
                            <div className='user-details__row'>
                                <div className='user-details__key'>Education</div>
                                <div className='user-details__value'>
                                    {user?.ENTITY_INSTITUTE_LABEL
                                        ? `${capitalizeFirstLetter(user?.COURSE_LABEL)} From ${capitalizeFirstLetter(user?.ENTITY_INSTITUTE_LABEL)}`
                                        : capitalizeFirstLetter(user?.COURSE_LABEL)}
                                </div>
                            </div>

                        </div>
                    )}


                    {user?.SKILLS && (<div className='user-details__row'>
                        <div className='user-details__key'>Skills</div>
                        <div className='user-details__value'>{user?.SKILLS}</div>
                    </div>)}
                    {user?.PRJ_SKILLS && (<div className='user-details__row'>
                        <div className='user-details__key'>Project Skills</div>
                        <div className='user-details__value'>{user?.PRJ_SKILLS}</div>
                    </div>)}
                    {user?.PRJ_TITLE && (<div className='user-details__row'>
                        <div className='user-details__key'>Project Title</div>
                        <div className='user-details__value'>{capitalizeFirstLetter(user?.PRJ_TITLE)}</div>
                    </div>)}
                    {user?.PRJ_ROLE && (<div className='user-details__row'>
                        <div className='user-details__key'>Project Role</div>
                        <div className='user-details__value'>{capitalizeFirstLetter(user?.PRJ_ROLE)}</div>
                    </div>)}
                    {user?.PRJ_DETAILS && (<div className='user-details__row'>
                        <div className='user-details__key'>Project Details</div>
                        <div className='user-details__value'>{user?.PRJ_DETAILS}</div>
                    </div>)}

                </div>
            </div>
        </div>


    );
};
function capitalizeFirstLetter(string) {
    console.log(string);
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default PreviewCard;