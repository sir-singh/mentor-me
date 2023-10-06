import React from 'react';

function YourComponent({ user }) {
    const isBlurred = true; // You can set this based on some condition
    const blurStyle = {
        filter: isBlurred ? 'blur(4px)' : 'none', // Adjust the blur amount as needed
    };
    return (
        <div className="user-card">
            <h1 style={blurStyle}>
                {capitalizeFirstLetter(user?.NAME)}
            </h1>
        </div>
    );
}
function capitalizeFirstLetter(string) {
    console.log(string);
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default YourComponent;