

import React, { Component } from 'react'


export default class Resume extends Component {
    render() {
        return (
            <div>
                <div className="container pb-5 mb-5">
                    <div className="row">
                        <div id="mypicture" className="col-sm-12 col-md-4">
                            <img src="./images/Portifolio picture.jpg" alt="Conner McBride" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <iframe src="https://desaign.app/clients/ConnerMcBride/ConnerMcBride_Resume_v1.pdf" width="100%" height="500px"></iframe>
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
}

