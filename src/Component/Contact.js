import React from 'react'


const Contact = () => {
    return (
        <>
            <form className='col-md-6 m-auto mb-5'>
                <h4>Contact Me</h4>
                <h6 className='mb-5'>Hi there, contact me to ask me about anything you have in mind</h6>

                <div className='d-flex justify-content-md-between'>

                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="email" placeholder='enter your first name' className="form-control" id="first_name" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" placeholder='enter your last name' className="form-control" id="last_name" />

                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder='youremail@email.com' className="form-control" id="email" />

                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea type="textarea" id='message' placeholder='send email and i will reply you as soon as possible...' className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">You agree to providing your data to who
                        may contact you</label>
                </div>
                <button type="submit" className="btn btn-primary mb-5 mt-3 col-12" id='‘btn__submit'>Send Message</button>
            </form>
            <hr />
        </>
    )
}

export default Contact