import React from 'react';
import Infotitle from '../Infotitle';
import Framework from './Framework';

export default function index() {
    return (
        <div>
            <Infotitle
                title="My Showcase"
                text="Welcome to my projects where you can view and explore my created webpages and apps along with my GitHub."
            />

            <div className="container">
                <div className="row">

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/PortfolioOne.jpg"
                            title="Bootstrap Portfolio"
                            text="This is the creation of my first portfolio and reposiorty link."
                            tools="Bootstrap 4.0, Particles.js"
                            github="https://github.com/CGMcBride/CGMcBride.github.io"
                            website="https://cgmcbride.github.io/"
                        />
                    </div>
                    {/* End Portfolio Item */}


                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/PortfolioOne.jpg"
                            title="Bootstrap Portfolio"
                            text="This is the creation of my first portfolio and reposiorty link."
                            tools="Bootstrap 4.0, Particles.js"
                            github="https://github.com/CGMcBride/CGMcBride.github.io"
                            website="https://cgmcbride.github.io/"
                        />
                    </div>
                    {/* End Portfolio Item */}


                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/PortfolioOne.jpg"
                            title="Bootstrap Portfolio"
                            text="This is the creation of my first portfolio and reposiorty link."
                            tools="Bootstrap 4.0, Particles.js"
                            github="https://github.com/CGMcBride/CGMcBride.github.io"
                            website="https://cgmcbride.github.io/"
                        />
                    </div>
                    {/* End Portfolio Item */}


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
