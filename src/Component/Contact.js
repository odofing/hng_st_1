import React, { useState } from 'react'


const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [Message, setMessage] = useState('')
    const [valid, setvalid] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName === '' || lastName === '' || email === '' || Message === '') {
            setvalid('error subitting form')
        }
    }
    return (
        <>
            <form className='col-md-6 m-auto mb-5' onSubmit={handleSubmit}>
                <h4>Contact Me</h4>
                {valid}
                <h6 className='mb-5'>Hi there, contact me to ask me about anything you have in mind</h6>

                <div className='d-flex justify-content-md-between'>

                    <div className="mb-3">
                        <label className="form-label" htmlFor='first_name'>First Name</label>
                        <input type="email" placeholder='enter your first name'
                            className="form-control" id="first_name" onChange={(e) => setFirstName(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor='last_name'>Last Name</label>
                        <input type="text" placeholder='enter your last name'
                            className="form-control" id="last_name" onChange={(e) => setLastName(e.target.value)} />

                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input type="email" placeholder='youremail@email.com'
                        className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor='message'>Message</label>
                    <textarea type="textarea" id='message'
                        placeholder='send email and i will reply you as soon as possible...'
                        className="form-control" onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >You agree to providing your data to who
                        may contact you</label>
                </div>
                <button type="submit" className="btn btn-primary mb-5 mt-3 col-12" id='btn__submit'>Send Message</button>
                <div className='text-danger'>

                    {valid}
                </div>
            </form>
            <hr />
        </>
    )
}

export default Contact