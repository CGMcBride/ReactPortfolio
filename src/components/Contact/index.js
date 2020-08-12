import React from 'react';
import Infotitle from '../Infotitle';
import Form from './Form';

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
                        <Form />

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