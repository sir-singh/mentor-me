import React, {useEffect, useState} from "react";
import data from "../../data/previewSample.json";
import PreviewCard from "../Card/PreviewCard";
import { useLocation } from 'react-router-dom'


function Preview(){

    const {state} = useLocation();
    const userId = state.userId;

    const [preview, setUsers] = useState(data.preview);
    useEffect(() => {

        fetch(`http://10.10.115.146:9090/getMentorDetail?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUsers(data)})
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return(
        <div>
            <h1 className="preview_heading">Mentor Details</h1>
            <p className="user-card-list">
                {preview?.mentors?.map((user, index) => (
                    <li key={index} className="user-card-list__item">
                        <PreviewCard key={index} user={user} />
                    </li>
                ))}
            </p>
        </div>
    );
};

export default Preview;
