import React from 'react';
import Infotitle from '../Infotitle';

export default function index() {
    return (
        <div>
            <div>
                <Infotitle
                    title="Thank you for your time and consideration."
                    text="Use the form to send me an email."
                />
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="col-12">
                        <form action="https://formspree.io/FORM_ID" method="POST">
                            <div className="form-group">
                                <label className="text-info" for="exampleFormControlInput1">Your Name:</label>
                                <input type="text" name="name" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Type your name here" />
                            </div>

                            <div className="form-group">
                                <label className="text-info" for="exampleFormControlInput2">Your Email:</label>
                                <input type="email" name="email" className="form-control" id="exampleFormControlInput2"
                                    placeholder="Type your email here" />
                            </div>

                            <div className="form-group">
                                <label className="text-info" for="exampleFormControlTextarea1">Your Message: </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message"
                                    rows="2"></textarea>
                            </div>
                            <input className="btn btn-danger mt-3" type="submit" value="Send" />
                        </form>
                    </div>

                </div>
            </div>
            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="col-12">&nbsp;&#160;</div>
                </div>
            </div>
        </div>
    )
}