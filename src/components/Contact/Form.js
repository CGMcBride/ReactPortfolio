// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            // <form
            //     onSubmit={this.submitForm}
            //     action="https://formspree.io/meqrvpoy"
            //     method="POST"
            // >
            //     {/* <!-- add your custom form HTML here --> */}
            //     <label>Email:</label>
            //     <input type="email" name="email" />
            //     <label>Message:</label>
            //     <input type="text" name="message" />
            //     {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            //     {status === "ERROR" && <p>Ooops! There was an error.</p>}
            // </form>

            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/meqrvpoy"
                method="POST"
            >
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
                {/* <input className="btn btn-danger mt-3" type="submit" value="Send" /> */}
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}

            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}