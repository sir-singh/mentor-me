import React, { useState, useEffect } from "react";
import UserCard from "../Card/UserCard";
import data from "../../data/sample.json";

function Home() {
    const urlParams = new URLSearchParams(window.location.search);
    const skillId = urlParams.get('skill');
    const userId = urlParams.get('userId');

    const [users, setUsers] = useState(data.data);
    const [isLoading, setIsLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        setIsLoading(true); // Set loading state to true initially
        // fetch(`http://10.111.5.212:9091/getMentors?userId=${userId}&skill=${skillId}`)
        fetch(`http://10.10.115.146:9090/getMentors?userId=${userId}&skill=${skillId}`)
            .then((response) => response.json())
            .then((data) => {
                const userData = data;
                console.log(userData)
                setUsers(userData);
                setIsLoading(false); // Set loading state to false when data is loaded
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading state to false in case of an error
            });
    }, [userId, skillId]); // Include userId and skill as dependencies for re-fetching data

    return (
        <div>
            <h2>List of Mentors</h2>
            {isLoading ? ( // Show loading message when isLoading is true
                <p>Your request is being processed...</p>
            ) : users?.totalCount===0? <p>No data found for mentors...</p> : (
                <ul className="user-card-list">
                    {
                        users?.mentors?.map((user, index) => (
                        <li key={index} className="user-card-list__item">
                            <UserCard key={index} user={user} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
