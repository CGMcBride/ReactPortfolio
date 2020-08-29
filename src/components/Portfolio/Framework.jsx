import React from "react";
import "./Framework.css";

export default function Framework(props) {
	return (
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img src={props.image} alt="Avatar" />
				</div>
				<div className="flip-card-back">
					<h1>{props.title}</h1>
					<p>{props.text}</p>
					<p>Tools: {props.tools}</p>
					<div className="container w-100">
						<div className="row d-flex justify-content-center m-0">
							<div className="col-6 p-0"><a href={props.github} target="_blank">
							<button className="btn-4">GitHub</button>
						</a></div>
							<div className="col-6 p-0"><a href={props.website} target="_blank">
							<button className="btn-4">Website</button>
						</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
