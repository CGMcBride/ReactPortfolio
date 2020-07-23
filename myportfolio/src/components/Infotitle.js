import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

export default function Infotitle(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-4">{props.title}</h1>
                <hr className="my-2" />
                <p className="lead">{props.text}</p>
                {/* <div class="container">
			<div class="row">
				<div class="col-12">
					<h1 class="display-4 text-light" id="text">Conner McBride</h1>
					<p class="lead text-light" id="lead">
						Welcome to <i>my portfolio</i> where you can learn a few things
						about me, explore a few of my created pages and view my resume.
					</p>
				</div>
			</div>
		</div> */}

            </Jumbotron>
        </div>
    )
}
