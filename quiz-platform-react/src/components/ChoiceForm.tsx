import React, { useState } from 'react';
import { Choice } from '../models/app.models';

interface ChoiceFormProps {
    choice: Choice;
}

const ChoiceForm: React.FC<ChoiceFormProps> = (props) => {
    const [state, setState] = useState({
        name: '',
        type: 'SINGLE'
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className="choice-form col-md-3">
            <div className="card">
                <div className="card-body">
                    {/*<form action="#">*/}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                    {/*</form>*/}
                </div>
            </div>
        </div>
    )
}

export default ChoiceForm;