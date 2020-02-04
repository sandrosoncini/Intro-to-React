import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


// A react component is a function that returns a react element.
// PascalCase is the naming convention for react components.
// Components whose names does not begin with a capital letter,
// will be interpretted as a plain HTML tag.

//Questiond details component
const QuestionDetails = props => {
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

// AswerDetails Compnent

const AnswerDetails = (props) =>{
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

// question Show page component 
const QuestionShowPage =()=>{
    return (
        <div>
        <QuestionDetails
         title="What is your favorite colour "
         body="Red, Green"
         author={{ full_name: "Michael Owen" }}
         view_count={100}
         created_at={new Date()}
        
        />
        <AnswerDetails
        body= "Amarelo e Vermelho"
        author={{ full_name: "Sandro Soncini" }}
        created_at={new Date()}
        />
        
        </div>
    )
};


ReactDOM.render(<QuestionShowPage  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
