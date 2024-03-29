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

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/cavePexels.jpg"
                            title="Code Cave"
                            text="My second project to create a social app for current coding bootcamp students and alumni."
                            tools="React.js, React Bootstrap, Sequelize, MySQL, Heroku, Express, Node.js"
                            github="https://github.com/Group-5-Project-2/CodeCave"
                            website="https://codecave.herokuapp.com/"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/fitness-tracker.jpg"
                            title="My Fitness Tracker"
                            text="A fitness tracker to track your workouts for both cardio and resistance exercise."
                            tools="React.js, React Bootstrap, MongoDB, Heroku, Express, Node.js"
                            github="https://github.com/CGMcBride/MyFitnessTracker"
                            website="https://conners-fitness-tracker.herokuapp.com/?id=5f4db98f74d91200175b6c5b"
                        />
                    </div>
                    {/* End Portfolio Item */}

                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/Staff-Directory.png"
                            title="Employee Directory"
                            text="This is employee directory you can filter by first and last name to search for specific people."
                            tools="React.js, CSS, Code Climate, CirlceCi, Heroku, Express, Node.js"
                            github="https://github.com/CGMcBride/EmployeeDirectoryReact"
                            website="https://employeereact-conner.herokuapp.com/"
                        />
                    </div>
                    {/* End Portfolio Item */}
                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/GoogleBookSearch.jpg"
                            title="Google Book Search"
                            text="This app will let you search for a book of your choice from the google book store."
                            tools="React.js, CSS, Code Climate, CirlceCi, Heroku, Mongo, Node.js"
                            github="https://github.com/CGMcBride/googlebooksearch"
                            website="https://booksearchreactgoogle.herokuapp.com/"
                        />
                    </div>
                    {/* End Portfolio Item */}
                    {/* New Portfolio Item */}
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-4">
                        <Framework
                            image="./images/portfolio/HikingTrails.jpg"
                            title="TRAILme"
                            text="This hiking app will allow you to search trails in your area and track your fitbit information."
                            tools="React.js, React Bootstrap, Heroku, Mongo, Mongoose, Node.js"
                            github="https://github.com/TRAILme-APP/TRAILme"
                            website="https://trailme.herokuapp.com/"
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
