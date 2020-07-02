import React from 'react';
import { Link } from 'react-router-dom';
import { QuizSummary } from '../models/app.models';

interface QuizGridItemProps {
    summary: QuizSummary;
}

const QuizGridItem: React.FC<QuizGridItemProps> = (props) => {
    const { summary } = props;

    return (
        <div className="col-md-4 col-lg-3 mb-5">
            <div className="card">
                <Link to={`/quiz/1`}>
                    <div className="card-body">
                        <h3 className="mb-4">{summary.name}</h3>
                        <p className="mb-3">{summary.length} questions</p>
                        <p className="mb-3">{summary.length * 1.5} minutes</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuizGridItem;
