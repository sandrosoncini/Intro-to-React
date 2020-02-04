import React from 'react';
import {QuestionDetails} from './QuestionsDetails'
import {AnswerDetails} from './AnswerDetails'

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
        body= "Amarelle e Vermilion"
        author={{ full_name: "Sandro Soncini" }}
        created_at={new Date()}
        />
        
        </div>
    )
};

export default QuestionShowPage;