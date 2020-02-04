import React from 'react';


export const QuestionDetails = props => {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>
          {props.body} <br />
          By {props.author.full_name}
        </p>
        <small>
          Seen {props.view_count} times - {props.created_at.toLocaleString()}
        </small>
      </div>
    );
  };

  //export {QuestionDetails}