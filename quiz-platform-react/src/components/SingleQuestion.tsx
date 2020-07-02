import React from 'react';
import { Question } from '../models/app.models';

interface SingleQuestionProps {
    question: Question;
    answer: number;
    changeEvent: (value: number) => void;
}

const SingleQuestion: React.FC<SingleQuestionProps> = (props) => {
    const { question, answer, changeEvent } = props;

    return (
        <div className="single-question mb-4">
            <h3 className="text-white mb-3">{question.value}</h3>
            {
                question.choices.map((choice, index) => {
                    const name = Math.random().toString(36).substring(7);
                    return (
                        <div key={index} className="custom-control custom-radio mb-2" onClick={() => changeEvent(choice.id)}>
                            <input
                                className="custom-control-input"
                                type="radio"
                                name={name}
                                value={choice.id}
                                checked={answer === choice.id}
                                onChange={() => {}}
                            />
                            <label htmlFor="name" className="custom-control-label">{choice.value}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleQuestion;