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
                            image="./images/portfolio/password.jpg"
                            title="Password Generator"
                            text="This will generate a random password for use."
                            tools="Bootstrap 4.0, JavaScript"
                            github="https://github.com/CGMcBride/Password_Generator"
                            website="https://cgmcbride.github.io/Password_Generator/"
                        />
                    </div>
                    {/* End Portfolio Item */}


                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/calendardate.png"
                            title="Day Scheduler"
                            text="A one day scheduler for use to setup events and meetings."
                            tools="Bootstrap 4.0, JavaScript"
                            github="https://github.com/CGMcBride/Conner-s-Work-Day-Scheduler"
                            website="https://cgmcbride.github.io/Conner-s-Work-Day-Scheduler/"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/Weather.jpg"
                            title="Weather Dashboard"
                            text="Explore the weather in your current city and view weather from different areas."
                            tools="Bootstrap 4.0, JQuery, Moment.js"
                            github="https://github.com/CGMcBride/Weather-Dashboard-"
                            website="https://cgmcbride.github.io/Weather-Dashboard-/"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/Codeimage.jpg"
                            title="Code Quiz"
                            text="Play a fun game and see how fast you can answer the questions correctly!."
                            tools="JavaScript"
                            github="https://github.com/CGMcBride/CodeQuiz"
                            website="https://cgmcbride.github.io/CodeQuiz/"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/fishing11.jpg"
                            title="Perfect Park"
                            text="My first project, explore a national park and get location and park history."
                            tools="JavaScript, JQuery, Google Map Api, Moment.js"
                            github="https://github.com/PerfectPark1/PerfectPark"
                            website="https://perfectpark1.github.io/PerfectPark/"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/Notepad.png"
                            title="Note Taker Express"
                            text="Create notes to be used, you can update and delete as needed."
                            tools="JavaScript, JQuery, Heroku, Express, Node.js"
                            github="https://github.com/CGMcBride/NoteTakerExpress"
                            website="https://notetaker-conner-app.herokuapp.com/"
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
