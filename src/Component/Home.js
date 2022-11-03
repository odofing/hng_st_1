import { FaGithub, FaShare } from 'react-icons/fa'
import { AiOutlineSlack } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Me from '../Img/gbada.jpeg'

import React from 'react'

const Home = () => {
    return (
        <>
            <div className="mt-5">
                <a style={{ color: 'black', fontSize: '25px', marginLeft: '80%' }} href='https://internship.zuri.team/'>
                    <FaShare />{' '}</a>
                <div className='d-flex justify-content-center'>
                    <img src={Me} alt="Me" style={{ width: '180px', borderRadius: '60px' }} />
                </div>
                <div className="d-flex flex-column col-md-10 m-auto">
                    <h4 className='d-flex justify-content-center mt-3'> Odofin Gbadamosi</h4>

                    <a className="btn btn-light m-3 p-3" id="twitter" target="_blank" without rel="noreferrer"
                        href="https://twitter.com/G_Odofin"
                        role="button">Twitter</a>

                    <a className="btn btn-light m-3 p-3" id="btn__zuri" target="_blank" without rel="noreferrer"
                        href="https://training.zuri.team/"
                        role="button">Zuri Team</a>

                    <a className="btn btn-light m-3 p-3" id="books" target="_blank" without rel="noreferrer"
                        href="http://books.zuri.team/"
                        role="button">Zuri Books</a>

                    <a className="btn btn-light m-3 p-3" id="book__python" target="_blank" without rel="noreferrer"
                        href="https://books.zuri.team/python-for-beginners?ref_id=odofing"
                        role="button">Python Books</a>


                    <a className="btn btn-light m-3 p-3" id="pitch" target="_blank" without rel="noreferrer"
                        href="https://background.zuri.team/"
                        role="button">Background Checks for Coders</a>

                    <a className="btn btn-light m-3 p-3" id="book__design" target="_blank" without rel="noreferrer"
                        href="https://books.zuri.team/design-rules"
                        role="button">Design Books</a>

                    <Link className="btn btn-light m-3 p-3" id="book__design"
                        to="/contact"
                    >Contact Me</Link>

                </div>
                <div className='d-flex justify-content-center mb-5 mt-3'>
                    <a style={{ color: 'black', fontSize: '25px', marginRight: '15px' }} href='https://internship.zuri.team/'>
                        <AiOutlineSlack />{' '}</a>
                    <a style={{ color: 'black', fontSize: '25px' }} href='https://github.com/odofing' rel='noopener noreferrer'
                        target='_blank'
                    >
                        <FaGithub />{' '}
                    </a>
                </div>
                <hr className='mb-5' />

            </div>
        </>
    )
}

export default Home