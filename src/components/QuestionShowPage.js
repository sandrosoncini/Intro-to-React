import React from 'react';

import "./css/QuestionShowPage.css"
import {QuestionDetails} from './QuestionsDetails'
import {AnswerList} from './AnswerList'
import oneQuestionData from '../OneQuestionData'

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
        <AnswerList
        answers={oneQuestionData.answers}
        />
        
        </div>
    )
};

export default QuestionShowPage;