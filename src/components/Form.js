import React from 'react';


const Form = (props) => {
    const { inputs, setInputs } = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className="logo"></div>
            <form id="newForm">
                <div className="container-left">
                    <h1>Enter Information</h1>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input onChange={onChange} type="text" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input onChange={onChange} type="text" name="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input onChange={onChange} type="text" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input onChange={onChange} type="text" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Confirm Password:</label>
                        <input onChange={onChange} type="text" name="passwordConfirm" />
                    </div>
                </div>
            </form>
        </>
    )
}


export default Form;