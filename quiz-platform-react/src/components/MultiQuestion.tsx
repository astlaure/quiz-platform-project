import React from 'react';

const MultiQuestion = () => {
    return (
        <div className="quiz-page-question">
            <h3 className="text-white mb-3 mt-5">Couleur du cheval blanc de Napoleon?</h3>
            <form action="#">
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="hello"/>
                    <label htmlFor="name" className="form-check-label">Name</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="hello"/>
                    <label htmlFor="name" className="form-check-label">Name</label>
                </div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" name="hello"/>
                    <label htmlFor="name" className="form-check-label">Name</label>
                </div>
            </form>
        </div>
    )
}

export default MultiQuestion;