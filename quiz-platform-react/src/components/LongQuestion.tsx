import React from 'react';

const LongQuestion = () => {
    return (
        <div className="quiz-page-question">
            <h3 className="text-white mb-3 mt-5">Couleur du cheval blanc de Napoleon?</h3>
            <form action="#">
                <div className="form-group mb-2">
                    <label htmlFor="name">Answer</label>
                    <textarea rows={3} className="form-control" />
                </div>
            </form>
        </div>
    )
}

export default LongQuestion;