import React from 'react'

const Results = (props) => {
    const { firstName, lastName, email, password, passwordConfirm } = props.data;
    return (
        <div className="fields">
            <h1>Results</h1>
            <p>First Name:   {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passwordConfirm}</p>
        </div>
    )
}


export default Results;