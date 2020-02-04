import React from 'react';


export const AnswerDetails = (props) =>{
    return (
        <div>
        <p>
          {props.body}. <br />
          By {props.author.full_name}
        </p>
        <small>{props.created_at.toLocaleString()}</small>

        </div>
    )
};