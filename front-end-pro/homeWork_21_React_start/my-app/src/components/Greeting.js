import React from "react";

export function Greeting(props) {
    return (
        <div className="Hello">
            <img className="Image"
                 src={props.author.avatarUrl}/>
            <div className="UserGreeting">
                {props.author.greeting}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

function formatDate(date) {
    return date.toLocaleDateString();
}
