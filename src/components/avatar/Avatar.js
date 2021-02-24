import React from 'react';

export default function Avatar({srcUrl = "https://reqres.in/img/faces/11-image.jpg"})
{
    return (
        <div className="avatar">
            <img className="image" src={srcUrl} alt={"user Image"}/>
        </div>
    )
}